import Ember from 'ember';

export default Ember.Controller.extend({
    selectLgValue: "",

    inlineSelectOptions: [
        {value: "a", label: "Apples"},
        {value: "b", label: "Bananas"},
        {value: "c", label: "Oranges"}
    ],

    customSelectOptions: [
        {abbrv: "NY", name: "New York"},
        {abbrv: "NJ", name: "New Jersey"},
        {abbrv: "CT", name: "Connecticut"}
    ]
});
