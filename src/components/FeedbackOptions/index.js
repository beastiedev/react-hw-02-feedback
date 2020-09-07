import React from 'react';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
    <>
        {options.map((option) => (
            <input key={option.name} className="feedback-action" type="button" value={option.title} onClick={() => onLeaveFeedback(option.name)} />
        ))}
    </>
);

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string,
            title: PropTypes.string,
        })
    ),
}

export default FeedbackOptions;