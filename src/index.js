const cursorCloud = document.getElementById('cursor-cloud');

const trackCursor = (e) => {
  const { clientX, clientY } = e;
  cursorCloud.animate({
    left: `${clientX}px`,
    top: `${clientY}px`
  }, {duration: 2500, fill: "forwards"});
}

document.addEventListener('pointermove', trackCursor);

// const words = document.querySelectorAll('.title-line');
// let currentIndex = 0;

// function changeColor() {
//   words.forEach(function(word, index) {
//     if (index === currentIndex) {
//       word.classList.add('red');
//     } else {
//       word.classList.remove('red');
//     }
//   });

//   currentIndex = (currentIndex + 1) % words.length;
// }

// setInterval(changeColor, 2000);