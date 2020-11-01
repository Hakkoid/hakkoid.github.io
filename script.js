(function () {
    'use strict';

    const closePopup = arg => {
      let popup = arg;

      if (typeof popup === 'string') {
        popup = document.querySelector(popup);
      }

      popup.classList.add('popup_hidden');
      document.body.style.overflow = '';
    };
    const showPopup = arg => {
      let popup = arg;

      if (typeof popup === 'string') {
        popup = document.querySelector(popup);
      }

      popup.classList.remove('popup_hidden');
      document.body.style.overflow = 'hidden';
    };
    const popups = document.querySelectorAll('.popup');
    popups.forEach(popup => {
      const close = popup.querySelector('.popup__close');
      popup.addEventListener('click', event => {
        if (popup === event.target) {
          closePopup(popup);
        }
      });

      if (close) {
        close.addEventListener('click', () => {
          closePopup(popup);
        });
      }
    });

    const buttons = document.querySelectorAll('.mythic-card__buy');
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        showPopup('#mythic-form');
      });
    });

}());

var script = (function (exports) {
    'use strict';

    const closePopup = arg => {
      let popup = arg;

      if (typeof popup === 'string') {
        popup = document.querySelector(popup);
      }

      popup.classList.add('popup_hidden');
      document.body.style.overflow = '';
    };
    const showPopup = arg => {
      let popup = arg;

      if (typeof popup === 'string') {
        popup = document.querySelector(popup);
      }

      popup.classList.remove('popup_hidden');
      document.body.style.overflow = 'hidden';
    };
    const popups = document.querySelectorAll('.popup');
    popups.forEach(popup => {
      const close = popup.querySelector('.popup__close');
      popup.addEventListener('click', event => {
        if (popup === event.target) {
          closePopup(popup);
        }
      });

      if (close) {
        close.addEventListener('click', () => {
          closePopup(popup);
        });
      }
    });

    exports.closePopup = closePopup;
    exports.showPopup = showPopup;

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

}({}));

(function () {
    'use strict';

    const radioButtons = document.querySelectorAll('.radio-buttons_can-uncheck .radio-buttons__label');
    radioButtons.forEach(item => {
      item.addEventListener('click', e => {
        const id = e.target.getAttribute('for');
        const input = document.getElementById(id);

        if (input.checked) {
          setTimeout(() => {
            input.checked = false;
          }, 30);
        }
      });
    });

}());

(function () {
    'use strict';

    const copyItems = document.querySelectorAll('.social-media');
    copyItems.forEach(item => {
      const copy = item.querySelector('.social-media__copy');
      const textarea = item.querySelector('.social-media__hidden');
      copy.addEventListener('click', () => {
        textarea.focus();
        textarea.select();
        document.execCommand('copy');
      });
    });

}());
