const carousel = document.querySelector('.home__recommendations-wrapper') || {};

const recommendations = [
  {
    thumbnail: 'https://lh3.googleusercontent.com/od5v91RjGacjuReAoDPySeSGj7IlPmINqoIlrNDgBHIuRdDEX9EJAVZdklpwzlcAR0KkakoYcYu1bA=w226-h226-l90-rj',
    title: 'EDM',
    artists: ['Alok', 'Cat Dealers', 'Vintage Culture', 'Chris Lake']
  },
  {
    thumbnail: 'https://lh3.googleusercontent.com/MQbfzO1peg3Sg4QfkEuQskOOdsNPba_So5XD0btKXKPEg-MG-GNxfKOHA-FiH8Sky5wmFVErCijdxwAh=w226-h226-l90-rj',
    title: 'Trance',
    artists: ['Mandragora', 'Infected Mushroom', 'Astrix', 'Henrique Camacho']
  },
  {
    thumbnail: 'https://lh3.googleusercontent.com/2uqIvETofXxLr27yD9J2SuzoE0ZbU5hss4ELK5DJD9tught89j0OtMPkxMEK2dnwHJa064KgsSVS05I=w226-h226-l90-rj',
    title: 'Offbeat',
    artists: ['Phaxe', 'Querox', 'Morten Granau', 'Neelix', 'Durs']
  },
  {
    thumbnail: 'https://lh3.googleusercontent.com/7jR5eIIROa2uB5pAHQwyDjH_1Alayq4Egp1RSK7wR-ETOllLFgxxeMfC0uM4l74ywpvlw8ZcUkmBxSg=w226-h226-l90-rj',
    title: 'Metal',
    artists: ['Rammstein', 'Metallica', 'Disturbed', 'Motörhead']
  },
  {
    thumbnail: 'https://lh3.googleusercontent.com/0j0l6ifk8PqtqkatyckNkFyvaGJ4Jr1OV9OphzyuQqpDrjxZEVEmDSllAn_5d2Eiq12taVcGvnUoBg=w226-h226-l90-rj',
    title: 'Alternativa',
    artists: ['Young the Giant', 'Arctic Monkeys', 'Imagine Dragons', 'The Neighbourhood']
  },
  {
    thumbnail: 'https://lh3.googleusercontent.com/_z8znFJoeAz7J9iUzw3ZF4EY-Ofu_ZNK95EI6QjbfYcpVEQAH_QHwLS3gNCGyNRr7nZXAXmLzl4bWks=w226-h226-l90-rj',
    title: 'Rap',
    artists: ['Snoop Dogg', 'Eminem', 'Dr. Dre', '2Pac', 'Busta Rhymes']
  },
  {
    thumbnail: 'https://lh3.googleusercontent.com/ubXTfcV7dXL6Qzq_GLsg8-NFi5tEwzx3A8rIDitKKu4B1y0aqu6kQOvjDwjcHdz_ULxWC3nfg7l-Cac=w226-h226-l90-rj',
    title: 'Pop',
    artists: ['The Chainsmokers', 'Halsey', 'Lady Gaga', 'Dua Lipa', 'Lana Del Rey']
  },
  {
    thumbnail: 'https://lh3.googleusercontent.com/py5xKfEunJntABifiHHkKz2oyTWfseksdZ_OHMQLfhoWDRLw74o6KQdWLIaEfnolOwwIncrrU8tpyCI=w226-h226-l90-rj',
    title: 'Funk',
    artists: ['Ludmilla', 'Anitta', 'MC Kevinho', 'Lexa', 'POCAH']
  },
  {
    thumbnail: 'https://lh3.googleusercontent.com/RrasNv12VBAaYwBbAjqpEmHbMEBZMLNCQfr3Gs_Wsua8t-w92rdVFoNLZm5HQnvH6MxM14m1rjnJES4=w226-h226-l90-rj',
    title: 'Chill',
    artists: ['SOMMA', 'Regard', 'ZHU', 'Bassnectar', 'Liquid Stranger']
  },
  {
    thumbnail: 'https://lh3.googleusercontent.com/riuyFRXqu86qAndF1bWU8NLnTTvxtADRN7XYWR_MKy2_sVNtSpiEyePMV4SmicUYA7DlhCMt-ySHt8c=w226-h226-l90-rj',
    title: 'On the Road',
    artists: ['AC/DC', 'ZZ Top', 'Mötley Crüe', 'Ozzy Osbourne', 'The Black Keys']
  }
]

function createAlbumDOM(album) {
  const albumDiv = document.createElement('div');
  albumDiv.className = 'home__recommendation';
  const albumThumbnail = document.createElement('img');
  albumThumbnail.className = 'home__recommendation-thumbnail';
  albumThumbnail.src = album.thumbnail;
  const albumTitle = document.createElement('div');
  albumTitle.className = 'home__recommendation-title';
  albumTitle.innerText = album.title;
  const albumArtists = document.createElement('div');
  albumArtists.className = 'home__recommendation-artists';

  album.artists.forEach(artist => {
    const artistSpan = document.createElement('span');
    artistSpan.innerText = artist;
    albumArtists.appendChild(artistSpan);
  })

  albumDiv.appendChild(albumThumbnail);
  albumDiv.appendChild(albumTitle);
  albumDiv.appendChild(albumArtists);

  return albumDiv;
}

recommendations.forEach(album => {
  const albumDiv = createAlbumDOM(album);
  carousel.appendChild(albumDiv);
});