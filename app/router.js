import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType,
  rootUrl: '/logo-to-street-concept/'
});

Router.map(function() {
  this.resource('main', { path: '/logo-to-street-concept' });
});

export default Router;
