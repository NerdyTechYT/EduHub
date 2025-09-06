const form = document.getElementById('video-form');

form.addEventListener('submit', function(e){
  e.preventDefault();
  const title = document.getElementById('title').value;
  const description = document.getElementById('description').value;
  const thumbnail = document.getElementById('thumbnail').value;
  const videoUrl = document.getElementById('videoUrl').value;

  let videos = JSON.parse(localStorage.getItem('videos')) || [];
  videos.push({ title, description, thumbnail, videoUrl });
  localStorage.setItem('videos', JSON.stringify(videos));

  alert('Video submitted!');
  form.reset();
});
