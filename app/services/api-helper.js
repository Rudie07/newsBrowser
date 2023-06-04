import Service from '@ember/service';
import { A } from '@ember/array';

export default class ApiHelperService extends Service {
  apiKey = '4eea7a79f5454c5aa6b19e112bbc8688';
  baseUrl = 'https://newsapi.org/v2/top-headlines';
  favoriteArticles = A([]);
  readArticles = A([]);

  getFeedsUrl() {
    const url = new URL(this.baseUrl);
    url.searchParams.set('country', 'us');
    url.searchParams.set('apiKey', this.apiKey);
    return url;
  }

  getSearchFeedUrl(text) {
    const url = new URL(this.baseUrl);
    url.searchParams.set('country', 'us');
    url.searchParams.set('apiKey', this.apiKey);
    url.searchParams.set('q', text);
    return url;
  }
}
