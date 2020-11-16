'use strict';

module.exports = class LRU {
  constructor({ maxSize = 1000 }) {
    this.maxSize = maxSize;
    this.cache = new Map();
    this.oldCache = new Map();
  }

  set(key, value) {
    this.cache.set(key, value);

    if (this.cache.size >= this.maxSize) {
      this.oldCache = this.cache;
      this.cache = new Map();
    }
  }

  get(key) {
    if (this.cache.has(key)) {
      return this.cache.get(key);
    }
    if (this.oldCache.has(key)) {
      // const value = this.oldCache.get(key);
      // this.set(key, value);
      return this.oldCache.get(key);
    }
  }
};
