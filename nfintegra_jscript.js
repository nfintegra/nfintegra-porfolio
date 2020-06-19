const covercirc = document.querySelector('svg#logo g#logo_grp path#covercirc');
const stroke1 = document.querySelector('svg#logo g#logo_grp path#cstroke1.cover_stroke');
const stroke2 = document.querySelector('svg#logo g#logo_grp path#cstroke2.cover_stroke');
const stroke3 = document.querySelector('svg#logo g#logo_grp line#lstroke3');

document.addEventListener('DOMContentLoaded', 
  ()=> anime.timeline({

  })

  .add({
    targets: '#covercirc',
    strokeDashoffset: [anime.strokeDashoffset, -236],
    easing: 'easeInOutQuad',
    duration: '5400',
    easing: 'linear',
  }) 
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
    duration: '5000',
  }, '-=2500')

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
  },'-=200') );

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


