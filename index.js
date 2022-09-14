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
window.addEventListener('resize', () => {
  window.location.reload();
});
// Array of featured speakers
const featuredSpeakers = [
  {
    id: 'speaker1',
    img: 'Images/IMG_0755.JPG',
    imgCheckers: 'Images/Checkers-img.png',
    class: 'speakers',
    name: 'Lilian Chase Takma',
    credentials: 'CEO of Moode Art Enterprise',
    Interest: 'She draws on global influences to create warm, richly symbolic paintings and illustrations. With a studio based outside of New Orleans in historic Covington, Louisiana, Marianne is often inspired by the symbiosis of communities and the natural landscapes they inhabit.',
  },
  {
    id: 'speaker2',
    img: 'Images/speaker-replacement.jpg',
    imgCheckers: 'Images/Checkers-img.png',
    class: 'speakers2',
    name: 'Ronal Kawaski',
    credentials: 'Professor of Art science at the University of London',
    Interest: 'I have a background in apparel design so tactility and texture is a feature that I love. I have some raw canvas paintings with fabric sewn throughout which I encourage people to touch.',
  },
  {
    id: 'speaker3',
    img: 'Images/speaker2.jpg',
    imgCheckers: 'Images/Checkers-img.png',
    class: 'speakers3',
    name: 'Jay Ekow Melfah',
    credentials: 'Director of Moode Art Enterprise',
    Interest: 'Meant to describe a person who migrates to Nantucket, an island thirty miles out to sea, the term just so happens to perfectly describe Jay’s love for photography, too',
  },
  {
    id: 'speaker4',
    img: 'Images/replacement.jpg',
    imgCheckers: 'Images/Checkers-img.png',
    class: 'speakers4',
    name: 'Laura Lordanna',
    credentials: 'Artist at Moode Art Enterprise',
    Interest: 'She offers both originals and prints in her online shop -- and prints start at $35 so check it out now if not sooner. We caught up with Marianne to learn about how her artist journey what its like running her own business. ',
  },
  {
    id: 'speaker5',
    img: 'Images/speaker5.jpg',
    imgCheckers: 'Images/Checkers-img.png',
    class: 'speakers5',
    name: 'Carimae Lucy Andelle',
    credentials: 'Photographer at Moode Art Enterprise',
    Interest: 'Theres always something that needs to be done, Im my own biggest critic and often press myself to make everything perfect. The work is non-stop but it is joyful, fulfilling work.',
  },
  {
    id: 'speaker6',
    img: 'Images/Micha.jpg',
    imgCheckers: 'Images/Checkers-img.png',
    class: 'speakers6',
    name: 'Aurora Altaria',
    credentials: 'Photographer at Moode Art Enterprise',
    Interest: 'I like to show a variety of framing options to my clients for works on paper, it really helps them envision and find a good fit for their individual interior style.',
  },
];

// Divide array in two(first two)
const firstTwoSpeakers = [
  {
    id: 'speaker1',
    img: 'Images/IMG_0755.JPG',
    imgCheckers: 'Images/Checkers-img.png',
    class: 'speakers',
    name: 'Lilian Chase Takma',
    credentials: 'CEO of Moode Art Enterprise',
    Interest: 'She draws on global influences to create warm, richly symbolic paintings and illustrations. With a studio based outside of New Orleans in historic Covington, Louisiana, Marianne is often inspired by the symbiosis of communities and the natural landscapes they inhabit.',
  },
  {
    id: 'speaker2',
    img: 'Images/speaker-replacement.jpg',
    imgCheckers: 'Images/Checkers-img.png',
    class: 'speakers2',
    name: 'Ronal Kawaski',
    credentials: 'Professor of Art science at the University of London',
    Interest: 'I have a background in apparel design so tactility and texture is a feature that I love. I have some raw canvas paintings with fabric sewn throughout which I encourage people to touch.',
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
    Interest: 'Meant to describe a person who migrates to Nantucket, an island thirty miles out to sea, the term just so happens to perfectly describe Jay’s love for photography, too',
  },
  {
    id: 'speaker4',
    img: 'Images/replacement.jpg',
    imgCheckers: 'Images/Checkers-img.png',
    class: 'speakers42',
    name: 'Laura Lordanna',
    credentials: 'Artist at Moode Art Enterprise',
    Interest: 'She offers both originals and prints in her online shop -- and prints start at $35 so check it out now if not sooner. We caught up with Marianne to learn about how her artist journey what its like running her own business. ',
  },
  {
    id: 'speaker5',
    img: 'Images/speaker5.jpg',
    imgCheckers: 'Images/Checkers-img.png',
    class: 'speakers52',
    name: 'Carimae Lucy Andelle',
    credentials: 'Photographer at Moode Art Enterprise',
    Interest: 'Theres always something that needs to be done, Im my own biggest critic and often press myself to make everything perfect. The work is non-stop but it is joyful, fulfilling work.',
  },
  {
    id: 'speaker6',
    img: 'Images/Micha.jpg',
    imgCheckers: 'Images/Checkers-img.png',
    class: 'speakers62',
    name: 'Aurora Altaria',
    credentials: 'Photographer at Moode Art Enterprise',
    Interest: 'I like to show a variety of framing options to my clients for works on paper, it really helps them envision and find a good fit for their individual interior style.',
  },
];
const speakersCont = document.querySelector('.speakers-container');
const speakersCont2 = document.querySelector('.speakers-container2');
const speakersCont3 = document.querySelector('.speakers-container3');
const query = window.matchMedia('(min-width: 768px)');
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
  span.classList.add('cal');
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
      span.classList.add('cal');
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
    span.classList.add('cal');
    const par = document.createElement('p');
    par.classList.add('speaker-interest');
    par.textContent = obj.Interest;
    div3.append(h3, h4, span, par);
    div2.append(img1, img2);
    div1.append(div2, div3);
    speakersCont3.appendChild(div1);
  });
}