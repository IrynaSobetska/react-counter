const setColor = (count) => {
  if (count < 0) {
    return "redCount";
  } else if (count > 0) {
    return "greenCount";
  } else {
    return "blueCount";
  }
};

export default setColor;
