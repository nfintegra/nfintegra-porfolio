const stroke1 = document.querySelector('svg#logo g#logo_grp path#cstroke1.cover_stroke');
const stroke2 = document.querySelector('svg#logo g#logo_grp path#cstroke2.cover_stroke');
const covercirc = document.querySelector('svg#logo g#logo_grp path#covercirc');
var loopCirc = 0;

document.addEventListener('DOMContentLoaded', 
  ()=> anime.timeline({

  })

  .add({
    targets: '#covercirc',
    strokeDashoffset: [anime.strokeDashoffset, -236],
    easing: 'easeInOutQuad',
    duration: '20000',
    loop: true,
    direction: 'alternate',
    easing: 'linear',
    loopBegin: function(anim) {
      loopCirc++;
    }
  }) 
  .add({
    targets: stroke1,
    strokeDashoffset: [anime.strokeDashoffset, -82],
    easing: 'easeInOutQuad',
    duration: '5000',
  }, '-=600')
  .add({
    targets: '.fillcir',
    fill: ['rgba(255,255,255,0)', '#ffffff'],
    easing: 'linear',
    duration: '250',
  }) 
  .add({
    targets: '.strokecir',
    fill: ['rgba(255,255,255,0)', '#ffffff'],
    stroke: ['rgba(0,0,0,0)', '#000000'],
    easing: 'linear',
    duration: '1200',
  }) );

/*
    begin: (anim)=> {
      document.getElementById('#logo.path.cstroke1', ()=>anime.timeline({
      })
      .add({
        targets:'#cstroke1',
        strokeDashoffset: [anime.strokeDashoffset, 0],
        easing: 'easeInOutQuad',
        duration: 5000,
      }, '-=600')
      );

    }


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


