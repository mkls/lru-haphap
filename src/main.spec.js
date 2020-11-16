'use strict';

const LRU = require('./main');

describe('LRU', () => {
  it('should store items with set and return them with get', () => {
    const lru = new LRU({ maxSize: 10 });

    lru.set('a', 1);
    lru.set('b', 2);

    expect(lru.get('a')).toEqual(1);
    expect(lru.get('b')).toEqual(2);
  });

  fit('should drop old values when more than twice maxSize items are stored', () => {
    const lru = new LRU({ maxSize: 1 });

    lru.set('a', 1);
    lru.set('b', 2);
    lru.set('c', 3);
    lru.set('d', 4);
    lru.set('e', 5);

    console.log(lru.cache);
    console.log(lru.oldCache);

    expect(lru.get('a')).toEqual(undefined);
    expect(lru.get('b')).toEqual(2);
    expect(lru.get('c')).toEqual(3);
    expect(lru.get('d')).toEqual(4);
    expect(lru.get('c')).toEqual(5);
  });
});

// todo: has, maxAge, clear