import React, { useState } from 'react';
import CloseButton from '../CloseButton/CloseButton';
import { Bug, DotsThreeCircle, Lightbulb } from 'phosphor-react';

const feedbackTypes = {
    BUG: {
        title: "Problema",
        icon: <Bug size="36.0" color='#f4f4f5' />
    },
    IDEA: {
        title: "Ideia",
        icon: <Lightbulb size="36.0" color='#f4f4f5' />
    },
    OTHER: {
        title: "Outro",
        icon: <DotsThreeCircle size="36.0" color='#f4f4f5' />
    },
}

type FeedbackType = keyof typeof feedbackTypes;

const WidgetForm: React.FC = () => {
    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)

    return (
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
            <header>
                <span className='text-xl leading-6'>Deixe seu feedback</span>
                <CloseButton />
            </header>
            {!feedbackType ? (
                <div className="flex py-8 gap-2 w-full">
                    {Object.entries(feedbackTypes).map(([key, { icon, title }]) => {
                        return (
                            <button
                                className='bg-zinc-800 rounded-lg py-5 w-24 flex flex-1 flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none'
                                type='button'
                                key={key}
                                onClick={() => {
                                    setFeedbackType(key as FeedbackType)
                                }}
                            >
                                {icon}
                                <span>{title}</span>
                            </button>
                        );
                    })}
                </div>
            ) : (
                <div></div>
            )}
            <footer>
                Feito pelo <a className='underline underline-offset-2' href="https://github.com/LEduard0">LEduard0</a>
            </footer>
        </div>
    );
}

export default WidgetForm;