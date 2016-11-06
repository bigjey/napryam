import template from './template.html';
import controller from './controller';

const questionForm = {
  template,
  controller,
  bindings: {
    onSave: '&'
  }
}

export default questionForm;
