import Route from '@ember/routing/route';

export default class SelectRoute extends Route {
    setupController(controller) {
        super.setupController(...arguments);
        controller.selectLgValue = controller.customSelectOptions.lastObject.abbrv;
    }
}
