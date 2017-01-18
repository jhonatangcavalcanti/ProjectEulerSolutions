export var changeButtonStatus = (button, el, value="") => {
  if(button.innerHTML == "Show"){
    button.innerHTML = "Hide";
    el.style.visibility = "visible";
    if(value != ""){
      el.innerHTML = value;
    }
  }
  else{
    button.innerHTML = "Show";
    el.style.visibility = "hidden";
  }
};
