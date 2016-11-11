import Ember from 'ember';

export default Ember.Controller.extend({
    inlineSelectOptions: [
        {value: "a", label: "Apples"},
        {value: "b", label: "Bananas"},
        {value: "c", label: "Oranges"}
    ]
});
