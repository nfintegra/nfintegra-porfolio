const covercirc = document.querySelector('svg#logo g#logo_grp path#covercirc');
const stroke1 = document.querySelector('svg#logo g#logo_grp path#cstroke1.cover_stroke');
const stroke2 = document.querySelector('svg#logo g#logo_grp path#cstroke2.cover_stroke');
const stroke3 = document.querySelector('svg#logo g#logo_grp line#lstroke3');

const fillanimation = {
  fill: ['rgba(255,255,255,0)', '#ffffff'],
  easing: 'linear',
};

document.addEventListener('DOMContentLoaded', 
  ()=> anime.timeline({

  })
  
  .add({
    targets: '#fillgrp circle',
    fillanimation,
    delay: anime.stagger(1700),
  }, 300)

  .add({
    targets: '#strokegrp circle',
    stroke: ['rgba(0,0,0,0)', '#000000'],
    fillanimation,
    delay: anime.stagger(1700),
  }, 300)

  .add({
    targets: '#covercirc',
    strokeDashoffset: [anime.strokeDashoffset, -236],
    duration: '4500',
    easing: 'linear',
  }, '-=3000') 

  .add({
    targets: stroke1,
    strokeDashoffset: [anime.strokeDashoffset, -82],
    easing: 'linear',
    duration: '5000',
  }, 400)

  .add({
    targets: stroke2,
    strokeDashoffset: [anime.strokeDashoffset, -82],
    easing: 'linear',
    duration: '2900',
  }, 1000)

  .add({
    targets: stroke3,
    strokeDashoffset: [anime.strokeDashoffset, -82],
    easing: 'linear',
    duration: '4500',
  }, '-=3000')
  
)

/*
let path = anime.path('#mpath path');

anime({
  targets: '#logo_grp',
  translateX: path('x'),
  translateY: path('y'),
  easing: 'linear',
  duration: 20000,
  loop: true
});
*/