const backimg = ["0.jpeg", "1.jpeg", "2.jpeg"];

const backgroundImg = backimg[Math.floor(Math.random() * backimg.length)];

const imgtag = document.createElement("img");

imgtag.src = `img/${backgroundImg}`;

document.body.appendChild(imgtag);
