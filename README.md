# News Browser

## Implementation
1. Started off creating a tab component and added it to the application.hbs, as tabs has to be presented always on the top on all the routes.
2. Created two routes Feeds and Favorites to show the appropriate articles.
3. Created components Article container and Article which will be used on both the Feeds and Favorites templates.
4. In order to show a readable published date for each articles, created an helper called date-converter.
5. Created a service called Api-Helper, which has the functions to return the API url that we will be needing.

## Enhancements
1. I can make the tab component fixed on top instead of making it scrollable along with the articles.
2. Pagination can be implemented, so that every time we scroll to the end of the page, we can make request call to get remaining articles.
3. Ember Data can be implemented, as it will enable us to create a model for our article data and new fields can be added. By using this, we can avoid the usage of "isRead" and "isFavorite" booleans that we are using currently.
4. Design can be improved.
5. Unit tests need to be implemented.

## Ember Readme
This README outlines the details of collaborating on this Ember application.
A short introduction of this app could easily go here.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with npm)
* [Ember CLI](https://cli.emberjs.com/release/)
* [Google Chrome](https://google.com/chrome/)

## Installation

* `git clone <repository-url>` this repository
* `cd news-browser`
* `npm install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).
* Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Linting

* `npm run lint`
* `npm run lint:fix`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](https://emberjs.com/)
* [ember-cli](https://cli.emberjs.com/release/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
