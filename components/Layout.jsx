import React from 'react';
import Questions from './Questions.jsx';

export default class Layout extends React.Component {

  render() {

    return (
      <div>
        <div className="container"> Questions
          <Questions />
        </div>
      </div>
    )
  }
}
