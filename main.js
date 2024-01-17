function onScroll() {
  if (scrollY > 0) {
    navigationn.classList.add('scroll');
  } else {
    navigationn.classList.remove('scroll');
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded');
}

function closeMenu() {
  document.body.classList.remove('menu-expanded');
}

