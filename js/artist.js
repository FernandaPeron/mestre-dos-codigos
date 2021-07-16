
function createThumbnail(artist) {
  const thumbnailWrapper = document.createElement('div');
  thumbnailWrapper.className = 'artist__thumbnail-wrapper';
  const albumThumbnail = document.createElement('img');
  albumThumbnail.className = 'artist__thumbnail';
  albumThumbnail.src = artist.thumbnail;
  albumThumbnail.alt = `Artist ${artist.title}`;
  thumbnailWrapper.appendChild(albumThumbnail);
  return thumbnailWrapper;
}

function createArtistTitle(artist) {
  const artistTitle = document.createElement('div');
  artistTitle.className = 'artist__title';
  artistTitle.innerText = artist.title;
  return artistTitle;
}

function createSubscribers(artist) {
  const artistSubscribers = document.createElement('div');
  artistSubscribers.className = 'artist__subscribers';
  artistSubscribers.innerText = artist.subscribers;
  return artistSubscribers;
}

export function createArtists(artist) {
  const artistDiv = document.createElement('div');
  artistDiv.className = 'artist';
  const artistThumbnail = createThumbnail(artist);
  const artistTitle = createArtistTitle(artist);
  const artistSubscribers = createSubscribers(artist);

  artistDiv.appendChild(artistThumbnail);
  artistDiv.appendChild(artistTitle);
  artistDiv.appendChild(artistSubscribers);

  return artistDiv;
}
