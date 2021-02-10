import { render } from '@ember/test-helpers';

import { a11yAudit } from 'ember-a11y-testing/test-support';
import { setupRenderingTest } from 'ember-qunit';

import hbs from 'htmlbars-inline-precompile';
import { module, test } from 'qunit';

module('Integration | Component | fl-select', function (hooks) {
    setupRenderingTest(hooks);

    test('it renders', async function (assert) {
        // Set any properties with this.set('myProperty', 'value');
        // Handle any actions with this.set('myAction', function(val) { ... });

        await render(hbs`<FlSelect @placeholder="test" />`);
        await a11yAudit();
        assert.equal(this.element.textContent?.trim(), 'test');
    });
});
