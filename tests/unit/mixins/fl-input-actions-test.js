import EmberObject from '@ember/object';
import FlInputActionsMixin from 'fl-input/mixins/fl-input-actions';
import { module, test } from 'qunit';

module('Unit | Mixin | fl input actions');

// Replace this with your real tests.
test('it works', function(assert) {
  let FlInputActionsObject = EmberObject.extend(FlInputActionsMixin);
  let subject = FlInputActionsObject.create();
  assert.ok(subject);
});
