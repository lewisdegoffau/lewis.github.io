function animateBg(i) {
  document.body.style.backgroundColor = 'hsl(' + i + ', 100%, 50%)';

  setTimeout(function() {
    animateBg(++i)
  }, i);
}
animateBg(0);
