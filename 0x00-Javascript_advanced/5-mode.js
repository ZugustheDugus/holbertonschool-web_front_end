const changeMode = (size, weight, transform, background, color) => {
  return () => {
    document.body.style.fontSize = size + 'px';
    document.body.style.fontWeight = weight;
    document.body.style.textTransform = transform;
    document.body.style.backgroundColor = background;
    document.body.style.color = color;
  }
}

const main = () => {
  let spooky = changeMode(9, 'bold', 'uppercase', 'pink', 'green');
  let darkMode = changeMode(12, 'bold', 'capitalize', 'black', 'white');
  let screamMode = changeMode(12, 'normal', 'lowercase', 'white', 'black');

  let par = document.createElement('p');
  par.innerHTML = 'Welcome Holberton!';
  document.body.appendChild(par);

  let spookybtn = document.createElement('btn');
  spookybtn.innerHTML = 'Spooky';
  document.body.appendChild(spookybtn);
  spookybtn.onclick = spooky;

  let darkbtn = document.createElement('btn');
  darkbtn.innerHTML = 'Dark mode';
  document.body.appendChild(darkbtn);
  darkbtn.onclick = darkMode;

  let screambtn = document.createElement('btn');
  screambtn.innerHTML = 'Scream mode';
  document.body.appendChild(screambtn);
  screambtn.onclick = screamMode;
}

main();