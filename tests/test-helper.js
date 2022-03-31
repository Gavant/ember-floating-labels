import Application from 'dummy/app';
import config from 'dummy/config/environment';
import * as QUnit from 'qunit';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';
import { setupGlobalA11yHooks } from 'ember-a11y-testing/test-support';
import { setup } from 'qunit-dom';
import { setupConsoleLogger, setRunOptions } from 'ember-a11y-testing/test-support';

setup(QUnit.assert);
setApplication(Application.create(config.APP));
setupGlobalA11yHooks(() => true);
setupConsoleLogger();

start();

setRunOptions({
    rules: {
        'color-contrast': {
            enabled: false
        }
    }
});
