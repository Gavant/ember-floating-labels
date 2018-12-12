import Component from '@ember/component';
import FloatingLabelMixin from '../mixins/floating-label';
import InputActionsMixin from '../mixins/fl-input-actions';
import layout from '../templates/components/fl-textarea';

export default Component.extend(FloatingLabelMixin, InputActionsMixin, {
    layout,
    classNames: ['floating-label-textarea']
});
