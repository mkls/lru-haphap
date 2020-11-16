# lru-haphap

> Simple [“Least Recently Used” (LRU) cache](https://en.m.wikipedia.org/wiki/Cache_replacement_policies#Least_Recently_Used_.28LRU.29) with expiration

Useful when you need to cache something and limit memory usage and you also want to set a maximum
age for stored items.

Inspired by the [quick-lru](https://www.npmjs.com/package/quick-lru) package, with the added support for maxAge.

quick-lru is in turn inspired by the [`hashlru` algorithm](https://github.com/dominictarr/hashlru#algorithm), but instead uses [`Map`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Map) to support keys of any type, not just strings, and values can be `undefined`.
