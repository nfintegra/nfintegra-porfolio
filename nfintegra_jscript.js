let path = anime.path('#mpath path');

anime({
  targets: '#logo',
  translateX: path('x'),
  translateY: path('y'),
  easing: 'linear',
  duration: 8000,
  loop: true
});