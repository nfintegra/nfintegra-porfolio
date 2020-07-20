const covercirc = document.querySelector('svg#logo g#logo_grp path#covercirc');
const stroke1 = document.querySelector('svg#logo g#logo_grp path#cstroke1.cover_stroke');
const stroke2 = document.querySelector('svg#logo g#logo_grp path#cstroke2.cover_stroke');
const stroke3 = document.querySelector('svg#logo g#logo_grp line#lstroke3');
const projectbtn = document.querySelector('svg#logo g#logo_grp g#strokegrp circle#projectbtn')

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

var rotationloopcir = anime({
  targets: '.rotatecir',
  rotate: {
      value: 360,
      duration: 10000,
      easing: 'linear'
  },
  loop: true
}, 400)

projectbtn.addEventListener('mouseenter', () => {
  var btnScaleUp = anime({
    targets: '#projectbtn',
    strokeWidth: ['.75', '.25'],
    fill: ['#ffffff', '#ff0000'],
    easing: 'linear',
    duration: '250',
    autoplay: false,
  })

  btnScaleUp.play();
  rotationloopcir.pause();

})

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

  btnScaleDown.play();
  rotationloopcir.play();
})




// rotateCircle();


/*

var rotationloopcir = anime({
    targets: '.rotatecir',
    rotate: {
        value: 360,
        duration: 10000,
        easing: 'linear'
    },
    loop: true
  }, 400)
  
projectbtn.addEventListener('mouseenter', () => {
  btnScaleUp.play();
  rotationloopcir.pause();
})

projectbtn.addEventListener('mouseleave', () => {
  btnScaleUp.reverse();
  rotationloopcir.play();
});

mouseIn();
mouseOut();

var mouse = {
  x: undefined,
  y: undefined
}

window.addEventListener('mousemove',  
    function(event){
      mouse.x = event.x;
      mouse.y = event.y;
})

function rotateCircle() { 
  anime({
    targets: '.rotatecir',
    rotate: {
        value: 360,
        duration: 10000,
        easing: 'linear'
    },
    loop: true
  }, 400)
};

function resumeBtnOverEvent() {
  var btnoverevt = false;
  var btnoverevt = projectbtn.addEventListener('mouseover', () => {
    btnScaleUp.play;

      if (btnoverevt == true){
        rotateCirclecxa.pause();
      } 
  }) 

  var btnoutevt = projectbtn.addEventListener('mouseout', () => {
    btnScaleUp.reverse();
      
    if (btnoutevt == true){
      rotateCircle();
    } 
  })
};

resumeBtnEvent();

projectbtn.addEventListener('mouseover', () => {
  btnScaleUp.play();
})

let btnScaleDwn = btnScaleUp.reverse();

projectbtn.addEventListener('mouseout', () => {
  btnScaleDwn
})



projectbtn.addEventListener('mouseout', () => {
  btnScaleUp.reverse();
})

/*
  btnScaleUp.reverse();

function setUpEvents (){
    
  test.addEventlistener('click', buttonEnlarge);
  
  function buttonEnlarge() {
    anime({
      targets: '#projectBtn',
      translateX: 0,
      translateY: 11,
      scale: (1.8),
      stroke: ['.25', '0'],
      fill: ['#ffffff', '#ff0000'],
      autoplay: false,
    }) 
  };
} 

window.onload = function(){
setUpEvents();
}
/*
anime({
  targets: '.rotatecir',
  rotate: {
      value: 360,
      duration: 10000,
      easing: 'linear'
  },
  loop: true
}, 400)

projectbtn.addEventlistener('click', btnenlrg);

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