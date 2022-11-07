import { action } from '@ember/object';

import { BaseFloatingLabelClass, FlInputArgs } from '../fl-input';

// type ValuePath<T> = T extends { valuePath: infer S } ? (S extends string ? S : never) : never;
type ArrayMemberType<T> = T extends Array<infer U> ? U : never;
// O = { value: string; label: string; }
export interface FlSelectArgs<
    OA extends Array<object> | undefined,
    O extends ArrayMemberType<OA>,
    P extends keyof O,
    V extends O[P]
> extends FlInputArgs<V> {
    options?: OA;
    /**
     * The types here are inferred correctly if options is passed. If not, we set it to any. This is for the block usage of the component when you render the options yourself.
     *
     * @type {(OA extends undefined ? any : V | null)}
     * @memberof FlSelectArgs
     */
    value?: OA extends undefined ? any : V | null;
    valuePath?: P;
    labelPath?: keyof O;
    emptyOptionText?: string;
    allowClear?: boolean;
    onChange: (value: any) => void;
}

interface FlSelectSignature<
    OA extends Array<object> | undefined,
    O extends ArrayMemberType<OA>,
    P extends keyof O,
    V extends O[P]
> {
    Args: FlSelectArgs<OA, O, P, V>;
    Element: HTMLSelectElement;
    Blocks: {
        default?: [];
    };
}

export default class FlSelect<
    OA extends Array<object> | undefined,
    O extends ArrayMemberType<OA>,
    P extends keyof O,
    V extends O[P]
> extends BaseFloatingLabelClass<FlSelectSignature<OA, O, P, V>, V> {
    /**
     * The object property path to use as the select `<option>` value attribute
     */
    get valuePath(): keyof O {
        return this.args.valuePath || ('value' as P);
    }

    /**
     * The object property path to use as the select `<option>` label
     */
    get labelPath(): keyof O {
        return this.args.labelPath || ('label' as keyof O);
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
