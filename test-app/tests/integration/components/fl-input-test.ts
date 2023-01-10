import { render } from '@ember/test-helpers';

import { a11yAudit } from 'ember-a11y-testing/test-support';
import { setupRenderingTest } from 'ember-qunit';

import hbs from 'htmlbars-inline-precompile';
import { module, test } from 'qunit';

module('Integration | Component | fl-input', function (hooks) {
    setupRenderingTest(hooks);

    test('it renders', async function (assert) {
        await render(hbs`<FlInput @placeholder="test"/>`);
        await a11yAudit();
        assert.dom().hasText('test');
    });

    test('Type attribute is set on the <input> when using <FlInput />', async function (assert) {
        await render(hbs`<FlInput @placeholder="password" @type="password"/>`);
        await a11yAudit();
        assert.dom('input').hasAttribute('type', 'password');
    });

    test('Single error works', async function (assert) {
        await render(hbs`<FlInput @placeholder="password" @type="password" @errors="test"/>`);
        await a11yAudit();
        assert.dom().hasText('test');
    });

    test('Array error works', async function (assert) {
        this.set('errors', ['test', 'test2']);
        await render(hbs`<FlInput @placeholder="password" @type="password" @errors={{this.errors}}/>`);
        await a11yAudit();
        assert.dom().hasText('test');
    });

    test('Array of Arrays error works', async function (assert) {
        this.set('errors', [['test', 'test2']]);
        await render(hbs`<FlInput @placeholder="password" @type="password" @errors={{this.errors}}/>`);
        await a11yAudit();
        assert.dom().hasText('test');
    });
});
