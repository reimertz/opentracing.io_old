var header = document.querySelector('header');
var hasScrolled = false

function onScroll() {
  if (document.body.scrollTop > 125) {
    if (hasScrolled) return

    var classList = header.getAttribute('class')  || '';

    hasScrolled = true;
    header.setAttribute('class', classList + 'has-scrolled');
  }
  else if (document.body.scrollTop <= 125 && hasScrolled) {
    var classList = header.getAttribute('class') || ''
    header.setAttribute('class', classList.replace('has-scrolled', ''));
    hasScrolled = false;
  }
}

window.addEventListener('scroll', onScroll)