import { action } from '@ember/object';

import FlInput, { FlInputArgs } from '../fl-input';

export interface FlSelectArgs extends FlInputArgs {
    options: Array<Record<string, unknown>>;
    valuePath?: string;
    labelPath?: string;
    emptyOptionText?: string;
    allowClear?: boolean;
    onChange: (value: any) => void;
}

export default class FlSelect extends FlInput<FlSelectArgs> {
    /**
     * The object property path to use as the select `<option>` value attribute
     */
    get valuePath(): string {
        return this.args.valuePath || 'value';
    }

    /**
     * The object property path to use as the select `<option>` label
     */
    get labelPath(): string {
        return this.args.labelPath || 'label';
    }

    /**
     * If true, the user can select the "empty" option to clear the value
     */
    get allowClear(): boolean {
        return this.args.allowClear ?? true;
    }

    /**
     * The "empty" option cannot be selected if @allowClear is false
     */
    get disableEmptyOption(): boolean {
        return !this.allowClear;
    }

    /**
     * Sends an onChange action arg with the new value when an option is selected
     * @param {Event} event
     */
    @action
    onChange(event: Event): void {
        const target = event.target as HTMLSelectElement;
        this.args.onChange(target.value);
    }
}
