// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {

  var stringify = function(obj) {
    if (obj === null) {
      return 'null';
    } else if (typeof obj == 'string') {
      return '"' + obj + '"';
    } else if (obj === undefined) {
      return 'undefined';

    } else if (typeof obj == 'object') {
      var temp = [];

      if (Array.isArray(obj)) {
        for (var i = 0; i < obj.length; i++) {
          temp.push(stringifyJSON(obj[i]));
        }
        return '[' + temp + ']'; 
      } else {
        for (var key in obj) {
          if (typeof obj[key] != 'function' && obj[key] !== undefined) {
            temp.push(stringify(key) + ':' + stringify(obj[key]));
          }
        }

        return '{' + temp + '}';
      }
    } else {
      return obj.toString();
    }
  };

  return stringify(obj);
};
