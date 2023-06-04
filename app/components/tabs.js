import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class TabsComponent extends Component {
  @service router;
  @tracked isFeeds = true;
  @tracked isFavorites = false;

  selectTab(tab) {
    this.isFeeds = false;
    this.isFavorites = false;
    if (tab === 'feeds') {
      this.isFeeds = true;
    } else if (tab === 'favorites') {
      this.isFavorites = true;
    }
  }

  @action
  selectFeeds() {
    this.selectTab('feeds');
    this.router.transitionTo('feeds');
  }

  @action
  selectFavorites() {
    this.selectTab('favorites');
    this.router.transitionTo('favorites');
  }
}
