
const SIZE = 10;



let isDragging = false;
const numRows = SIZE;
const numCols  = SIZE;

const table = document.getElementById('grid');

for (let i = 0; i < numRows; i++) {
    const row = document.createElement('tr');
    for (let j = 0; j < numCols; j++) {
        const cell = document.createElement('td');
        cell.addEventListener('mousedown', function() {
            isDragging = true;
            cell.style.backgroundColor = 'red';
        });
        cell.addEventListener('mouseover', function() {
            if (isDragging) {
                cell.style.backgroundColor = 'red';
            }
        });
        cell.addEventListener('mouseup', function() {
            isDragging = false;
        });

        row.appendChild(cell);
    }
    table.appendChild(row);
}
