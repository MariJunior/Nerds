'use strict';

(function (){
  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;

  var openPopupButton = document.querySelector('.contacts__link');
  var popup = document.querySelector('.popup');
  var closePopupButton = popup.querySelector('.popup__close-btn');
  var form = popup.querySelector('.popup__form');
  var formFields = form.querySelectorAll('.popup__form-group input');
  var name = form.querySelector('.popup__form-group #name');
  var email = form.querySelector('.popup__form-group #email');
  var feedback = form.querySelector('.popup__form-group #message');
  var submitFormButton = form.querySelector('.popup__form-btn');

  var isStorageSupport = true;
  var storageName = '';
  var storageEmail = '';
  var storageFeedback = '';

  var onPopupEscPress = function (evt) {
    if (evt.target.tagName !== 'INPUT' && evt.target.tagName !== 'TEXTAREA') {
      if (evt.keyCode === ESC_KEYCODE) {
        evt.preventDefault();

        closePopup();
        }
      }
  };

  var openPopup = function () {
    popup.classList.remove('popup--hide');
    popup.classList.add('popup--show');

    if (storageName && storageEmail && storageFeedback) {
      name.value = storageName;
      email.value = storageEmail;
      feedback.value = storageFeedback;
    }

    name.focus();

    document.addEventListener('keydown', onPopupEscPress);
  }

  var closePopup = function () {
    popup.classList.remove('popup--show');
    popup.classList.remove('popup--error');
    popup.classList.add('popup--hide');

    document.removeEventListener('keydown', onPopupEscPress);
  }

  var validateForm = function (evt) {
    for(var i = 0; i < formFields.length; ++i) {
      if(!formFields[i].value) {
        evt.preventDefault();

        popup.classList.remove('popup--error');
        popup.offsetWidth = popup.offsetWidth;
        popup.classList.add('popup--error');

        formFields[i].focus();
      } else {
        if (isStorageSupport) {
        localStorage.setItem('name', name.value);
        localStorage.setItem('email', email.value);
        localStorage.setItem('feedback', feedback.value);
        }
      }
    }
    return
  }

  try {
    storageName = localStorage.getItem('name');
    storageEmail = localStorage.getItem('email');
    storageFeedback = localStorage.getItem('message');
  } catch (err) {
    isStorageSupport = false;
  }

  popup.classList.remove('popup--no-js');
  popup.classList.add('popup--hide');

  openPopupButton.addEventListener('click', function (evt) {
    evt.preventDefault();

    openPopup();
  });

  openPopupButton.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
      evt.preventDefault();

      openPopup();
    }
  })

  closePopupButton.addEventListener('click', function (evt) {
    evt.preventDefault();

    closePopup();
  })

  closePopupButton.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
      closePopup();
    }
  })

  submitFormButton.addEventListener('click', function (evt) {
    validateForm(evt);
  })

  submitFormButton.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
      validateForm(evt);
    }
  })
})();
