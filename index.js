
function superbowlWin(array) {
  const winYear = array.find(record => record.result === 'W');
  if(winYear === undefined){
    return undefined;
  } else {
    return winYear.year;
  }
};
