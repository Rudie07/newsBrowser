import { module, test } from 'qunit';
import { setupTest } from 'news-browser/tests/helpers';

module('Unit | Service | api-helper', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let service = this.owner.lookup('service:api-helper');
    assert.ok(service);
  });
});
