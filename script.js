const draggables = document.querySelectorAll('.image');
const parent = document.getElementById('parent');

let draggedElement = null;

// Attach event listeners to all draggable elements
draggables.forEach((draggable) => {
  draggable.addEventListener('dragstart', dragStart);
  draggable.addEventListener('dragover', dragOver);
  draggable.addEventListener('drop', drop);
  draggable.addEventListener('dragenter', dragEnter);
  draggable.addEventListener('dragleave', dragLeave);
});

// Function to handle drag start
function dragStart(event) {
  draggedElement = event.target;
  event.dataTransfer.effectAllowed = 'move';
}

// Prevent default behavior during drag over
function dragOver(event) {
  event.preventDefault();
  event.dataTransfer.dropEffect = 'move';
}

// Highlight the drop target
function dragEnter(event) {
  if (event.target.classList.contains('image')) {
    event.target.classList.add('selected');
  }
}

// Remove highlight from the drop target
function dragLeave(event) {
  if (event.target.classList.contains('image')) {
    event.target.classList.remove('selected');
  }
}

// Swap the images during drop
function drop(event) {
  event.preventDefault();
  const targetElement = event.target;

  if (targetElement.classList.contains('image') && draggedElement !== targetElement) {
    // Swap background images
    const draggedImage = draggedElement.style.backgroundImage;
    const targetImage = targetElement.style.backgroundImage;

    draggedElement.style.backgroundImage = targetImage;
    targetElement.style.backgroundImage = draggedImage;
  }

  // Remove highlight
  if (targetElement.classList.contains('selected')) {
    targetElement.classList.remove('selected');
  }
}