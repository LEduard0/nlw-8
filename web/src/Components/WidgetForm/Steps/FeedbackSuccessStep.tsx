import { Check } from 'phosphor-react';
import React from 'react';
import CloseButton from '../../CloseButton/CloseButton';

interface FeedbackSuccessStepProps {
  onFeedbackRestartRequested: () => void
}

const FeedbackSuccessStep: React.FC<FeedbackSuccessStepProps> = ({onFeedbackRestartRequested}) => {
  return (
    <>
      <header>
        <CloseButton />
      </header>

      <div className='flex flex-col items-center py-6 w-[304px]'>
        <div className='border-1 border-green-500 bg-green-500 rounded-md p-1'>
          <Check size={40} color="#fff" />
        </div>
        <span className='text-xl mt-2'>Agradecemos o feedback</span>
      </div>
      <button
        type='button'
        onClick={onFeedbackRestartRequested}
        className='py-2 px-6 mt-6 mb-2 bg-zinc-800 rounded-md border-transparent text-sm leading-6 hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500'
      >
        Quero enviar outro
      </button>
    </>
  );
}

export default FeedbackSuccessStep;