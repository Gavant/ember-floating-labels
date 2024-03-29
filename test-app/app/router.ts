import EmberRouter from '@ember/routing/router';

import config from 'test-app/config/environment';

export default class Router extends EmberRouter {
    location = config.locationType;
    rootURL = config.rootURL;
}

Router.map(function () {
    this.route('text');
    this.route('select');
    this.route('textarea');
});
