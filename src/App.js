import React, { Component } from 'react';
import './App.css';
import Statistics from './components/Statistics';
import FeedbackOptions from './components/FeedbackOptions';
import Section from './components/Section';
import Notification from './components/Notification';

class App extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positivePercentage: 0
  };

  feedbackOptions = [
    {
      name: 'good',
      title: 'Good'
    },
    {
      name: 'neutral',
      title: 'Neutral'
    },
    {
      name: 'bad',
      title: 'Bad'
    },
  ];

  onFeedbackAction = (e) => {
    let state;
    switch (e) {
      case 'neutral':
        state = { neutral: this.state.neutral + 1 };
        break;

      case 'bad':
        state = { bad: this.state.bad + 1 };
        break;

      default:
        state = { good: this.state.good + 1 };
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
        <Section title="PLease leave feedback">
          <FeedbackOptions
            options={this.feedbackOptions}
            onLeaveFeedback={this.onFeedbackAction} />
        </Section>
        <Section title="Statistics">
          {this.state.total ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.state.total}
              positivePercentage={this.state.positivePercentage} />
          ) : (
              <Notification message="No feedback given" />
            )}
        </Section>
      </div>
    )
  }
}

export default App;
