import ArrayProxy from '@ember/array/proxy';
import { action } from '@ember/object';
import { guidFor } from '@ember/object/internals';
import ObjectProxy from '@ember/object/proxy';
import { scheduleOnce } from '@ember/runloop';
import { dasherize } from '@ember/string';
import { isEmpty } from '@ember/utils';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export type HTMLInputType =
    | 'button'
    | 'checkbox'
    | 'color'
    | 'date'
    | 'datetime-local'
    | 'email'
    | 'file'
    | 'hidden'
    | 'image'
    | 'month'
    | 'number'
    | 'password'
    | 'radio'
    | 'range'
    | 'reset'
    | 'search'
    | 'submit'
    | 'tel'
    | 'text'
    | 'time'
    | 'url'
    | 'week';

export interface FlInputArgs<V> {
    value?: V | null;
    placeholder?: string;
    containerClass?: string;
    inputBaseClass?: string;
    inset?: boolean;
    id?: string;
    name?: string;
    type?: HTMLInputType;
    errors?: string[];
}

interface BaseFloatingSignature<V> {
    Args: FlInputArgs<V>;
    Element?: unknown;
    Blocks: unknown;
}

export abstract class BaseFloatingLabelClass<
    Signature extends BaseFloatingSignature<V>,
    V
> extends Component<Signature> {
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
     * Get the id and pass it to the text input, and use it in the label's `for` value
     *
     * @readonly
     * @memberof FlInput
     */
    get id(): string {
        return this.args.id ?? `fl-input-${guidFor(this)}`;
    }

    get name(): string {
        return this.args.name ?? dasherize(this.args.placeholder?.replace(/\W/g, '') ?? '');
    }

    get firstError(): string | null {
        return Array.isArray(this.args.errors) ? this.args.errors[0] : null;
    }

    get placeholder(): string | undefined {
        return this.firstError ?? this.args.placeholder;
    }

    get type(): HTMLInputType {
        return this.args.type ?? 'text';
    }

    /**
     * Updates the component's focused state when it recieves focus
     */
    @action
    onFocusIn(): void {
        scheduleOnce('afterRender', this, this.setFocus, true);
    }

    /**
     * Updates the component's focused state when it loses focus
     */
    @action
    onFocusOut(): void {
        scheduleOnce('afterRender', this, this.setFocus, false);
    }

    /**
     * Safely sets the component's new focused state
     * @param {Boolean} newValue
     */
    private setFocus(newValue: boolean) {
        if (!this.isDestroying && !this.isDestroyed) {
            this.hasFocus = newValue;
        }
    }

    /**
     * Checks if the provided value is "empty" or not, handling ember object/array proxies
     * @param {any} value
     */
    private isValueEmpty(value: any): boolean {
        if (value instanceof ObjectProxy) {
            return this.isValueEmpty(value.get('content'));
        } else if (value instanceof ArrayProxy) {
            return this.isValueEmpty(value.get('content'));
        }

        return isEmpty(value);
    }
}
export interface FLInputSignature<V> extends BaseFloatingSignature<V> {
    Args: FlInputArgs<V>;
    Element: HTMLInputElement;
    Blocks: { default: [] };
}
export default class FlInput<V> extends BaseFloatingLabelClass<FLInputSignature<V>, V> {}
