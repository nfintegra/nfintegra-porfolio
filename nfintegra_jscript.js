document.addEventListener('DOMContentLoaded', 
  ()=> anime.timeline({

  })
  .add({
    targets: '#bgcirc',
    scale: ['3','1'],

    duration: 50000,
    loop: true
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


