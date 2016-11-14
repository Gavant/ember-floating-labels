import Ember from 'ember';
import FloatingLabelMixin from '../mixins/floating-label';
import layout from '../templates/components/fl-input';

const { canInvoke } = Ember;

export default Ember.Component.extend(FloatingLabelMixin, {
    layout,
    type: "text",

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
