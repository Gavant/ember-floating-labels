import Component from '@ember/component';
import FloatingLabelMixin from '../mixins/floating-label';
import InputActionsMixin from '../mixins/fl-input-actions';
import layout from '../templates/components/fl-input';

export default Component.extend(FloatingLabelMixin, InputActionsMixin, {
    layout,
    type: "text"
});
