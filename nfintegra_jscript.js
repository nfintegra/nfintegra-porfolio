document.addEventListener('DOMContentLoaded', 
  ()=> anime.timeline({

  })

  .add({
    targets: '#bgcirc',
    scale: ['6','1'],
    easing: 'spring(2, 20, 12, 0)',
    duration: '50000',
  }) 
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

/*let path = anime.path('#mpath path');

anime({
  targets: '#logo_grp',
  translateX: path('x'),
  translateY: path('y'),
  easing: 'linear',
  duration: 20000,
  loop: true
});
*/


