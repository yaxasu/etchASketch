const SIZE = 12;

const numRows = SIZE;
const numCols = SIZE;
let isDragging = false;
let currentMode = 'draw';

const table = document.getElementById('grid');

for (let i = 0; i < numRows; i++) {
    const row = document.createElement('tr');
    for (let j = 0; j < numCols; j++) {
        const cell = document.createElement('td');

        // Add event listeners for drag coloring/erasing
        cell.addEventListener('mousedown', function() {
            isDragging = true;
            if (currentMode === 'draw') {
                cell.style.backgroundColor = 'black';
            } else if (currentMode === 'erase') {
                cell.style.backgroundColor = '';
            }
        });
        cell.addEventListener('mouseover', function() {
            if (isDragging) {
                if (currentMode === 'draw') {
                    cell.style.backgroundColor = 'black';
                } else if (currentMode === 'erase') {
                    cell.style.backgroundColor = '';
                }
            }
        });
        cell.addEventListener('mouseup', function() {
            isDragging = false;
        });

        row.appendChild(cell);
    }
    table.appendChild(row);
}

// Reset isDragging if mouseup is detected outside the table cells
document.addEventListener('mouseup', function() {
    isDragging = false;
});

document.getElementById('draw').addEventListener('click', function() {
    currentMode = 'draw';
    updateButtonStates();
});
document.getElementById('eraser').addEventListener('click', function() {
    currentMode = 'erase';
    updateButtonStates();
});
document.getElementById('clear').addEventListener('click', function() {
    const cells = document.querySelectorAll('#grid td');
    cells.forEach(cell => cell.style.backgroundColor = '');
});


function updateButtonStates() {
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => button.classList.remove('active'));

    if (currentMode === 'draw') {
        document.getElementById('draw').classList.add('active');
    } else if (currentMode === 'erase') {
        document.getElementById('eraser').classList.add('active');
    }
}

updateButtonStates();
