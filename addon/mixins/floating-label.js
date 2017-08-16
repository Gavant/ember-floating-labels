import Ember from 'ember';

const {
    isEmpty,
    computed,
    canInvoke,
    run: {
        scheduleOnce
    }
} = Ember;

export default Ember.Mixin.create({
    classNames: ['floating-label'],
    classNameBindings: ['hasFocus', 'hasContent'],
    hasContent: computed('value', 'value.content.[]', function() {
        return this._hasContent(this.get('value'));
    }),
    hasFocus: computed('hasContent', 'disabled', '_focus', function() {
        return (this.get('hasContent') || this.get('_focus'));
    }),
    label: computed('placeholder', function() {
        return this.get('placeholder');
    }),
    _hasContent(value) {
        if (value instanceof Ember.ObjectProxy || value instanceof Ember.ArrayProxy) {
            return this._hasContent(value.get('content'));
        }
        return !isEmpty(value);
    },
    focusIn () {
        scheduleOnce('afterRender', Ember, 'trySet', this, '_focus', true);
        if (canInvoke(this.attrs, 'focus-in')) {
            this.attrs['focus-in'](...arguments);
        }
        return true;
    },
    focusOut () {
        scheduleOnce('afterRender', Ember, 'trySet', this, '_focus', false);
        if (canInvoke(this.attrs, 'focus-out')) {
            this.attrs['focus-out'](...arguments);
        }
        return true;
    }
});
