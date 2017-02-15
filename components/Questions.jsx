import React from 'react';

export default class Questions extends React.Component {
  constructor(){
    super();
    this.state = {
      questions: []
    }
  }

  componentWillMount() {
    this.getQuestions();
  }

  // Request questions from server
  getQuestions() {
    console.log('HERE');
    fetch('api/questions', {method: 'GET'})
      .then((response) => console.log(response.json()));
  }

  render() {

    return (
      <div>Rendered here :
        {this.state.questions}
      </div>
    )
  }
}
