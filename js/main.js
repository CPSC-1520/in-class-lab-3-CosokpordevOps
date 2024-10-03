// Enter your code below.
let timesClicked = 0;

const resourcesSection = document.querySelector('.javascript-resources');
const revealButton = document.getElementById('show-resources');

revealButton.addEventListener('click', function() {
    resourcesSection.classList.toggle('d-none');
});

resourcesSection.addEventListener('mouseenter', function(event) {
    if (event.target.classList.contains('list-group-item')) {
        event.target.classList.add('bold-text');
    }
}, true);

resourcesSection.addEventListener('mouseleave', function(event) {
    if (event.target.classList.contains('list-group-item')) {
        event.target.classList.remove('bold-text');
    }
}, true);

resourcesSection.addEventListener('click', function(event) {
    if (event.target.classList.contains('list-group-item')) {
        event.target.classList.add('italic-text');
        timesClicked++;
        event.target.innerText = '${event.target.innerText} (Clicked ${timesClicked} times)';
    }
});