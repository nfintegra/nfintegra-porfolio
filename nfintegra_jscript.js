document.addEventListener('DOMContentLoaded', 
  ()=> anime.timeline({

  })
  .add({
    targets: '#bgcirc',
    scale: ['6','1'],
    easing: 'spring(2, 20, 12, 0)',
    duration: 50000,
  })
  
  .add({
    targets: '#bgcirc',
    scale: ['6','1'],
    easing: 'spring(2, 20, 12, 0)',
    duration: 50000,
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


