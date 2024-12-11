document.addEventListener('DOMContentLoaded', () => {
  // Select all draggable image containers
  const containers = document.querySelectorAll('#div1, #div2, #div3, #div4, #div5, #div6');

  // Add drag-and-drop event listeners to each container
  containers.forEach(container => {
    // Make each container draggable
    container.setAttribute('draggable', true);

    // Event listener for drag start
    container.addEventListener('dragstart', (e) => {
      e.dataTransfer.setData('text/plain', e.target.id); // Store the dragged element's ID
      setTimeout(() => {
        e.target.classList.add('dragging'); // Add visual feedback
      }, 0);
    });

    // Event listener for drag end
    container.addEventListener('dragend', (e) => {
      e.target.classList.remove('dragging'); // Remove visual feedback
    });

    // Event listener for drag over (allow dropping)
    container.addEventListener('dragover', (e) => {
      e.preventDefault(); // Allow drop operation
    });

    // Event listener for drop
    container.addEventListener('drop', (e) => {
      e.preventDefault();

      // Get the ID of the dragged element
      const draggedId = e.dataTransfer.getData('text/plain');
      const draggedElement = document.getElementById(draggedId);

      // Perform the swap if dropping on a valid target and not dropping on itself
      if (draggedElement && draggedElement !== e.target) {
        const tempBackground = e.target.style.backgroundImage;
        e.target.style.backgroundImage = draggedElement.style.backgroundImage;
        draggedElement.style.backgroundImage = tempBackground;
      }
    });
  });
});