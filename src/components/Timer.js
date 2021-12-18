const Timer = () => {
  const timerElement = document.createElement('div');
  timerElement.classList.add('timer');

  const numberSection = document.createElement('div');
  numberSection.textContent = '60';
  numberSection.classList.add('timer__number');

  timerElement.appendChild(numberSection);

  const textSection = document.createElement('div');
  textSection.textContent = 'Ti';
  textSection.classList.add('timer__text');

  timerElement.appendChild(textSection);

  let timerInterval;
  let timeLeft = 60;

  const updateTime = () => {
    timeLeft = timeLeft - 1;
    timeLeft > 0
      ? (numberSection.innerText = timeLeft)
      : (numberSection.innerHTML = 0 && gameOver());
    //console.log(timeLeft);
  };

  const gameOver = () => {
    clearInterval(timerInterval);
  };

  timerInterval = setInterval(updateTime, 1000);

  return timerElement;
};

export default Timer;
