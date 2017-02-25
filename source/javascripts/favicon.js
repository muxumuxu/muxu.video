document.head || (document.head = document.getElementsByTagName('head')[0]);

function changeFavicon(src) {
  var link = document.createElement('link'),
      oldLink = document.getElementById('dynamic-favicon');
  link.id = 'dynamic-favicon';
  link.rel = 'icon';
  link.href = src;
  if (oldLink) {
   document.head.removeChild(oldLink);
  }
  document.head.appendChild(link);
}

var btn = document.getElementById('play-overlay')[0];

function favicon() {
  changeFavicon('favicon-pause.ico');
};
