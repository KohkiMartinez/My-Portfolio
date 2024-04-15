// AddingPhrase.tsx

import React from 'react';
import { ChangeEvent } from 'react';

const AddingPhrase: React.FC<{
    addingPhrase: (e: ChangeEvent<HTMLInputElement>) => void
}> = React.memo(({ addingPhrase }) => 
{
    return (
        <>
            <label htmlFor='pokemonSearch' className='pokemonLabel'>Add your phrase: </label>
            <input id='pokemonSearch' type='text' onChange={addingPhrase}/>
                <div className='headingExamples'>
                <div>Eg: My favourite shiny pokemon</div>
                <div>  I&apos;m looking for these shiny pokemon</div>
                <div>  My favourite pokemon in battle  etc</div>
            </div>
        </>
    )
});

export default AddingPhrase;