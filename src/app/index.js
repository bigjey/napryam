import router from 'angular-ui-router';
import components from './components';
import appComponent from './app.component';
import modal from 'angular-ui-bootstrap/src/modal';
import tabs from 'angular-ui-bootstrap/src/tabs';
import messages from 'angular-messages';

const app = angular.module('app', [
  router,
  modal,
  messages,
  tabs,

  components.name
]);

app.component('app', appComponent);

app.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $stateProvider
    .state('app', {
      url: '/',
      abstract: true,
      component: 'app'
    })
    .state('app.home', {
      url: 'home',
      component: 'home'
    })
    .state('app.questions', {
      url: 'questions',
      component: 'questions'
    })
    .state('app.error', {
      url: '404',
      component: 'f0f'
    });

  $urlRouterProvider.otherwise('/404');

});

export default app;
