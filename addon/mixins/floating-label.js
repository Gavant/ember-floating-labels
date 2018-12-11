import Mixin from '@ember/object/mixin';

import { isEmpty, tryInvoke } from '@ember/utils';
import { computed, trySet } from '@ember/object';
import { scheduleOnce } from '@ember/runloop';
import ObjectProxy from '@ember/object/proxy';
import ArrayProxy from '@ember/array/proxy';
import { reads } from '@ember/object/computed';

export default Mixin.create({
    classNames: ['floating-label'],
    classNameBindings: ['hasFocus', 'hasContent'],
    hasContent: computed('value', 'value.content.[]', function() {
        return this._hasContent(this.get('value'));
    }),
    hasFocus: computed('hasContent', 'disabled', '_focus', function() {
        return (this.get('hasContent') || this.get('_focus'));
    }),
    label: reads('placeholder'),

    _setFocus(value) {
      trySet(this, '_focus', value);
    },
    _hasContent(value) {
        if (value instanceof ObjectProxy || value instanceof ArrayProxy) {
            return this._hasContent(value.get('content'));
        }
        return !isEmpty(value);
    },
    focusIn () {
        scheduleOnce('afterRender', this, '_setFocus', true);
        tryInvoke(this, 'focus-in', ...arguments);
        return true;
    },
    focusOut () {
        scheduleOnce('afterRender', this, '_setFocus', false);
        tryInvoke(this, 'focus-out', ...arguments);
        return true;
    }
});
