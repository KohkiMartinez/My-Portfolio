"use strict";

//Size input selectors
const sizePick = document.querySelector('#sizePicker');
const height = document.querySelector('#inputHeight');
const width = document.querySelector('#inputWidth');

//Design canvas element
const canvas = document.querySelector('#pixelCanvas');

// Select color input
const color = document.querySelector('#colorPicker');

// Select size input
sizePick.addEventListener('submit', (event)=> {
	event.preventDefault();
	//reset grid when the user 'submit'
	canvas.innerHTML = '';
	makeGrid(height, width);
});

//It will prevent of drawing when the mouse cursor moves around on the grid with no clicks.
let draw = false;
//It will let the user to draw on the canvas while they hold the left click on the mouse.
window.addEventListener('mousedown',()=>{
    draw = true;
});
//It will stop drawing when the user release the left click.
window.addEventListener('mouseup', ()=>{
    draw = false;
});

// When size is submitted by the user, call makeGrid()
function makeGrid(height, width){
	//Using a DocumentFragment to prevent perfomance issues
	const fragment = document.createDocumentFragment();
	
	for (let i=0; i< height.value; i++){
		const row = document.createElement('tr');
		for (let j=0; j< width.value; j++){
			const cell = document.createElement('td');
			row.appendChild(cell);
			fragment.appendChild(row);
			cell.addEventListener('mouseover', ()=> {
    	        if(draw == false){
		            return;
	            }
			    cell.style.backgroundColor = color.value;
			});
			cell.addEventListener('mousedown', ()=> {
				cell.style.backgroundColor = color.value;
			});
			//double click to erase(By changing its color to white).
			cell.addEventListener('dblclick', ()=> {
				cell.style.backgroundColor = 'rgb(255, 255, 255)';
			});
		};
    };
	canvas.appendChild(fragment);
};