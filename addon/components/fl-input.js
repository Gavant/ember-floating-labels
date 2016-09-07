import Ember from 'ember';
import layout from '../templates/components/fl-input';

const {
  isEmpty,
  computed
} = Ember;

export default Ember.Component.extend({
    layout,
    classNames: ['floating-label'],
    classNameBindings: ['hasFocus', 'hasContent'],
    hasContent: computed('value', function() {
        this.set('value', this.get('value'));
        return this._hasContent(this.get('value'));
    }),
    type: "text",
    hasFocus: computed('hasContent', 'disabled', '_focus', function() {
        return (this.get('hasContent') || this.get('disabled') || this.get('_focus'));
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
      this.set('_focus', true);
      if (this.attrs['focus-in']) {
          this.attrs['focus-in'](...arguments);
      }
      return true;
  },
  focusOut () {
      this.set('_focus', false);
      if (this.attrs['focus-out']) {
          this.attrs['focus-out'](...arguments);
      }
      return true;
  },
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
