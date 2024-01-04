var theme = document.querySelector('meta[name="theme-color"]'),
  getThemeColor = theme.getAttribute('content'),
  sectionElem = document.getElementsByTagName('section'),
  sectionHeight = sectionElem[0].clientHeight,
  sectionLength = sectionElem.length;

// set color on load
window.onload = () => {
  document.body.style.backgroundColor = theme.getAttribute('content');
}

// set color on 'scroll' event
window.addEventListener('scroll', (e) => {
  var offset = window.pageYOffset,
    sectionIndex = parseInt(offset, "10") % sectionLength,
    sectionColor = document.getElementsByTagName('section')[sectionIndex].getAttribute('data-theme-color'),
    setSectionColor = theme.setAttribute('content', sectionColor);

  document.querySelectorAll('section')[sectionIndex].style.backgroundColor = theme.getAttribute('content');
});
