/*
  el = where the value will be writed
  value = new value to write
  status = this is the new status of the button
*/

export var changeButtonStatus = function (button, el, value="", status="Show") {
  //debugger
  if(status == "Running"){ // Running -> Runnning
    //console.log("mudou")
    button.innerHTML = "Running";
    button.className = 'button--state-running';
  }
  else if(status == "Show"){ // Show -> Hide
    button.innerHTML = "Hide";
    el.style.visibility = "visible";
    button.className = 'button--state-hidden';
    el.innerHTML = value;
    /*if(value != ""){
      el.innerHTML = value;
    }*/
  }
  else{ // status == "Hide" // Hide -> Show
    button.innerHTML = "Show";
    button.className = 'button--state-show';
    el.style.visibility = "hidden";
  }
};
