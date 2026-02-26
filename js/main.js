// Window dragging
let draggedElement = null;
let offsetX = 0;
let offsetY = 0;
let highestZ = 100;

function dragStart(e, windowId) {
    if (e.target.classList.contains('title-bar-button')) return;
    draggedElement = document.getElementById(windowId);
    const rect = draggedElement.getBoundingClientRect();
    offsetX = e.clientX - rect.left;
    offsetY = e.clientY - rect.top;

    bringToFront(windowId);

    document.addEventListener('mousemove', drag);
    document.addEventListener('mouseup', dragEnd);
    e.preventDefault();
}

function drag(e) {
    if (draggedElement) {
        let newLeft = e.clientX - offsetX;
        let newTop = e.clientY - offsetY;

        // Keep window within viewport bounds
        newLeft = Math.max(0, Math.min(newLeft, window.innerWidth - 100));
        newTop = Math.max(0, Math.min(newTop, window.innerHeight - 40));

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

function bringToFront(windowId) {
    highestZ++;
    document.getElementById(windowId).style.zIndex = highestZ;
}

// Window management
function openWindow(type) {
    const win = document.getElementById('window-' + type);
    win.classList.add('active');
    bringToFront('window-' + type);

    // On mobile, center the window
    if (window.innerWidth <= 768) {
        win.style.left = '5px';
        win.style.top = '5px';
        win.style.width = (window.innerWidth - 10) + 'px';
        win.style.height = (window.innerHeight - 60) + 'px';
    }
}

function closeWindow(type) {
    const win = document.getElementById('window-' + type);
    win.classList.remove('active');
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
    const win = document.getElementById('window-' + windowId);
    const tabs = win.querySelectorAll('.tab');
    const contents = win.querySelectorAll('.tab-content');

    tabs.forEach(tab => tab.classList.remove('active'));
    contents.forEach(content => content.classList.remove('active'));

    event.target.classList.add('active');
    document.getElementById(windowId + '-' + tabId).classList.add('active');
}

// Bring window to front on click
document.addEventListener('mousedown', function(e) {
    const win = e.target.closest('.window');
    if (win) {
        highestZ++;
        win.style.zIndex = highestZ;
    }
});

// Mobile touch support for dragging
function touchDragStart(e, windowId) {
    const touch = e.touches[0];
    draggedElement = document.getElementById(windowId);
    const rect = draggedElement.getBoundingClientRect();
    offsetX = touch.clientX - rect.left;
    offsetY = touch.clientY - rect.top;
    bringToFront(windowId);
}

function touchDrag(e) {
    if (draggedElement) {
        const touch = e.touches[0];
        let newLeft = touch.clientX - offsetX;
        let newTop = touch.clientY - offsetY;
        newLeft = Math.max(0, Math.min(newLeft, window.innerWidth - 100));
        newTop = Math.max(0, Math.min(newTop, window.innerHeight - 40));
        draggedElement.style.left = newLeft + 'px';
        draggedElement.style.top = newTop + 'px';
        draggedElement.style.right = 'auto';
        draggedElement.style.bottom = 'auto';
        e.preventDefault();
    }
}

function touchDragEnd() {
    draggedElement = null;
}

document.addEventListener('touchmove', touchDrag, { passive: false });
document.addEventListener('touchend', touchDragEnd);