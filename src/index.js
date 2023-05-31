import { calculate, handleMilestoneClick } from "./calculate.js";
import { handleEnter } from "./other.js";

let mouseX, mouseY;

const weightInput = document.getElementById('weight-input');
const repsInput = document.getElementById('reps-input');

document.getElementById('calculate-btn').addEventListener('click', () => {
  calculate(parseFloat(weightInput.value), parseInt(repsInput.value));
})

weightInput.addEventListener('keyup', handleEnter);
repsInput.addEventListener('keyup', handleEnter);

document.querySelectorAll('.milestone').forEach(milestone => {
  milestone.addEventListener('click', handleMilestoneClick)
})

const cursorCloud = document.getElementById('cursor-cloud');

const trackCursor = (x, y) => {
  if (x && y) {
    cursorCloud.animate({
      left: `${x}px`,
      // top: `${y + window.scrollY}px`
      top: `${y}px`
    }, {duration: 2500, fill: "forwards"});
  }
}

if (window.matchMedia('(pointer: fine)').matches) {
  // Add event listener for cursor-based devices
  document.addEventListener('pointermove', (e) => {
    const { clientX, clientY } = e;
    mouseX = clientX;
    mouseY = clientY;
    trackCursor(clientX, clientY);
  });
}

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    entry.isIntersecting ? entry.target.classList.add('show') : entry.target.classList.remove('show');
  })
});

const headerFooterObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    entry.isIntersecting ? entry.target.classList.add('visible') : entry.target.classList.remove('visible');
  })
})

const links = document.querySelectorAll('.hidden');
const header = document.getElementById('header');
console.log(header);
headerFooterObserver.observe(header);
links.forEach(link => {
  observer.observe(link);
})
