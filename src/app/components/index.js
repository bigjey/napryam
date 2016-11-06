import home from './home';
import f0f from './f0f';
import questions from './questions';
import questionForm from './questionForm';

const components = angular.module('app.components', [])
  .component('home', home)
  .component('f0f', f0f)
  .component('questions', questions)
  .component('questionForm', questionForm)

export default components;
