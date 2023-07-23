import React, { useState } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions.js';
import Section from './Section/Section.js';
import Statistics from './Statistics/Statistics.js';
import Notification from './Notification/Notification.js';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const options = ['good', 'neutral', 'bad'];

  const onButtonClick = e => {
    const option = e.target.innerText.toLowerCase();
    switch (option) {
      case 'good': {
        setGood(good + 1);
        break;
      }
      case 'neutral': {
        setNeutral(neutral + 1);
        break;
      }
      case 'bad': {
        setBad(bad + 1);
        break;
      }
      default: {
        break;
      }
    }
  };
  const countTotalFeedback = () => {
    let totalFeedBack = good + neutral + bad;
    return totalFeedBack;
  };
  const countPositiveFeedbackPercentage = () => {
    let positiveFeedbacks = 0;
    if (countTotalFeedback()) {
      positiveFeedbacks = (good / countTotalFeedback()) * 100;
    }
    return positiveFeedbacks.toFixed() + '%';
  };

  return (
    <>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions options={options} onLeaveFeedback={onButtonClick} />
      </Section>
      <Section title={'Statistics'}>
        {countTotalFeedback() ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message={'There is no feedback'}></Notification>
        )}
      </Section>
    </>
  );
};
