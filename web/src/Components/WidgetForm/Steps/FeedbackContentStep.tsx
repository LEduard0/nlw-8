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
      <form className='my-4 w-full'>
        <textarea
          className='min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 focus:outline-none resize-none scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-transparent'
          placeholder='Conte com detalhes o que está acontecendo...'
        />
      </form>
    </>
  );
}

export default FeedbackContentStep;