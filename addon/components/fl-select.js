import Ember from 'ember';
import FloatingLabelMixin from '../mixins/floating-label';
import layout from '../templates/components/fl-select';

const { canInvoke, computed } = Ember;

export default Ember.Component.extend(FloatingLabelMixin, {
    layout,
    classNames: ['floating-label-select'],
    valuePath: "value",
    labelPath: "label",
    emptyOptionText: "",
    allowClear: true,
    showEmptyOptionText: computed.alias('_focus'),
    disableEmptyOption: computed.not('allowClear'),

    actions: {
        onChange(value) {
            if(canInvoke(this.attrs, 'onchange')) {
                this.attrs.onchange(value);
            }
        }
    }
});
