import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ArticleContainerComponent extends Component {
  @service apiHelper;
  @tracked searchText;

  @action
  updateSearchText(event) {
    this.searchText = event.target.value;
    if(event.target.value === '') {
      this.args.searchArticles('');
    }
  }
}
