const hamburgerPopup = document.querySelector('.nav-toggle');
const menuIcons = document.querySelectorAll('.ham-list > li > a');

hamburgerPopup.addEventListener('click', () => {
  document.body.classList.toggle('hamburger-open');
});

menuIcons.forEach((link) => {
  link.addEventListener('click', () => {
    document.body.classList.remove('hamburger-open');
  });
});

// Array of featured speakers
const featuredSpeakers = [
  {
    id: 'speaker1',
    img: 'Images/Lilian.jpg',
    imgCheckers: 'Images/Checkers-img.png',
    class: 'speakers',
    name: 'Lilian Chase Takma',
    credentials: 'CEO of Moode Art Enterprise',
    Interest: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga culpa vitae sed est beatae ex, possimus odio.     Incidunt, excepturi quo.',
  },
  {
    id: 'speaker2',
    img: 'Images/speaker4.jpg',
    imgCheckers: 'Images/Checkers-img.png',
    class: 'speakers2',
    name: 'Ronal Kawaski',
    credentials: 'Professor of Art science at the University of London',
    Interest: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga culpa vitae sed est beatae ex, possimus odio.     Incidunt, excepturi quo.',
  },
  {
    id: 'speaker3',
    img: 'Images/speaker2.jpg',
    imgCheckers: 'Images/Checkers-img.png',
    class: 'speakers3',
    name: 'Jay Ekow Melfah',
    credentials: 'Director of Moode Art Enterprise',
    Interest: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga culpa vitae sed est beatae ex, possimus odio.     Incidunt, excepturi quo.',
  },
  {
    id: 'speaker4',
    img: 'Images/speaker3.jpg',
    imgCheckers: 'Images/Checkers-img.png',
    class: 'speakers4',
    name: 'Laura Lordanna',
    credentials: 'Artist at Moode Art Enterprise',
    Interest: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga culpa vitae sed est beatae ex, possimus odio.     Incidunt, excepturi quo.',
  },
  {
    id: 'speaker5',
    img: 'Images/speaker5.jpg',
    imgCheckers: 'Images/Checkers-img.png',
    class: 'speakers5',
    name: 'Carimae Lucy Andelle',
    credentials: 'Photographer at Moode Art Enterprise',
    Interest: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga culpa vitae sed est beatae ex, possimus odio.     Incidunt, excepturi quo.',
  },
  {
    id: 'speaker6',
    img: 'Images/speaker6.jpg',
    imgCheckers: 'Images/Checkers-img.png',
    class: 'speakers6',
    name: 'Aurora Altaria',
    credentials: 'Photographer at Moode Art Enterprise',
    Interest: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga culpa vitae sed est beatae ex, possimus odio.     Incidunt, excepturi quo.',
  },
];

// Divide array in two(first two)
const firstTwoSpeakers = [
  {
    id: 'speaker1',
    img: 'Images/Lilian.jpg',
    imgCheckers: 'Images/Checkers-img.png',
    class: 'speakers',
    name: 'Lilian Chase Takma',
    credentials: 'CEO of Moode Art Enterprise',
    Interest: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga culpa vitae sed est beatae ex, possimus odio.     Incidunt, excepturi quo.',
  },
  {
    id: 'speaker2',
    img: 'Images/speaker4.jpg',
    imgCheckers: 'Images/Checkers-img.png',
    class: 'speakers2',
    name: 'Ronal Kawaski',
    credentials: 'Professor of Art science at the University of London',
    Interest: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga culpa vitae sed est beatae ex, possimus odio.     Incidunt, excepturi quo.',
  },
];
// Last four
const lastFourSpeakers = [
  {
    id: 'speaker3',
    img: 'Images/speaker2.jpg',
    imgCheckers: 'Images/Checkers-img.png',
    class: 'speakers32',
    name: 'Jay Ekow Melfah',
    credentials: 'Director of Moode Art Enterprise',
    Interest: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga culpa vitae sed est beatae ex, possimus odio.     Incidunt, excepturi quo.',
  },
  {
    id: 'speaker4',
    img: 'Images/speaker3.jpg',
    imgCheckers: 'Images/Checkers-img.png',
    class: 'speakers42',
    name: 'Laura Lordanna',
    credentials: 'Artist at Moode Art Enterprise',
    Interest: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga culpa vitae sed est beatae ex, possimus odio.     Incidunt, excepturi quo.',
  },
  {
    id: 'speaker5',
    img: 'Images/speaker5.jpg',
    imgCheckers: 'Images/Checkers-img.png',
    class: 'speakers52',
    name: 'Carimae Lucy Andelle',
    credentials: 'Photographer at Moode Art Enterprise',
    Interest: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga culpa vitae sed est beatae ex, possimus odio.     Incidunt, excepturi quo.',
  },
  {
    id: 'speaker6',
    img: 'Images/speaker6.jpg',
    imgCheckers: 'Images/Checkers-img.png',
    class: 'speakers62',
    name: 'Aurora Altaria',
    credentials: 'Photographer at Moode Art Enterprise',
    Interest: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga culpa vitae sed est beatae ex, possimus odio.     Incidunt, excepturi quo.',
  },
];
const speakersCont = document.querySelector('.speakers-container');
const speakersCont2 = document.querySelector('.speakers-container2');
const speakersCont3 = document.querySelector('.speakers-container3');
firstTwoSpeakers.forEach((obj) => {
  const div1 = document.createElement('div');
  div1.classList.add(obj.class);
  const div2 = document.createElement('div');
  div2.classList.add('speaker-img');
  const img1 = document.createElement('img');
  img1.classList.add('checkers-img');
  img1.src = obj.imgCheckers;
  const img2 = document.createElement('img');
  img2.classList.add('imgspk');
  img2.src = obj.img;
  const div3 = document.createElement('div');
  div3.classList.add('speaker-details');
  const h3 = document.createElement('h3');
  h3.classList.add('speaker-name');
  h3.textContent = obj.name;
  const h4 = document.createElement('h4');
  h4.classList.add('speaker-credentials');
  h4.textContent = obj.credentials;
  const span = document.createElement('span');
  span.classList.add('small-line', 'cal');
  const par = document.createElement('p');
  par.classList.add('speaker-interest');
  par.textContent = obj.Interest;
  div3.append(h3, h4, span, par);
  div2.append(img1, img2);
  div1.append(div2, div3);
  speakersCont.appendChild(div1);
});

const seeMore = document.querySelector('.speakers-seemore');
seeMore.addEventListener('click', () => {
  if (seeMore.innerHTML === 'MORE <i id="button-arrow" class="fa-solid fa-chevron-down"></i>') {
    document.querySelector('.speakers-container2').style.gridTemplateRows = '1fr 1fr 1fr 1fr 1fr 1fr';
    lastFourSpeakers.forEach((obj) => {
      const div1 = document.createElement('div');
      div1.classList.add(obj.class);
      const div2 = document.createElement('div');
      div2.classList.add('speaker-img');
      const img1 = document.createElement('img');
      img1.classList.add('checkers-img');
      img1.src = obj.imgCheckers;
      const img2 = document.createElement('img');
      img2.classList.add('imgspk');
      img2.src = obj.img;
      const div3 = document.createElement('div');
      div3.classList.add('speaker-details');
      const h3 = document.createElement('h3');
      h3.classList.add('speaker-name');
      h3.textContent = obj.name;
      const h4 = document.createElement('h4');
      h4.classList.add('speaker-credentials');
      h4.textContent = obj.credentials;
      const span = document.createElement('span');
      span.classList.add('small-line', 'cal');
      const par = document.createElement('p');
      par.classList.add('speaker-interest');
      par.textContent = obj.Interest;
      div3.append(h3, h4, span, par);
      div2.append(img1, img2);
      div1.append(div2, div3);
      speakersCont2.appendChild(div1);
      document.querySelector('.footer-section').style.display = 'block';
      document.querySelector('.speakers-container2').style.display = 'grid';
      seeMore.innerHTML = 'LESS <i id="button-arrow" class="fa-solid fa-angle-up"></i>';
    });
  } else {
    document.querySelector('.footer-section').style.display = 'none';
    document.querySelector('.speakers-container2').style.display = 'none';
    seeMore.innerHTML = 'MORE <i id="button-arrow" class="fa-solid fa-chevron-down"></i>';
  }
});

const query = window.matchMedia('(min-width: 768px)');
if (query.matches) {
  featuredSpeakers.forEach((obj) => {
    const div1 = document.createElement('div');
    div1.classList.add(obj.class);
    const div2 = document.createElement('div');
    div2.classList.add('speaker-img');
    const img1 = document.createElement('img');
    img1.classList.add('checkers-img');
    img1.src = obj.imgCheckers;
    const img2 = document.createElement('img');
    img2.classList.add('imgspk');
    img2.src = obj.img;
    const div3 = document.createElement('div');
    div3.classList.add('speaker-details');
    const h3 = document.createElement('h3');
    h3.classList.add('speaker-name');
    h3.textContent = obj.name;
    const h4 = document.createElement('h4');
    h4.classList.add('speaker-credentials');
    h4.textContent = obj.credentials;
    const span = document.createElement('span');
    span.classList.add('small-line', 'cal');
    const par = document.createElement('p');
    par.classList.add('speaker-interest');
    par.textContent = obj.Interest;
    div3.append(h3, h4, span, par);
    div2.append(img1, img2);
    div1.append(div2, div3);
    speakersCont3.appendChild(div1);
  });
}