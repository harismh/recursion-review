// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };
//document.body, element.childNodes, and element.classList


// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  var result = [];
  
  var helper = function(className, resultList, node) {
    var children = node.childNodes;
    var classList = node.classList;
    

    if (!children) { // base case : solo node with no children
      if (classList && classList.contains(className)) { 
        resultList.push(node); 
      }
    } else if (classList && classList.contains(className)) {
      resultList.push(node);
    } 
    for (var key in children) {
      helper(className, resultList, children[key]);
    }
  };

  helper(className, result, document.body);
  return result;
};
