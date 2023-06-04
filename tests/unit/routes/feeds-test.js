import { module, test } from 'qunit';
import { setupTest } from 'news-browser/tests/helpers';

module('Unit | Route | feeds', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:feeds');
    assert.ok(route);
  });
});
