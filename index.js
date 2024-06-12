setInterval(() => {
  d = new Date();
  hr = d.getHours();
  min = d.getMinutes();
  sec = d.getSeconds();
  hrotate = 30 * hr + (1 / 2) * min;
  mrotate = (6 * min);
  srotate = (6 * sec);

  hour.style.transform = `rotate(${hrotate}deg)`;
  minute.style.transform  = `rotate(${mrotate}deg)`;
 second.style.transform  = `rotate(${srotate}deg)`;
}, 1000);

/*
12 hr= 360
1hr= 360/12= 30

60min= 30
1min= 30/60=1/2

1hr= 30hr +1/2min


60min= 360
1min=, 360/60= 6min

60sec= 360
1 sec=360/60= 6sec


*/
