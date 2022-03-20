function createThumbnail(item) {
  const thumbnailWrapper = document.createElement('div');
  thumbnailWrapper.className = 'item__thumbnail-wrapper';
  const itemThumbnail = document.createElement('img');
  itemThumbnail.className = 'item__thumbnail';
  itemThumbnail.src = item.thumbnail;
  itemThumbnail.alt = `${item.title}`;
  thumbnailWrapper.appendChild(itemThumbnail);
  return thumbnailWrapper;
}

function createItemTitle(title) {
  const itemTitle = document.createElement('div');
  itemTitle.className = 'item__title';
  itemTitle.innerText = title.title;
  return itemTitle;
}

function createItemSubstitle(item) {
  const itemSubtitle = document.createElement('div');
  itemSubtitle.className = 'item__subtitle';
  itemSubtitle.innerText = Array.isArray(item.subtitle) ? item.subtitle.join(', ') : item.subtitle;
  return itemSubtitle;
}

export default function createItem(item) {
  const itemDiv = document.createElement('div');
  itemDiv.className = 'item';
  const thumbnail = createThumbnail(item);
  const title = createItemTitle(item);
  const subtitle = createItemSubstitle(item);

  itemDiv.appendChild(thumbnail);
  itemDiv.appendChild(title);
  itemDiv.appendChild(subtitle);

  return itemDiv;
}
