const next = (x, y) => {
  if(x === 0 && y === 0)
    return [1, 0];
  else if(y === 0)
    return [Math.ceil((x+1) / 2), Math.floor((x+1) / 2)];
  else
    return [x+1, y-1];
};

const organizer = ([[x, y], ...tail], [lx, ly]) => {
  if(x === lx && y === ly)
    return [[x, y], ...tail];
  else 
    return [...organizer([next(x, y)], [lx, ly]), [x, y], ...tail];
};
  
const getCoord = (arr, [x, y]) => arr[x][y];

const getLastCoord = input => [input.length-1, input.slice(-1)[0].length-1];

const distribution = input =>
  organizer([[0, 0]], getLastCoord(input))
    .reverse()
    .map(getCoord.bind(null, input));

module.exports = distribution;
