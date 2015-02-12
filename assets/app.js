define("app/app", 
  ["ember","ember/resolver","ember/load-initializers","app/config/environment","exports"],
  function(__dependency1__, __dependency2__, __dependency3__, __dependency4__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    var Resolver = __dependency2__["default"];
    var loadInitializers = __dependency3__["default"];
    var config = __dependency4__["default"];

    Ember.MODEL_FACTORY_INJECTIONS = true;

    var App = Ember.Application.extend({
      modulePrefix: config.modulePrefix,
      podModulePrefix: config.podModulePrefix,
      Resolver: Resolver
    });

    loadInitializers(App, config.modulePrefix);

    __exports__["default"] = App;
  });
define("app/components/street-scene", 
  ["exports"],
  function(__exports__) {
    "use strict";
    // Generated by EmberScript 0.0.14
    var StreetScene;
    var get$ = Ember.get;
    StreetScene = Ember.Component.extend({
      classNames: 'street-scene',
      attributeBindings: 'style',
      style: Ember.computed(function () {
        if (get$(this, 'someState')) {
          return '';
        } else {
          return 'transform: scale(7) translate(35px, 250px)';
        }
      }).property('someState'),
      click: function () {
        return this.toggleProperty('someState');
      }
    });
    __exports__["default"] = StreetScene;;
  });
define("app/initializers/export-application-global", 
  ["ember","app/config/environment","exports"],
  function(__dependency1__, __dependency2__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    var config = __dependency2__["default"];

    function initialize(container, application) {
      var classifiedName = Ember.String.classify(config.modulePrefix);

      if (config.exportApplicationGlobal && !window[classifiedName]) {
        window[classifiedName] = application;
      }
    };
    __exports__.initialize = initialize;

    __exports__["default"] = {
      name: 'export-application-global',

      initialize: initialize
    };
  });
define("app/router", 
  ["ember","app/config/environment","exports"],
  function(__dependency1__, __dependency2__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    var config = __dependency2__["default"];

    var Router = Ember.Router.extend({
      location: config.locationType
    });

    Router.map(function() {
      this.resource('main', { path: '/logo-to-street-concept' });
    });

    __exports__["default"] = Router;
  });
define("app/templates/application", 
  ["exports"],
  function(__exports__) {
    "use strict";
    __exports__["default"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
    this.compilerInfo = [4,'>= 1.0.0'];
    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
      var stack1;


      stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      else { data.buffer.push(''); }
      
    });
  });
define("app/templates/components/street-scene", 
  ["exports"],
  function(__exports__) {
    "use strict";
    __exports__["default"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
    this.compilerInfo = [4,'>= 1.0.0'];
    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
      


      data.buffer.push("<div id=\"street\"><img src=\"logo-to-street-concept/luse-open.png\" /><img src=\"logo-to-street-concept/logo.png\" style=\"position: absolute; left: 530px; top: 90px; width: 150px\" /></div><img src=\"logo-to-street-concept/question.png\" />");
      
    });
  });
define("app/templates/main", 
  ["exports"],
  function(__exports__) {
    "use strict";
    __exports__["default"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
    this.compilerInfo = [4,'>= 1.0.0'];
    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
      var stack1;


      stack1 = helpers._triageMustache.call(depth0, "street-scene", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      else { data.buffer.push(''); }
      
    });
  });
define("app/tests/app.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - .');
    test('app.js should pass jshint', function() { 
      ok(true, 'app.js should pass jshint.'); 
    });
  });
define("app/tests/app/tests/helpers/resolver.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - app/tests/helpers');
    test('app/tests/helpers/resolver.js should pass jshint', function() { 
      ok(true, 'app/tests/helpers/resolver.js should pass jshint.'); 
    });
  });
define("app/tests/app/tests/helpers/start-app.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - app/tests/helpers');
    test('app/tests/helpers/start-app.js should pass jshint', function() { 
      ok(true, 'app/tests/helpers/start-app.js should pass jshint.'); 
    });
  });
define("app/tests/app/tests/test-helper.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - app/tests');
    test('app/tests/test-helper.js should pass jshint', function() { 
      ok(true, 'app/tests/test-helper.js should pass jshint.'); 
    });
  });
define("app/tests/helpers/resolver", 
  ["ember/resolver","app/config/environment","exports"],
  function(__dependency1__, __dependency2__, __exports__) {
    "use strict";
    var Resolver = __dependency1__["default"];
    var config = __dependency2__["default"];

    var resolver = Resolver.create();

    resolver.namespace = {
      modulePrefix: config.modulePrefix,
      podModulePrefix: config.podModulePrefix
    };

    __exports__["default"] = resolver;
  });
define("app/tests/helpers/start-app", 
  ["ember","app/app","app/router","app/config/environment","exports"],
  function(__dependency1__, __dependency2__, __dependency3__, __dependency4__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    var Application = __dependency2__["default"];
    var Router = __dependency3__["default"];
    var config = __dependency4__["default"];

    __exports__["default"] = function startApp(attrs) {
      var application;

      var attributes = Ember.merge({}, config.APP);
      attributes = Ember.merge(attributes, attrs); // use defaults, but you can override;

      Ember.run(function() {
        application = Application.create(attributes);
        application.setupForTesting();
        application.injectTestHelpers();
      });

      return application;
    }
  });
define("app/tests/router.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - .');
    test('router.js should pass jshint', function() { 
      ok(true, 'router.js should pass jshint.'); 
    });
  });
define("app/tests/test-helper", 
  ["app/tests/helpers/resolver","ember-qunit"],
  function(__dependency1__, __dependency2__) {
    "use strict";
    var resolver = __dependency1__["default"];
    var setResolver = __dependency2__.setResolver;

    setResolver(resolver);

    document.write('<div id="ember-testing-container"><div id="ember-testing"></div></div>');

    QUnit.config.urlConfig.push({ id: 'nocontainer', label: 'Hide container'});
    var containerVisibility = QUnit.urlParams.nocontainer ? 'hidden' : 'visible';
    document.getElementById('ember-testing-container').style.visibility = containerVisibility;
  });
/* jshint ignore:start */

define('app/config/environment', ['ember'], function(Ember) {
  var prefix = 'app';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = Ember['default'].$('meta[name="' + metaName + '"]').attr('content');
  var config = JSON.parse(unescape(rawConfig));

  return { 'default': config };
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

if (runningTests) {
  require("app/tests/test-helper");
} else {
  require("app/app")["default"].create({});
}

/* jshint ignore:end */
//# sourceMappingURL=app.map