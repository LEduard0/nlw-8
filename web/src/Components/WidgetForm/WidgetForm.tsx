import React, { useState } from 'react';
import { Bug, DotsThreeCircle, Lightbulb } from 'phosphor-react';
import FeedbackTypeStep from './Steps/FeedbackTypeStep';
import FeedbackContentStep from './Steps/FeedbackContentStep';
import FeedbackSuccessStep from './Steps/FeedbackSuccessStep';

export const feedbackTypes = {
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

export type FeedbackType = keyof typeof feedbackTypes;

const WidgetForm: React.FC = () => {
    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)
    const [feedbackSent, setFeedbackSent] = useState(false)

    const handleRestartFeedback = () => {
        setFeedbackSent(false)
        setFeedbackType(null)
    }

    return (
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
            {feedbackSent ? (<FeedbackSuccessStep onFeedbackRestartRequested={handleRestartFeedback} />) : (
                <>
                    {!feedbackType ? (
                        <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
                    ) : (
                        <FeedbackContentStep feedbackType={feedbackType} onFeedbackRestartRequested={handleRestartFeedback} onFeedbackSent={() => setFeedbackSent(true)} />
                    )}
                </>
            )}
            <footer>
                Feito pelo <a className='underline underline-offset-2' href="https://github.com/LEduard0">LEduard0</a>
            </footer>
        </div>
    );
}

export default WidgetForm;