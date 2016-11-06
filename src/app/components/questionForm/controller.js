class QuestionForm {
  constructor($http){
    "ngInject";

    Object.assign(this, {$http});
  }

  save(){
    if (this.questionForm.$valid){
      this.$http.post(`http://localhost:7564/api/questions`, this.serialize())
        .then(res => {
          const {success, question} = res.data;

          if (success){
            this.onSave({
              $event: {
                question
              }
            });
          }


        })
    }
  }

  serialize(){
    return {
      text: this.formData.text,
      meaning: this.formData.meaning,
      notes: this.formData.notes
    }
  }

}
export default QuestionForm;
