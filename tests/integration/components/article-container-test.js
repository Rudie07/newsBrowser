import { module, test } from 'qunit';
import { setupRenderingTest } from 'news-browser/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | article-container', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<ArticleContainer />`);

    assert.dom(this.element).hasText('');

    // Template block usage:
    await render(hbs`
      <ArticleContainer>
        template block text
      </ArticleContainer>
    `);

    assert.dom(this.element).hasText('template block text');
  });
});
