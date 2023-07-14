// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener('load', () => {
  const takeoff = document.getElementById('takeoff');
  const flightStatus = document.getElementById('flightStatus');
  const flightScreen = document.getElementById('shuttleBackground');
  const shuttleHeight = document.getElementById('spaceShuttleHeight');
  const land = document.getElementById('landing');
  const abort = document.getElementById('missionAbort');
  const up = document.getElementById('up');
  const down = document.getElementById('down');
  const right = document.getElementById('right');
  const left = document.getElementById('left');
  const rocket = document.getElementById('rocket');
  const shuttleBackground = document.getElementById('shuttleBackground');

  rocket.style.position = 'relative';
  rocket.style.top = '250px';
  rocket.style.left = '0';

  takeoff.addEventListener('click', () => {
    let response = window.confirm(
      'Confirm that the shuttle is ready for takeoff'
    );
    if (response) {
      flightStatus.innerText = 'Shuttle in flight';
      flightScreen.style.backgroundColor = 'blue';
      shuttleHeight.innerText = '10,000';
      rocket.style.top = '0';
      rocket.style.left = '0';
    }
  });

  land.addEventListener('click', () => {
    window.alert('The shuttle is landing. Landing gear engaged');
    flightStatus.innerText = 'The shuttle has landed';
    flightScreen.style.backgroundColor = 'green';
    shuttleHeight.innerText = 0;
    rocket.style.top = '250px';
    rocket.style.left = '0';
  });

  abort.addEventListener('click', () => {
    let response = window.confirm('Confirm that you want to abort the mission');
    if (response) {
      flightStatus.innerText = 'Mission aborted';
      flightScreen.style.backgroundColor = 'green';
      shuttleHeight.innerText = 0;
      rocket.style.top = '250px';
      rocket.style.left = '0';
    }
  });

  let upPad = 250;
  let leftPad = 0;
  let shuttleWidth = 30;

  let view = shuttleBackground.getBoundingClientRect();
  console.log(view);

  up.addEventListener('click', () => {
    if (upPad > 0) {
      rocket.style.position = 'relative';
      upPad -= 10;
      rocket.style.top = `${upPad}px`;
    }
  });

  down.addEventListener('click', () => {
    if (upPad < 250) {
      rocket.style.position = 'relative';
      upPad += 10;
      rocket.style.top = `${upPad}px`;
    }
  });

  right.addEventListener('click', () => {
    if (leftPad < view.width / 2 - shuttleWidth) {
      rocket.style.position = 'relative';
      leftPad += 10;
      rocket.style.left = `${leftPad}px`;
    }
  });
  left.addEventListener('click', () => {
    if (leftPad > -(view.width / 2) + shuttleWidth) {
      rocket.style.position = 'relative';
      leftPad -= 10;
      rocket.style.left = `${leftPad}px`;
    }
  });
});
