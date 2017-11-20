var area = document.getElementById('write-msg');
var button = document.getElementById('tweet');
var container = document.getElementById('container-msgs');

button.addEventListener('mouseover', function(event) {
    if(area.value) {
        var message = document.createElement('p');

        message.textContent = area.value;
        message.setAttribute('class', 'tweeted')

        container.appendChild(message);

        area.value = '';
    }
});