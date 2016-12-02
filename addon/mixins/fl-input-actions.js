import Ember from 'ember';

const { canInvoke } = Ember;

export default Ember.Mixin.create({
    actions: {
        enter () {
            if (canInvoke(this.attrs, 'enter')) {
                this.attrs.enter(...arguments);
            }
        },
        insertLine () {
            if (canInvoke(this.attrs, 'insert-newline')) {
                this.attrs['insert-newline'](...arguments);
            }
        },
        escapePress () {
            if (canInvoke(this.attrs, 'escape-press')) {
                this.attrs['escape-press'](...arguments);
            }
        },
        keyPress () {
            if (canInvoke(this.attrs, 'key-press')) {
                this.attrs['key-press'](...arguments);
            }
        },
        keyUp () {
            if (canInvoke(this.attrs, 'key-up')) {
                this.attrs['key-up'](...arguments);
            }
        }
    }
});
