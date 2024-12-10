const parent = document.getElementById('parent');
const children = Array.from(parent.children);

let draggedElement = null;

// Add event listeners to each child div
children.forEach((child) => {
  child.addEventListener('dragstart', (event) => {
    draggedElement = event.target; // Save the dragged element
    event.target.classList.add('selected'); // Add styling for the dragged element
  });

  child.addEventListener('dragover', (event) => {
    event.preventDefault(); // Prevent default behavior to allow drop
  });

  child.addEventListener('drop', (event) => {
    event.preventDefault(); // Prevent default behavior
    if (draggedElement && draggedElement !== event.target) {
      // Swap background images between draggedElement and drop target
      const draggedStyle = window.getComputedStyle(draggedElement);
      const targetStyle = window.getComputedStyle(event.target);

      const draggedBg = draggedStyle.backgroundImage;
      const targetBg = targetStyle.backgroundImage;

      draggedElement.style.backgroundImage = targetBg;
      event.target.style.backgroundImage = draggedBg;
    }
  });

  child.addEventListener('dragend', () => {
    draggedElement.classList.remove('selected'); // Remove styling after drop
    draggedElement = null; // Reset dragged element
  });
});