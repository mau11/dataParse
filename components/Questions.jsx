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
    return fetch('api/questions', {method: 'GET'})
      .then((response) => response.json())
      .then(list => this.setState({questions: list}));
  }

  render() {

    return (
      <div>Rendered here :
        <ul>
        {this.state.questions.map(item =>
          <li key={item.id}>
            <span>{item.question} {item.answer} {item.distractors}</span>
          </li>)}
        </ul>
      </div>
    )
  }
}
