import Mixin from '@ember/object/mixin';
import { tryInvoke } from '@ember/utils';

export default Mixin.create({
    actions: {
        enter () {
          tryInvoke(this, 'enter', ...arguments);
        },
        insertLine () {
          tryInvoke(this, 'insert-newline', ...arguments);
        },
        escapePress () {
          tryInvoke(this, 'escape-press', ...arguments);
        },
        keyPress () {
          tryInvoke(this, 'key-press', ...arguments);
        },
        keyUp () {
          tryInvoke(this, 'key-up', ...arguments);
        }
    }
});
