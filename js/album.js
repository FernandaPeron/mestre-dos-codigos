
function createThumbnail(album) {
  const thumbnailWrapper = document.createElement('div');
  thumbnailWrapper.className = 'album__thumbnail-wrapper';
  const albumThumbnail = document.createElement('img');
  albumThumbnail.className = 'album__thumbnail';
  albumThumbnail.src = album.thumbnail;
  albumThumbnail.alt = `Album ${album.title}`;
  thumbnailWrapper.appendChild(albumThumbnail);
  return thumbnailWrapper;
}

function createAlbumTitle(album) {
  const albumTitle = document.createElement('div');
  albumTitle.className = 'album__title';
  albumTitle.innerText = album.title;
  return albumTitle;
}

function createAlbumArtists(album) {
  const albumArtists = document.createElement('div');
  albumArtists.className = 'album__artists';

  album.artists.forEach(artist => {
    const artistSpan = document.createElement('span');
    artistSpan.innerText = artist;
    albumArtists.appendChild(artistSpan);
  });
  return albumArtists;
}

export function createAlbum(album) {
  const albumDiv = document.createElement('div');
  albumDiv.className = 'album';
  const albumThumbnail = createThumbnail(album);
  const albumTitle = createAlbumTitle(album);
  const albumArtists = createAlbumArtists(album);

  albumDiv.appendChild(albumThumbnail);
  albumDiv.appendChild(albumTitle);
  albumDiv.appendChild(albumArtists);

  return albumDiv;
}
