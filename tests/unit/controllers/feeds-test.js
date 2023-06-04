import { module, test } from 'qunit';
import { setupTest } from 'news-browser/tests/helpers';

module('Unit | Controller | feeds', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let controller = this.owner.lookup('controller:feeds');
    assert.ok(controller);
  });
});
