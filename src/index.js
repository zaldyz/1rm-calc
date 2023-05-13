const cursorCloud = document.getElementById('cursor-cloud');

const trackCursor = (e) => {
  const { clientX, clientY } = e;
  cursorCloud.animate({
    left: `${clientX}px`,
    top: `${clientY}px`
  }, {duration: 2500, fill: "forwards"});
}

document.addEventListener('pointermove', trackCursor);