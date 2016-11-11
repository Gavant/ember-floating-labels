import Ember from 'ember';
import FloatingLabelMixin from '../mixins/floating-label';
import layout from '../templates/components/fl-select';

export default Ember.Component.extend(FloatingLabelMixin, {
    layout,

    actions: {
        onChange(value) {
            
        }
    }
});
