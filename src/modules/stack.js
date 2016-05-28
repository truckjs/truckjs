// Truck Module - Stack:
import '../truck';

export class Stack {
  constructor(array) {
    this.data = [];
    if (array && Array.isArray(array)) {
      let i = -1;
      const len = array.length;
      while (++i < len) {
        this.data[i] = array[i];
      }
    } else if (array) {
      const arr = Array.prototype.slice.apply(arguments);
      arr.forEach(function(ctx, idx) {
        this.data[idx] = ctx;
      });
    }
  }

  size() {
    return this.data.length;
  }

  push(data) {
    this.data.push(data);
  }

  pop() {
    return this.data.pop();
  }

  eq(index) {
    if (index < 0) {
      return this.data[this.data.length + index];
    } else {
      return this.data[index];
    }
  }

  forEach(callback) {
    let value;
    let i = 0;
    const len = this.data.length;
    for (; i < len; i++) {
      value = callback.call(this.data[i], this.data[i], i);
      if (value === false) {
        break;
      }
    }
  }

  each(callback) {
    let value;
    let i = 0;
    const len = this.data.length;
    for (; i < len; i++) {
      value = callback.call(this.data[i], i, this.data[i]);
      if (value === false) {
        break;
      }
    }
  }

  shift(...args) {
    return this.data.shift.apply(this.data, args);
  }

  unshift(...args) {
    this.data.unshift.apply(this.data, args);
  }

  slice(...args) {
    return this.data.slice.apply(this.data, args);
  }

  splice(...args) {
    this.data.splice.apply(this.data, args);
  }

  sort(...args) {
    this.data.sort(args);
  }

  sortBy(...props) {
    let args = [];
    const orderBy = () => {
      return (a, b) => {
        const sortByProperty = property => {
          let sortOrder = 1;
          if (property[0] === "-") {
            sortOrder = -1;
            property = property.substr(1);
          }
          return (a, b) => {
            const result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
            return result * sortOrder;
          };
        };
        let i = 0;
        let result = 0;
        const numberOfProperties = props.length;
        while (result === 0 && i < numberOfProperties) {
          result = sortByProperty(props[i])(a, b);
          i++;
        }
        return result;
      };
    };
    this.data.sort(__orderBy.apply(null, args));
    this[0] = this.data[0];
    return this;
  }
  
  filter(...args) {
    return this.data.filter.apply(this.data, args);
  }

  map(...args) {
    return this.data.map.apply(this.data, args);
  }

  join(separator) {
    return this.data.join(separator);
  }

  concat(object) {
    if (Array.isArray(object)) {
      this.data.push.apply(this.data, object);
    }
  }

  reverse(...args) {
    this.data.reverse.apply(this.data, args);
  }

  indexOf(...args) {
    return this.data.indexOf.apply(this.array, args);
  }

  every(...args) {
    return this.data.every.apply(this.data, args);
  }

  some(...args) {
    return this.data.some.apply(this.data, arguments);
  }

  unique() {
    const len = this.data.length;
    let ret = [];
    let obj = {};

    for (let i = 0; i < len; i++) {
      let arrayItem = JSON.stringify(this.data[i]);
      const arrayItemValue = this.data[i];
      if (obj[arrayItem] === undefined) {
        ret.push(arrayItemValue);
        obj[arrayItem] = 1;
      } else {
        obj[arrayItem]++;
      }
    }
    this.data = ret;
  }

  purge() {
    this.data = [];
  }

  getData() {
    return this.data;
  }
}

$.extend({
  Stack: Stack
});