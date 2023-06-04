import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class ArticleComponent extends Component {
  @service apiHelper;
  @tracked isFavorite;
  @tracked isRead;

  constructor(owner, args) {
    super(owner, args);
    this.isFavorite = this.apiHelper.favoriteArticles.includes(
      this.args.article
    );
    this.isRead = this.apiHelper.readArticles.includes(this.args.article);
  }

  @action
  redirectToUrl(article) {
    this.apiHelper.readArticles.pushObject(article);
    this.isRead = true;
    window.open(article.url, '_blank');
  }

  @action
  updateFavorite(article) {
    if (this.isFavorite) {
      this.isFavorite = false;
      this.apiHelper.favoriteArticles.removeObject(article);
    } else {
      this.isFavorite = true;
      this.apiHelper.favoriteArticles.pushObject(article);
    }
  }
}
