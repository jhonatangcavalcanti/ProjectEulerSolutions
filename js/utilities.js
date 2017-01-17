export var changeButtonStatus = (button, el, value) => {
  if(button.innerHTML == "Show"){
    button.innerHTML = "Hide";
    el.innerHTML = value;
  }
  else{
    button.innerHTML = "Show";
    el.innerHTML = "";
  }
};
