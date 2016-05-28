// Truck Widget - Segmented Buttons:
import '../truck';
import './setup';

$(() => {
  $.extend({
    //==========================
    // Setup a segmented button:
    //==========================
    Segmented: function(options) {
      if (!options || !options.element) return;
      /* 
        options = {
          element: '#segmentHolder'
          labels : ['first','second','third'],
          selected: 0,
          callback: function() { alert('Boring!'); }
        }
      */
      let settings = {
        selected: 0,
        callback: $.noop
      };
      $.extend(settings, options);

      let segmented;
      const labels = (settings.labels) ? settings.labels : [];
      let __selection;
      let __element = settings.element;

      function createSegmentedButton() {
        let __segmented = ['<div class="segmented">'];
        labels.forEach(function(ctx, idx) {
          if (settings.selected === idx) {
            __segmented.push('<button role="radio" aria-checked="true" class="selected">');
            __selection = idx;
          } else {
            __segmented.push('<button role="radio">');
          }

          __segmented.push(ctx);
          __segmented.push('</button>');
        });
        __segmented.push('</div>');
        segmented = __segmented.join('');
        $(settings.element).append(segmented);
      }
      createSegmentedButton();

      const callback = settings.callback;
      $(__element).on('tap', '.segmented > button', function(e) {
        let $this = $(this);
        if (this.parentNode.classList.contains('paging')) return;
        $this.siblings('button').removeClass('selected');
        $this.siblings('button').removeAttr('aria-checked');
        $this.addClass('selected');
        __selection = $this.index();
        __element = $(this);
        $this.attr('aria-checked', true);
        callback.call(this, e);
      });

      return {
        getSelection: function() {
          return {
            index: __selection,
            element: __element
          }
        }
      }
    }
  });
});