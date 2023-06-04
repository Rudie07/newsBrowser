import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { A } from '@ember/array';
import { action } from '@ember/object';

export default class FeedsController extends Controller {
  @service apiHelper;
  articles = A([]);

  init() {
    super.init(...arguments);
    this.fetchArticles();
  }

  async fetchArticles() {
    const response = await fetch(this.apiHelper.getFeedsUrl());
    const data = await response.json();
    this.set('articles', A(data.articles));
  }

  @action
  async searchArticles(text) {
    if(text == null) text = '';
    const response = await fetch(this.apiHelper.getSearchFeedUrl(text));
    const data = await response.json();
    this.set('articles', A(data.articles));
  }
}
