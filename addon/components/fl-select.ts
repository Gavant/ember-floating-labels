import Component from '@ember/component';
import FloatingLabelMixin from '../mixins/floating-label';
import { tryInvoke } from '@ember/utils';
import { alias } from '@ember/object/computed';
import { not } from '@ember/object/computed';

export default Component.extend(FloatingLabelMixin, {
    classNames: ['floating-label-select'],
    valuePath: "value",
    labelPath: "label",
    emptyOptionText: "",
    disabled: null,
    allowClear: true,
    showEmptyOptionText: alias('_focus'),
    disableEmptyOption: not('allowClear'),

    actions: {
        onChange(value) {
          tryInvoke(this, 'onchange', [value]);
        }
    }
});
