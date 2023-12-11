
const api_value = 'AIzaSyCSJPEE8KA7yRqFNwX18oIuCh4bjXaUTsI';

const video_key = 'cLNXu42AjXs';
function fetchVideo() {
  fetch(`https://www.googleapis.com/youtube/v3/videos?id=${video_key}&key=${api_value}&part=snippet`)
    .then(response => {
      if (!response.ok) {
        throw new Error('not ok');
      }
      return response.json();
    })
    .then(data => {
      const videoItem = data.items[0];
      if (!videoItem) {
        throw new Error('not found');
      }

      const videoTitle = videoItem.snippet.title;
      const embedUrl = `https://www.youtube.com/embed/${video_key}`;

      displayVideo(videoTitle, embedUrl);
    })
    .catch(error => {
      console.error('Error fetching', error);
    });
}

function displayVideo(title, embedUrl) {
  const videoContainer = document.getElementById('video');
  videoContainer.innerHTML = `
    <h2>${title}</h2>
    <iframe width="640" height="360" src="${embedUrl}" frameborder="0" allowfullscreen></iframe>
  `;
}

fetchVideo();