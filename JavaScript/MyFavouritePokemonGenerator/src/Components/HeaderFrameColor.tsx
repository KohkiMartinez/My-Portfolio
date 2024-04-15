// HeaderFrameColor.tsx

import React from 'react';
import { ChangeEvent } from 'react';

const HeaderFrameColor: React.FC<{
    selectedHeaderFrameColor?: string;
    handleHeaderFrameColorChange: (e: ChangeEvent<HTMLInputElement>) => void
}> = React.memo(({ selectedHeaderFrameColor, handleHeaderFrameColorChange }) => 
{
    return (
        <>
            <label htmlFor='headerFrameColorInput'></label>
                <input 
                  type='color'
                  id='headerFrameColorInput'
                  value={selectedHeaderFrameColor}
                  onChange={handleHeaderFrameColorChange}
                />
        </>
    );
});

export default HeaderFrameColor;