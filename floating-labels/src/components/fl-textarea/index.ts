import { BaseFloatingLabelClass, FlInputArgs } from '../fl-input';

export interface FlTextareaArgs<O> extends FlInputArgs<O> {}

interface FlTextAreaSignature<O> {
    Args: FlTextareaArgs<O>;
    Element: HTMLTextAreaElement;
    Blocks: {
        default?: [];
    };
}

export default class FlTextarea<O> extends BaseFloatingLabelClass<FlTextAreaSignature<O>, O> {}
