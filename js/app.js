window.addEventListener('load', function() {
  var content = document.getElementById('write-tweet');
  var posting = document.getElementById('tweet');
  
  content.addEventListener('keyup', btnactive);
  posting.addEventListener('click', send);

  function btnactive(event) {
    if (content.value === '') {
      posting.disabled = true;
      posting.style.backgroundColor = 'gainsboro';
      posting.style.cursor = 'not-allowed';      
    } else {
      posting.disabled = false;
      posting.style.backgroundColor = 'lightblue';
      posting.style.cursor = 'pointer';
    }
  };

  function send(event) {
    var containerTweets = document.getElementById('container-tweets');
    var newPost = document.createElement('div');

    newPost.classList.add('newPost');
    newPost.textContent = content.value;
    
    var hours = document.createElement('div');
    hours.classList.add('hours');
    var date = new Date();
    var hour = date.getHours();
    var hourPost = 'Posted at ' + hour + 'h';
    hours.textContent = hourPost;

    newPost.appendChild(hours);
    containerTweets.prepend(newPost);

    content.value = '';

    btnactive(); 
  };
});