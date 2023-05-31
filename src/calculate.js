export const calculate = (weight, reps) => {
  if (!weight || !reps) {
    return;
  }
  if (weight <= 0 || reps <= 0) {
    return;
  }
  let oneMax = calculateMax(weight, reps);
  if (reps === 1) {
    oneMax = weight;
  }
  if (oneMax === 'N/A') {
    return;
  }
  let nextMilestones = getNextMileStones(reps);
  nextMilestones = nextMilestones.map((reps) => {
    return {
      weight: weight,
      reps: reps, 
      estimate: calculateMax(weight, reps)
    }
  });
  addResultsToPage(oneMax, nextMilestones);
  document.getElementById('max').scrollIntoView({ behavior: "smooth" });
}

const calculateMax = (weight, reps) => {
  const res = Math.round((weight / ((100 - (reps * 2.5)) / 100)) * 100) / 100;
  return res >= 0 && res <= 600 ? res : 'N/A';
}

const getNextMileStones = (reps) => {
  if (Math.floor(reps + (reps * 0.25)) === reps) {
    return [reps + 1, reps + 2, reps + 3];
  } else {
    return [Math.floor(reps + (reps * 0.25)), Math.floor(reps + (reps * 0.5)), Math.floor(reps + (reps * 0.75))];
  }
}

const addResultsToPage = (max, milestones) => {
  document.getElementById("max").innerText = `${max}kg`;
  const documentMilestones = [document.getElementById('milestone1'), document.getElementById('milestone2'), document.getElementById('milestone3')];
  documentMilestones.map((mstone, index) => {
    mstone.firstElementChild.innerText = `${milestones[index].weight}kg ${milestones[index].reps}reps`;
    mstone.lastElementChild.innerText = `1RM: ${milestones[index].estimate}kg`;
    mstone.dataset.kg = milestones[index].weight;
    mstone.dataset.reps = milestones[index].reps;
  })
  document.getElementById('results-container').classList.add('result-shown');
}

export const handleMilestoneClick = (e) => {
  calculate(parseFloat(e.currentTarget.dataset.kg), parseFloat(e.currentTarget.dataset.reps));
}