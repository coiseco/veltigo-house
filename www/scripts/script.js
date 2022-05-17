$(document).ready(function () {
    //animation

  function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
        change.target.classList.add('element-show');
      }
    });
  }
  let options = { threshold: [0.5] };
  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll('.element-animation');
  for (let elm of elements) {
    observer.observe(elm);
  }

  //carousel
  $('.j-carousel').slick({
    dots: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 1000
  });
})

