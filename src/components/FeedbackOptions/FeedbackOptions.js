import React from 'react';
import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  return (
    <div>
      {options.map((option, index) => {
        return (
          <button
            key={index}
            className={css.btn}
            onClick={evt => onLeaveFeedback(evt)}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.elementType.isRequired,
};

export default FeedbackOptions;
