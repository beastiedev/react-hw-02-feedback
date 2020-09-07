import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positivePercentage: 0
  }

  onFeedbackAction = (e) => {
    let state;
    switch (e) {
      case 'good':
        state = { good: this.state.good + 1 }
        break;

      case 'neutral':
        state = { neutral: this.state.neutral + 1 }
        break;

      case 'bad':
        state = { bad: this.state.bad + 1 }
        break;

      default:
        break;
    }
    this.setState(state, () => {
      this.countTotalFeedback();
    });
  }

  countTotalFeedback = () => {
    this.setState(
      { total: (this.state.good + this.state.neutral + this.state.bad) },
      this.countPositiveFeedbackPercentage
    );
  }

  countPositiveFeedbackPercentage = () => {
    this.setState({ positivePercentage: this.state.good / this.state.total * 100 });
  }

  render() {
    return (
      <div className="App">
        <h1>PLease leave feedback</h1>

        <input className="feedback-action" type="button" value="Good" onClick={() => this.onFeedbackAction('good')} />
        <input className="feedback-action" type="button" value="Neutral" onClick={() => this.onFeedbackAction('neutral')} />
        <input className="feedback-action" type="button" value="Bad" onClick={() => this.onFeedbackAction('bad')} />

        <h1>Statistics</h1>
        <p>Good: {this.state.good}</p>
        <p>Neutral: {this.state.neutral}</p>
        <p>Bad: {this.state.bad}</p>
        <p>Total: {this.state.total}</p>
        <p>Positive feedback: {this.state.positivePercentage.toFixed()}%</p>
      </div>
    )
  }
}

export default App;
