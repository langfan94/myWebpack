import '../css/index.scss'
function component() {
    var element = document.createElement('div');
    // console.log(_);
    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    console.log(111)
    console.log(222)
    return element;
  }
  
  document.body.appendChild(component());