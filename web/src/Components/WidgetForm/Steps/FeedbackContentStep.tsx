import { ArrowLeft } from 'phosphor-react';
import React from 'react';
import CloseButton from '../../CloseButton/CloseButton';
import { FeedbackType, feedbackTypes } from '../WidgetForm';

interface FeedbackContentStepProps {
  feedbackType: FeedbackType;
  onFeedbackRestartRequested: () => void
}

const FeedbackContentStep: React.FC<FeedbackContentStepProps> = ({ feedbackType, onFeedbackRestartRequested }) => {
  const { title, icon } = feedbackTypes[feedbackType]

  return (
    <>
      <header>
        <button type='button' className='top-5 left-5 absolute text-zinc-400 hover:text-zinc-100' onClick={onFeedbackRestartRequested}>
          <ArrowLeft weight='bold' className='w-4 h-4' />
        </button>
        <span className='text-xl leading-6 flex items-center gap-2'>
          {icon}
          {title}
        </span>
        <CloseButton />
      </header>
      <div className="flex py-8 gap-2 w-full">
      </div>
    </>
  );
}

export default FeedbackContentStep;