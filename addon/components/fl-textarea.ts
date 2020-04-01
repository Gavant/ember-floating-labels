import Component from '@ember/component';
import FloatingLabelMixin from '../mixins/floating-label';
import InputActionsMixin from '../mixins/fl-input-actions';

export default Component.extend(FloatingLabelMixin, InputActionsMixin, {
    classNames: ['floating-label-textarea']
});
