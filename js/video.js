// Get video index from URL query
const urlParams = new URLSearchParams(window.location.search);
const index = urlParams.get('index');

// Get videos from localStorage
const videos = JSON.parse(localStorage.getItem('videos')) || [];
const videoData = videos[index];

const container = document.getElementById('video-page');

if(videoData) {
  container.innerHTML = `
    <h2>${videoData.title}</h2>
    <p>${videoData.description}</p>
    <video width="100%" controls>
      <source src="${videoData.videoUrl}" type="video/mp4">
      Your browser does not support the video tag.
    </video>
  `;
} else {
  container.innerHTML = '<p>Video not found.</p>';
}
