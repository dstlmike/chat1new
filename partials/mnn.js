var stateHandle = function() {
         inputField.autofocus = true;
inputtt = "true";
        inputt.disabled = true;
     setTimeout(() => {
       inputtt = "false";
        inputt.disabled = false;
      //inputField.autofocus = true;
      }, 6000);
}
module.exports = stateHandle;