const copy = () => {
    /* Get the text field */
    var copyText = document.getElementById("password");
    // var pText = document.getElementById('notification').innerHTML
    var d1 = document.getElementById('notification');

    if (d1) {
        d1.insertAdjacentHTML('afterend', '<div id="notification-success">copied</div>');
    }
  
    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /*For mobile devices*/
  
    /* Copy the text inside the text field */
    document.execCommand("copy");
  
    /* Alert the copied text */
    // pText += "Paragraph changed!"
    
  } 