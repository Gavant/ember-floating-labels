import Ember from 'ember';
import FloatingLabelMixin from 'fl-input/mixins/floating-label';
import { module, test } from 'qunit';

module('Unit | Mixin | floating label');

// Replace this with your real tests.
test('it works', function(assert) {
  let FloatingLabelObject = Ember.Object.extend(FloatingLabelMixin);
  let subject = FloatingLabelObject.create();
  assert.ok(subject);
});
