import { A } from '@ember/array';
import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class SelectController extends Controller {
    @tracked selectLgValue?: string;
    @tracked selectInlineValue?: string;
    @tracked selectBlockValue?: string;
    @tracked errors: string[] = [];

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
    onSelectInlineValue(value: string) {
        this.selectInlineValue = value;
    }

    @action
    onSelectLgValue(value: string) {
        this.selectInlineValue = value;
    }

    @action
    onSelectBlockValue(value: string) {
        this.selectInlineValue = value;
    }

    @action
    showError() {
        this.errors = ['This is an example error'];
    }
}
