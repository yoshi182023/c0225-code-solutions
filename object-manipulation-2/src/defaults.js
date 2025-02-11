'use strict';
/* exported defaults */
const defaults = (target, source) => {
  for (const key in source) {
    if (!target.hasOwnProperty(key)) {
      target[key] = source[key];
    }
  }
};
