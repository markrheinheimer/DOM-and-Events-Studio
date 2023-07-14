// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener('load', () => {
  const takeoff = document.getElementById('takeoff');
  const flightStatus = document.getElementById('flightStatus');
  const flightScreen = document.getElementById('shuttleBackground');
  const shuttleHeight = document.getElementById('spaceShuttleHeight');
  const land = document.getElementById('landing');

  takeoff.addEventListener('click', () => {
    let response = window.confirm(
      'Confirm that the shuttle is ready for takeoff'
    );
    if (response) {
      flightStatus.innerText = 'Shuttle in flight';
      flightScreen.style.backgroundColor = 'blue';
      shuttleHeight.innerText = '10,000';
    }
  });

  land.addEventListener('click', () => {
    window.alert('The shuttle is landing. Landing gear engaged');
    flightStatus.innerText = 'The shuttle has landed';
    flightScreen.style.backgroundColor = 'green';
    shuttleHeight.innerText = 0;
  });
});
