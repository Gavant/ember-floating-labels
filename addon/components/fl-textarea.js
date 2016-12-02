import Ember from 'ember';
import FloatingLabelMixin from '../mixins/floating-label';
import InputActionsMixin from '../mixins/fl-input-actions';
import layout from '../templates/components/fl-textarea';

export default Ember.Component.extend(FloatingLabelMixin, InputActionsMixin, {
    layout,
    classNames: ['floating-label-textarea']
});
