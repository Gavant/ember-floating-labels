import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class TextController extends Controller {
    @tracked errors = [];

    @action
    onFocusIn(event) {
        // eslint-disable-next-line no-console
        console.log('focused in!', event);
    }

    @action
    onFocusOut(event) {
        // eslint-disable-next-line no-console
        console.log('focused out!', event);
    }

    @action
    onKeyDown(event) {
        // eslint-disable-next-line no-console
        console.log('keydown!', event);
    }

    @action
    onKeyUp(event) {
        // eslint-disable-next-line no-console
        console.log('keyup!', event);
    }

    @action
    onKeyPress(event) {
        // eslint-disable-next-line no-console
        console.log('keypress!', event);
    }

    @action
    showError() {
        this.errors = ['This is an example error'];
    }
}
