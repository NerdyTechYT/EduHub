const container = document.getElementById('video-container');
let videos = JSON.parse(localStorage.getItem('videos')) || [];

function displayVideos() {
  container.innerHTML = '';
  videos.forEach((video, index) => {
    const card = document.createElement('div');
    card.classList.add('video-card');
    card.innerHTML = `
      <a href="video.html?index=${index}">
        <img src="${video.thumbnail}" alt="${video.title}">
      </a>
      <h3><a href="video.html?index=${index}">${video.title}</a></h3>
      <p>${video.description}</p>
      <button class="delete-btn" data-index="${index}">Delete</button>
    `;
    container.appendChild(card);
  });

  document.querySelectorAll('.delete-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = btn.getAttribute('data-index');
      videos.splice(idx, 1);
      localStorage.setItem('videos', JSON.stringify(videos));
      displayVideos();
    });
  });
}

displayVideos();
