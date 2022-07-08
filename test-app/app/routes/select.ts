import Transition from '@ember/routing/-private/transition';
import Route from '@ember/routing/route';

import SelectController from 'test-app/controllers/select';

export default class SelectRoute extends Route {
    setupController(controller: SelectController, model: any, transition: Transition) {
        super.setupController(controller, model, transition);
        controller.selectLgValue = controller.customSelectOptions.lastObject?.abbrv;
    }
}
