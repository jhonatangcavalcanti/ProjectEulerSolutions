export var changeButtonStatus = (button, el, value=0) => {
  if(button.innerHTML == "Show"){
    button.innerHTML = "Hide";
    el.style.visibility = "visible";
    if(value != 0){
      el.innerHTML = value;
    }
  }
  else{
    button.innerHTML = "Show";
    el.style.visibility = "hidden";
  }
};
