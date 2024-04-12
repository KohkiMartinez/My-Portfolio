// SaveButton.tsx
import React from 'react';

const SaveButton: React.FC<{
    handleScreenshot: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => Promise<void>
}> = React.memo(({ handleScreenshot }) => 
{
    return (
        <div className='saveButtonContainer'>
        <button onClick={handleScreenshot} className='saveButton'>Save image</button>
        </div>
    );
});

export default SaveButton;