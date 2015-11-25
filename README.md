# esformatter-limit-linebreaks

[esformatter](https://github.com/millermedeiros/esformatter) plugin limiting linebreaks.



## Usage

install it:

```sh
npm install esformatter-limit-linebreaks
```

and add to your esformatter config file:

```json
{
  "plugins": [
    "esformatter-align"
  ],
  "LimitLineBreaks": 2
}
```

## Examples

input:

```js
var longer = require('hello');
var small = require('hello');
var muchlonger = require('hello');
```

output:

```js
var longer     = require('hello');
var small      = require('hello');
var muchlonger = require('hello');
```

input:

```js
var x = {
  a: 5,
  bla: ''
};
```

output:

```js
var x = {
  a:   5,
  bla: ''
};
```

## License

Released under the [MIT License](http://opensource.org/licenses/MIT).

