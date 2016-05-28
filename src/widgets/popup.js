// Truck Widget - Popup:
import '../truck';
import './setup';
import './block';

$.extend({
  //=======================
  // Setup  a popup dialog:
  //=======================
  Popup: options => {
    /*
    options {
      id: 'alertID',
      title: 'Alert',
      message: 'This is a message from me to you.',
      cancelButton: 'Cancel',
      continueButton: 'Go Ahead',
      width: '100px',
      callback: function() { // do something },
      empty: true
    }
    */
    if (!options) return;
    let settings = {};
    settings.id = $.uuid();
    settings.content = true;
    $.extend(settings, options);
    let width = '';
    if (settings.width) {
      width = `style="width:${ settings.width }px;"`;
    }

    const id = settings.id;
    const title = settings.title ? `<header><h1>${ settings.title }</h1></header>` : '';
    const message = settings.message ? `<p role="note">${ options.message }</p>` : '';
    const cancelButton = options.cancelButton ? `<button class="cancel" role="button">${ settings.cancelButton }</button>` : '';
    const continueButton = settings.continueButton ? `<button class="continue" role="button">${ settings.continueButton }</button>` : '';
    const callback = settings.callback || $.noop;
    let popup;
    if (settings.empty) {
      popup = `<div ${ width } class="popup closed" role="alertdialog" id="${ id }"></div>`;
    } else {
      popup = `<div class="popup closed" role="alertdialog" id="${ id }"><div class="panel">${ title }${ message }</div><footer>${ cancelButton }${ continueButton }</footer></div>`;
    }

    $('body').append(popup);
    if (callback && continueButton) {
      $('.popup').find('.continue').on($.eventStart, function() {
        let $this = $(this);
        if ($.isAndroid || $.isChrome) {
          $this.addClass('selected');
          setTimeout(function() {
            $this.removeClass('selected');
            $('.popup').ClosePopup();
            callback.call(callback);
          }, 300);
        } else {
          $('.popup').ClosePopup();
          callback.call(callback);
        }
      });
      $('.popup').find('.cancel').on($.eventStart, function() {
        let $this = $(this);
        if ($.isAndroid || $.isChrome) {
          $this.addClass('selected');
          setTimeout(function() {
            $this.removeClass('selected');
            $('.popup').ClosePopup();
          }, 300);
        } else {
          $('.popup').ClosePopup();
        }
      });
    }

    $.CenterPopup();
    const events = `${ $.eventStart } tap ${ $.eventEnd }`;
    $('.mask').on(events, function(e) {
      e.stopPropagation();
    });
  },

  // Hanle Orientation Change:
  //==========================
  CenterPopup: () => {
    let popup = $('.popup');
    if (!popup[0]) return;
    const tmpTop = ((window.innerHeight / 2) + window.pageYOffset) - (popup[0].clientHeight / 2) + 'px';
    let tmpLeft;
    if (window.innerWidth === 320) {
      tmpLeft = '10px';
    } else {
      tmpLeft = Math.floor((window.innerWidth - popup[0].clientWidth) / 2) + 'px';
    }
    if ($('body').hasClass('isWindows')) {
      popup.css({
        top: tmpTop
      });
    } else {
      popup.css({
        left: tmpLeft,
        top: tmpTop
      });
    }
  }
});
$.fn.extend({
  // Show Popup:
  //============
  ShowPopup: function() {
    $.Block('0.5');
    $(this).removeClass('closed');
    $(this).addClass('opened');
    $.CenterPopup();
  },

  // Close Popup:
  //=============
  ClosePopup: function() {
    $.Unblock();
    $(this).removeClass('opened');
    $(this).addClass('closed');
  }
});

// Reposition popups on window resize:
//====================================
$(() => {
  window.onresize = () => {
    $.CenterPopup();
  };
});