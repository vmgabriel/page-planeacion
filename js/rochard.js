const rorschach = () => {
  const blotCount = 72,
        minSize = 1,
        randSize = 12;
  
  for(let i = 1; i <= blotCount; i++) {
    const size = Math.floor(Math.random()*73),
          height = size + minSize,
          width = size + minSize,
          posX = Math.floor(Math.random()*481),
          posY = Math.floor(Math.random()*481) + 64;
    const left = document.querySelector(`.left.blot-${i}`);
    const right = document.querySelector(`.right.blot-${i}`);
    left.style.cssText = `left: ${posX}px; top: ${posY}px; height: ${height}px; width: ${width}px;`
    right.style.cssText = `right: ${posX}px; top: ${posY}px; height: ${height}px; width: ${width}px;`
  }
};

const repeat = () => {
  rorschach();
  setTimeout(() => {
    repeat();
  }, 8000);
};

repeat();