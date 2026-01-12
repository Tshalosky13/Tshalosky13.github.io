// Window dragging
let draggedElement = null;
let offsetX = 0;
let offsetY = 0;

function dragStart(e, windowId) {
    draggedElement = document.getElementById(windowId);
    const rect = draggedElement.getBoundingClientRect();
    offsetX = e.clientX - rect.left;
    offsetY = e.clientY - rect.top;

    document.addEventListener('mousemove', drag);
    document.addEventListener('mouseup', dragEnd);
}

function drag(e) {
    if (draggedElement) {
        let newLeft = e.clientX - offsetX;
        let newTop = e.clientY - offsetY;

        draggedElement.style.left = newLeft + 'px';
        draggedElement.style.top = newTop + 'px';
        draggedElement.style.right = 'auto';
        draggedElement.style.bottom = 'auto';
    }
}

function dragEnd() {
    draggedElement = null;
    document.removeEventListener('mousemove', drag);
    document.removeEventListener('mouseup', dragEnd);
}

// Window management
function openWindow(type) {
    const window = document.getElementById('window-' + type);
    window.classList.add('active');
}

function closeWindow(type) {
    const window = document.getElementById('window-' + type);
    window.classList.remove('active');
}

// Mode toggle
function toggleMode() {
    document.body.classList.toggle('modern-mode');
}

// Clock
function updateTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    document.getElementById('time').textContent = hours + ':' + minutes;
}
updateTime();
setInterval(updateTime, 60000);

// Tab switching
function switchTab(event, windowId, tabId) {
    const window = document.getElementById('window-' + windowId);
    const tabs = window.querySelectorAll('.tab');
    const contents = window.querySelectorAll('.tab-content');

    tabs.forEach(tab => tab.classList.remove('active'));
    contents.forEach(content => content.classList.remove('active'));

    event.target.classList.add('active');
    document.getElementById(windowId + '-' + tabId).classList.add('active');
}