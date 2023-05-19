export const calculate = (weight, reps) => {
  // alert(`${weight}kg, ${reps} reps`);
  if (!weight || !reps) {
    return;
  }
  if (weight <= 0 || reps <= 0) {
    return;
  }
  const oneMax = calculateMax(weight, reps);
  // alert(`Your estimated 1REP Max is ${oneMax}`);
  console.log(reps);
  let nextMilestones = getNextMileStones(reps);
  console.log(nextMilestones);
  nextMilestones = nextMilestones.map((reps) => {
    return {
      weight: weight,
      reps: reps, 
      estimate: calculateMax(weight, reps)
    }
  })

  console.log('1RM: ' + oneMax);
  console.log(nextMilestones);
}

const calculateMax = (weight, reps) => {
  return weight / ((100 - (reps * 2.5)) / 100);
}

const getNextMileStones = (reps) => {
  if (Math.floor(reps + (reps * 0.25)) === reps) {
    return [reps + 1, reps + 2, reps + 3];
  } else {
    return [Math.floor(reps + (reps * 0.25)), Math.floor(reps + (reps * 0.5)), Math.floor(reps + (reps * 0.75))];
  }
}