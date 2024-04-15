// hooks useScreenshot.tsx

import React from 'react';
import html2canvas from 'html2canvas';

const useScreenshot = () => {
    
    const handleScreenshot = 
        async(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): Promise<void> => 
    {
      e.preventDefault();
      const targetElement: HTMLElement | null = document.getElementById('screenshotTarget');
  
      if (targetElement) {
        try {
  
          const scale: number = 6;
            
          const canvas: HTMLCanvasElement = await html2canvas(targetElement, {
            scale: scale,
            allowTaint: true,
            useCORS: true,
          });
  
          const enlargedCanvas: HTMLCanvasElement = document.createElement('canvas');
          const context: CanvasRenderingContext2D | null = enlargedCanvas.getContext('2d');
          if (context) {
            enlargedCanvas.width = canvas.width * scale; 
            enlargedCanvas.height = canvas.height * scale; 
            context.drawImage(canvas, 0, 0, enlargedCanvas.width, enlargedCanvas.height);
          } else {
            console.error('2D rendering context is null');
          }    
  
          const imageDataURL: string = canvas.toDataURL('image/png');
          const downloadLink: HTMLAnchorElement = document.createElement('a');
          downloadLink.href = imageDataURL;
          downloadLink.download = 'pokemonImage.png';
          document.body.appendChild(downloadLink);
          downloadLink.click();
          document.body.removeChild(downloadLink);
          
        } catch(err) {
          console.error('Error capturing screenshot', err);
          alert(err);
        }
      }
    };
    return {
        handleScreenshot
    }
};

export default useScreenshot;