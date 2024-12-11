let dragIndex = 0;
let dropIndex = 0;
let clone = '';

const images = document.querySelectorAll('.image');

function drag(e) {
  e.dataTransfer.setData('text', e.target.id);
}

function allowDrop(e) {
  e.preventDefault();
}

function drop(e) {
  e.preventDefault();
  const data = e.dataTransfer.getData('text');
  const draggedElement = document.getElementById(data);
  const targetElement = e.target;

  if (!targetElement.classList.contains('image')) return; // Ensure dropping only happens on valid targets

  clone = targetElement.cloneNode(true);

  // Find indexes
  const nodeList = Array.from(document.getElementById('parent').children);
  dragIndex = nodeList.indexOf(draggedElement);
  dropIndex = nodeList.indexOf(targetElement);

  // Replace elements
  const parent = document.getElementById('parent');
  parent.replaceChild(draggedElement, targetElement);
  parent.insertBefore(clone, parent.children[dragIndex]);

  // Reattach drag-and-drop handlers
  attachHandlers(clone);
}

function attachHandlers(image) {
  image.ondragstart = drag;
  image.ondragover = allowDrop;
  image.ondrop = drop;
}

images.forEach(attachHandlers);