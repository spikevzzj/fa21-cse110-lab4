let d = new Date();
let time = d.toLocaleTimeString();
function everySec(){console.log(time)};
let t = setInterval(everySec, 1000);