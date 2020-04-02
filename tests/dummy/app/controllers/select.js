import Controller from '@ember/controller';
import { A } from '@ember/array';
import { tracked } from '@glimmer/tracking';

export default class SelectController extends Controller {
    @tracked selectLgValue;
    @tracked selectInlineValue;
    @tracked selectBlockValue;

    inlineSelectOptions = A([
        {value: "a", label: "Apples"},
        {value: "b", label: "Bananas"},
        {value: "c", label: "Oranges"}
    ]);

    customSelectOptions = A([
        {abbrv: "NY", name: "New York"},
        {abbrv: "NJ", name: "New Jersey"},
        {abbrv: "CT", name: "Connecticut"}
    ]);
}
