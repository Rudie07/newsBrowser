import { module, test } from 'qunit';
import { setupRenderingTest } from 'news-browser/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Helper | date-converter', function (hooks) {
  setupRenderingTest(hooks);

  // TODO: Replace this with your real tests.
  test('it renders', async function (assert) {
    this.set('inputValue', '1234');

    await render(hbs`{{date-converter this.inputValue}}`);

    assert.dom(this.element).hasText('1234');
  });
});
