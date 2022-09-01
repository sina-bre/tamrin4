const input = document.querySelector('.input');
const p = document.querySelector('.p');

function debounce(func, wait, immediate) {
    var timeout;
  
    return function executedFunction() {
      var context = this;
      var args = arguments;
          
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
  
      var callNow = immediate && !timeout;
      
      clearTimeout(timeout);
  
      timeout = setTimeout(later, wait);
      
      if (callNow) func.apply(context, args);
    };
};



let highlight = debounce(function(){
    let inputValue = input.value;
    const regex = new RegExp(inputValue, "g");
    console.log(regex);
    let text = p.textContent.replaceAll(regex , `<mark>${inputValue}</mark>`);
    p.innerHTML = text;
},250)

input.addEventListener('input' , highlight)