import React, { useState } from 'react';
import { FeedbackType, feedbackTypes } from '../WidgetForm';

interface FeedbackTypeStepProps {
  onFeedbackTypeChanged: (type: FeedbackType) => void;
}

const FeedbackTypeStep: React.FC<FeedbackTypeStepProps> = ({onFeedbackTypeChanged}) => {
  return (
    <div className="flex py-8 gap-2 w-full">
      {Object.entries(feedbackTypes).map(([key, { icon, title }]) => {
        return (
          <button
            className='bg-zinc-800 rounded-lg py-5 w-24 flex flex-1 flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none'
            type='button'
            key={key}
            onClick={() => {
              onFeedbackTypeChanged(key as FeedbackType)
            }}
          >
            {icon}
            <span>{title}</span>
          </button>
        );
      })}
    </div>
  );
}

export default FeedbackTypeStep;