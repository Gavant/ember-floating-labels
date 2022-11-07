import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';

export default class TextController extends Controller {
    @tracked errors: string[] = [];
    @tracked textareaInlineValue = '';
}
