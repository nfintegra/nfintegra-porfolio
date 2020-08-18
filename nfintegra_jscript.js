//Variables
const covercirc = document.querySelector('svg#logo g#logo_grp path#covercirc');
const stroke1 = document.querySelector('svg#logo g#logo_grp path#cstroke1.cover_stroke');
const stroke2 = document.querySelector('svg#logo g#logo_grp path#cstroke2.cover_stroke');
const stroke3 = document.querySelector('svg#logo g#logo_grp path#lstroke3');
const projectbtn = document.querySelector('svg#logo g#logo_grp g#strokegrp circle#projectbtn');
const nfgrp = document.querySelector('svg#logo g#logo_grp g#nf_grp');

const fillanimation = {
  fill: ['rgba(255,255,255,0)', '#ffffff'],
  easing: 'linear',
};

var reverseTimeline = anime.timeline({ autoplay: false, easing: 'linear',
direction: 'reverse'});

reverseTimeline
.add({
  targets: stroke1,
  strokeDashoffset: [anime.strokeDashoffset, -100],
  duration: '2900',
  }, 1000)
  
.add({
  targets: stroke2,
  strokeDashoffset: [anime.strokeDashoffset, -100],
  duration: '2900',
  }, 1000)

.add({
  targets: stroke3,
  strokeDashoffset: [anime.strokeDashoffset, -100],
  duration: '2900',
  }, '-=500');

/*var rotationloopcir = anime({
  targets: '.rotatecir',
  rotate: {
      value: 360,
      duration: 10000,
      easing: 'linear'
  },
  loop: true
}, 1050) 
*/

//Animations/ Animation Timeline
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
    strokeDashoffset: [anime.strokeDashoffset, -170],
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


// Event Listeners
projectbtn.addEventListener('mouseenter', () => {
  var btnScaleUp = anime({
    targets: '#projectbtn',
    strokeWidth: ['.75', '.25'],
    fill: ['#ffffff', '#ff0000'],
    easing: 'linear',
    duration: '250',
    autoplay: false,
  });
  
  btnScaleUp.play();
  reverseTimeline.play();

  //rotationloopcir.pause();
});

/*
  var nfreverse = anime.timeline({
    strokeDashoffset: [anime.strokeDashoffset, -82],
    easing: 'linear',
    });
  
    nfreverse
    .add({
      targets: stroke1,
      direction: 'reverse',
      duration: '2900',
      }, 1000)
    
    .add({
    targets: stroke2,
    direction: 'reverse',
    duration: '2900',
    }, 1000)

    .add({
    targets: stroke3,
    direction: 'reverse',
    duration: '4500',
    }, '-=3000');

  btnScaleUp.play();
  nfreverse.play();
  //rotationloopcir.pause();

});


projectbtn.addEventListener('mouseleave', () => {
  var btnScaleDown = anime({
    targets: '#projectbtn',
    strokeWidth: ['.75', '.25'],
    fill: ['#ffffff', '#ff0000'],
    easing: 'linear',
    duration: '250',
    direction: 'reverse',
    autoplay: false,
  })

  anime.timeline({
  })
  
  .add({
    targets: '#nf_grp',
    opacity: ['0,1'],
    fill: ['#fff', '#000'],
  })
  
  .add({
    targets: ['#projects', '#pline', '#labelcir'],
    opacity: ['1,0'],
    stroke: ['#ffffff', '#ff0000']
  })

  btnScaleDown.play();
  rotationloopcir.play();
})


projectbtn.addEventListener('click', () => 
  anime.timeline({
  })
  
 .add({
  targets: '#nf_grp',
  opacity: ['1,0'],
  fill: ['#000', '#fff'],
 })



var rotationloopcir = anime({
  targets: '.rotatecir',
  rotate: {
      value: 360,
      duration: 10000,
      easing: 'linear'
  },
  loop: true
}, 1050)

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