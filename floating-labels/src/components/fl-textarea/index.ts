import FlInput, { FlInputArgs } from '../fl-input';

export interface FlTextareaArgs extends FlInputArgs {}

interface FlTextAreaSignature {
    Args: FlTextareaArgs;
    Element: HTMLTextAreaElement;
    Blocks: {
        default?: [];
    };
}

export default class FlTextarea extends FlInput<FlTextAreaSignature> {}
