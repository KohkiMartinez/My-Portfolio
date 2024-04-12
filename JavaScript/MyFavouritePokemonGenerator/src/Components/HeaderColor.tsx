// HeaderColor.tsx
import React from 'react';
import { ChangeEvent } from 'react';

const HeaderColor: React.FC<{
    selectedHeaderColor: string;
    handleHeaderColorChange: (e: ChangeEvent<HTMLInputElement>) => void
}> = React.memo(({ selectedHeaderColor, handleHeaderColorChange }) => 
{
    return (
        <>
            <label htmlFor='headerColorInput'>Choose colour: </label>
            <input 
                type='color'
                id='headerColorInput'
                value={selectedHeaderColor}
                onChange={handleHeaderColorChange}
            />
        </>
    )
});

export default HeaderColor;