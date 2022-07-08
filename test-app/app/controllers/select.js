import Controller from '@ember/controller';
import { A } from '@ember/array';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class SelectController extends Controller {
    @tracked selectLgValue;
    @tracked selectInlineValue;
    @tracked selectBlockValue;
    @tracked errors = [];

    inlineSelectOptions = A([
        { value: 'a', label: 'Apples' },
        { value: 'b', label: 'Bananas' },
        { value: 'c', label: 'Oranges' }
    ]);

    customSelectOptions = A([
        { abbrv: 'NY', name: 'New York' },
        { abbrv: 'NJ', name: 'New Jersey' },
        { abbrv: 'CT', name: 'Connecticut' }
    ]);

    @action
    onSelectInlineValue(value) {
        this.selectInlineValue = value;
    }

    @action
    onSelectLgValue(value) {
        this.selectInlineValue = value;
    }

    @action
    onSelectBlockValue(value) {
        this.selectInlineValue = value;
    }

    @action
    showError() {
        this.errors = ['This is an example error'];
    }
}
