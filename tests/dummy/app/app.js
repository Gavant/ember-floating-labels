import Application from '@ember/application';
import Resolver from 'ember-resolver';
import loadInitializers from 'ember-load-initializers';
import config from 'dummy/config/environment';

export default class App extends Application {
    modulePrefix = config.modulePrefix;
    podModulePrefix = config.podModulePrefix;
    Resolver = Resolver;
}
// app/app.js

Ember.onerror = function (error) {
    if (Ember.testing) {
        throw error;
    }
};

loadInitializers(App, config.modulePrefix);
