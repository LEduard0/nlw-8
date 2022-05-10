import React from 'react';

import { Popover } from "@headlessui/react"
import { X } from 'phosphor-react';

const CloseButton: React.FC = () => {
    return (
        <Popover.Button className="absolute top-5 right-5 text-zinc-400 hover:text-zinc-100" title='Fechar formulario de Feedback'>
            <X weight='bold' className='w-4 h-4' />
        </Popover.Button>
    );
}

export default CloseButton;