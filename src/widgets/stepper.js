// Truck Widget - Stepper:
import '../truck';
import './setup';

$.extend({
  //==================
  // Create a stepper:
  //==================
  Stepper: options => {
    if (!options) return;
    if (!options.element) return;
    if (!options.min) return;
    if (!options.max) return;

    let stepper = $(options.element);
    const min = options.min;
    const max = options.max;
    const defaultValue = options.defaultValue ? options.defaultValue : options.min;
    let increaseSymbol = '+';
    let decreaseSymbol = '-';
    if ($.isWin) {
      increaseSymbol = '';
      decreaseSymbol = '';
    }
    const decreaseButton = '<button class="decrease"><span>-</span></button>';
    const label = `<label>${ defaultValue }</label><input type="text" value="${ defaultValue }">`;
    const increaseButton = '<button class="increase"><span>+</span></button>';
    stepper.append(decreaseButton + label + increaseButton);
    stepper.data('data-value', {
      min: min,
      max: max,
      defaultValue: defaultValue
    });

    const increaseStepperValue = function() {
      const currentValue = stepper.find('input').val();
      const value = stepper.data('data-value');
      const max = value.max;
      let newValue;
      if (currentValue >= max) {
        $(this).addClass('disabled');
      } else {
        newValue = Number(currentValue) + 1;
        stepper.find('button:first-of-type').removeClass('disabled');
        stepper.find('label').text(newValue);
        stepper.find('input')[0].value = newValue;
        if (currentValue === max) {
          $(this).addClass('disabled');
        }
      }
    };

    const decreaseStepperValue = function() {
      const currentValue = stepper.find('input').val();
      const value = stepper.data('data-value');
      const min = value.min;
      let newValue;
      if (currentValue <= min) {
        $(this).addClass('disabled');
      } else {
        newValue = Number(currentValue) - 1;
        stepper.find('button:last-of-type').removeClass('disabled');
        stepper.find('label').text(newValue);
        stepper.find('input')[0].value = newValue;
        if (currentValue === min) {
          $(this).addClass('disabled');
        }
      }
    };

    stepper.find('button:last-of-type').on('tap', function() {
      increaseStepperValue.call(this, stepper);
    });

    stepper.find('button:first-of-type').on('tap', function() {
      decreaseStepperValue.call(this, stepper);
    });

    return {
      getValue: () => {
        return stepper.find('input').val();
      }
    }
  }
});