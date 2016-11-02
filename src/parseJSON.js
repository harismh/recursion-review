// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  var objectHelper = function(json) {
    var container = {};
    var keyIndex;
    var regex = /(?:\d*\.)?[a-zA-Z\d]+/igm;

    // build a key value
    var regexd = json.match(regex);

    for (var i = 0; i < regexd.length; i++) {
      // can we assume 
      if (i % 2 === 0) {
        keyIndex = regexd[i];
      } 
      if (i % 2 === 1) {
        container[keyIndex] = parseJSON(regexd[i]);
      }
    }

    return container;
  };

  if (currentChar === '{'){
    currentChar++;
    objectHelper(json);
  }
  // cases: object, array, number, string, 
  return objectHelper(json);

  // var result;

  // for (var i = 0; i < json.length; i++) {
  //   if (json[i] === '{') {
  //     objectHelper(json.substring(i));
  //   }
  // }
};
