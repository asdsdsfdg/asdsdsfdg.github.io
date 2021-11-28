const backimg = ["0.jpeg", "1.jpeg", "2.jpeg"];

const backgroundImg = backimg[Math.floor(Math.random() * backimg.length)];

// const imgtag = document.createElement("img");

// imgtag.src = `img/${backgroundImg}`;

document.body.style.backgroundImage = `linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3) ), url("img/${backgroundImg}")`;
