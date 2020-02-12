var ssid = document.getElementById('ssid');
var encryption = document.getElementById('encryption');
var pass = document.getElementById('pass');
var hidden = document.getElementById('hidden')
var qrcode = new QRCode(document.getElementById('qrcode'));

encryption.addEventListener('change',function() {nopassHide()}, false);
document.getElementById('generate').addEventListener('click',function(){checkRequired()},false);

//Generates QR Code whit the data pulled from the form
function generateQR() {
  var qrssid = ssid.value;
  var qrencryption = encryption.value;
  var qrpass = pass.value;
  if(qrpass === "nopass") {qrpass=""}
  var qrhidden = hidden.checked;

  var wifi = 'WIFI:S:' + qrssid +
              ';T:' + qrencryption +
              ';P:' + qrpass +
              ';H:' + qrhidden;

  qrcode.makeCode(wifi);
}

//Checks if the ssid and pass inputs are valid, meaning they have something in them
function checkRequired() {
  if(ssid.validity.valid === true && pass.validity.valid === true){
    generateQR()
  }
}

function nopassHide() {
  var showpass = document.getElementById('showpass');
  if (encryption.value === "nopass") {
    showpass.style.display = 'none';
    pass.required = false
  }
  else{
    showpass.style.display = 'initial';
    pass.required = true;
  }
}