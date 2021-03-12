import { dasherize } from '@ember/string';
import FlInput, { FlInputArgs } from './fl-input';

export interface FlTextareaArgs extends FlInputArgs {}

export default class FlTextarea extends FlInput<FlTextareaArgs> {
    get areaName() {
        const name = this.args.name ?? this.args.placeholder;
        return name ? dasherize(name) : '';
    }
}
