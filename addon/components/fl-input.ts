import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { isEmpty } from '@ember/utils';
import { scheduleOnce } from '@ember/runloop';
import ObjectProxy from '@ember/object/proxy';
import ArrayProxy from '@ember/array/proxy';

export interface FlInputArgs {
    value: any;
    placeholder?: string;
    containerClass?: string;
    inputBaseClass?: string;
}

export default class FlInput extends Component<FlInputArgs> {
    @tracked hasFocus: boolean = false;

    /**
     * Returns true if the provided value argument is not empty
     */
    get hasContent(): boolean {
        return !this.isValueEmpty(this.args.value);
    }

    /**
     * Returns true if the component is either focused or has a non-empty value
     */
    get hasFocusOrContent(): boolean {
        return this.hasContent || this.hasFocus;
    }

    /**
     * The base class applied to all inputs, defaults to the Bootstrap form-control class
     */
    get inputBaseClass(): string {
        return this.args.inputBaseClass ?? 'form-control';
    }

    /**
     * Updates the component's focused state when it recieves focus
     */
    @action
    onFocusIn() {
        scheduleOnce('afterRender', this, () => this.setFocus(true));
    }

    /**
     * Updates the component's focused state when it loses focus
     */
    @action
    onFocusOut() {
        scheduleOnce('afterRender', this, () => this.setFocus(false));
    }

    /**
     * Safely sets the component's new focused state
     * @param {Boolean} newValue
     */
    private setFocus(newValue: boolean) {
        if(!this.isDestroying && !this.isDestroyed) {
            this.hasFocus = newValue;
        }
    }

    /**
     * Checks if the provided value is "empty" or not, handling ember object/array proxies
     * @param {any} value
     */
    private isValueEmpty(value: any): boolean {
        if (value instanceof ObjectProxy || value instanceof ArrayProxy) {
            //@ts-ignore we need to use `.get()` to access the proxy value correctly
            return this.isValueEmpty(value.get('content'));
        }

        return isEmpty(value);
    }
}

