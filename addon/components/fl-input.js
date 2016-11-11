import Ember from 'ember';
import FloatingLabelMixin from '../mixins/floating-label';
import layout from '../templates/components/fl-input';

export default Ember.Component.extend(FloatingLabelMixin, {
    layout,
    type: "text",

    actions: {
        enter () {
            if (this.attrs.enter) {
                this.attrs.enter(...arguments);
            }
        },
        insertLine () {
            if (this.attrs['insert-newline']) {
                this.attrs['insert-newline'](...arguments);
            }
        },
        escapePress () {
            if (this.attrs['escape-press']) {
                this.attrs['escape-press'](...arguments);
            }
        },
        keyPress () {
            if (this.attrs['key-press']) {
                this.attrs['key-press'](...arguments);
            }
        },
        keyUp () {
            if (this.attrs['key-up']) {
                this.attrs['key-up'](...arguments);
            }
        }
    }
});
