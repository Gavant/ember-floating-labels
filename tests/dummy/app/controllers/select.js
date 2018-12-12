import Controller from '@ember/controller';
import { get, set } from '@ember/object';
import { A } from '@ember/array';

export default Controller.extend({
    selectLgValue: null,
    inlineSelectOptions: A([
        {value: "a", label: "Apples"},
        {value: "b", label: "Bananas"},
        {value: "c", label: "Oranges"}
    ]),

    customSelectOptions: A([
        {abbrv: "NY", name: "New York"},
        {abbrv: "NJ", name: "New Jersey"},
        {abbrv: "CT", name: "Connecticut"}
    ]),

    init() {
        this._super(...arguments);
        set(this, 'selectLgValue', get(this, 'customSelectOptions.firstObject'));
    }
});
