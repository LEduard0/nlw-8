import React from 'react';
import CloseButton from '../CloseButton/CloseButton';

const WidgetForm: React.FC = () => {
    return (
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
            <header>
                <span className='text-xl leading-6'>Deixe seu feedback</span>
                <CloseButton />
            </header>
            <p>Hello World</p>
            <footer>
                Feito pelo <a className='underline underline-offset-2' href="https://github.com/LEduard0">LEduard0</a>
            </footer>
        </div>
    );
}

export default WidgetForm;