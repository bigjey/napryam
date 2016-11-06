class Questions {
  items = [];

  fetching = true;

  constructor($http, $uibModal){
    "ngInject";

    Object.assign(this, {$http, $uibModal});

    this.fetchData();
  }

  fetchData(){
    this.$http.get('http://localhost:7564/api/questions')
      .then(({data}) => {
        const {questions} = data;

        this.items = questions;
      })
      .finally(() => {
        this.fetching = false;
      })
  }

  removeOne(id){
    this.$http.delete(`http://localhost:7564/api/questions/${id}`)
      .then(({data}) => {
        if (data.success){
          this.items = this.items.filter(q => q._id !== id)
        }
      })
  }

  openModal(){
    var self = this;

    const modal = this.$uibModal.open({
      controller: function($uibModalInstance){
        "ngInject";

        this.added = function({question}){
          self.items.push(question);

          $uibModalInstance.close();
        };
      },
      controllerAs: '$ctrl',
      template: `
        <div class="modal-body">
          <question-form on-save="$ctrl.added($event)"></question-form>
        </div>
      `
    });
  }

}
export default Questions;
