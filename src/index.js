import { calculate } from "./calculate.js";

const weightInput = document.getElementById('weight-input');
const repsInput = document.getElementById('reps-input');

document.getElementById('calculate-btn').addEventListener('click', () => {
  calculate(weightInput.value, repsInput.value);
})

const cursorCloud = document.getElementById('cursor-cloud');

const trackCursor = (e) => {
  const { clientX, clientY } = e;
  cursorCloud.animate({
    left: `${clientX}px`,
    top: `${clientY}px`
  }, {duration: 2500, fill: "forwards"});
}

document.addEventListener('pointermove', trackCursor);

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
