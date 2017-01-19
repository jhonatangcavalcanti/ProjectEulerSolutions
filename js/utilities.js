export var changeButtonStatus = function (button, el, value="", status="Show") {
  //debugger

  if(status == "Running"){ // Running -> Runnning
    console.log("mudou")
    button.innerHTML = "Running";
  }
  else if(status == "Show"){ // Show -> Hide
    button.innerHTML = "Hide";
    el.style.visibility = "visible";
    if(value != ""){
      el.innerHTML = value;
    }
  }
  else{ // status == "Hide" // Hide -> Show
    button.innerHTML = "Show";
    el.style.visibility = "hidden";
  }
};
