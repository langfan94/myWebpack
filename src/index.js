import _ from 'lodash'
import '../css/index.scss'
function component() {
    var element = document.createElement('div');
  
    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    console.log(111)
    return element;
  }
  
  document.body.appendChild(component());