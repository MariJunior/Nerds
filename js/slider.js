'use strict';

(function () {
  var sliderControls = document.querySelector('.info-slider__controls');
  var sliderControlsItems = sliderControls.querySelectorAll('.info-slider__controls-item');
  var sliderItems = document.querySelectorAll('.info-slider__item');

  sliderControls.addEventListener('click', function(evt) {
    for (var i = 0; i < sliderControlsItems.length; ++i) {
      sliderControlsItems[i].classList.remove('active');
      sliderItems[i].classList.remove('active');
    }

    evt.target.classList.add('active');
    sliderItems[evt.target.dataset.slideNumber - 1].classList.add('active');
  })
})();
