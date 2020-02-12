var ssid = document.getElementById('ssid');
var encryption = document.getElementById('encryption');
var pass = document.getElementById('pass');
var hidden = document.getElementById('hidden')
var qrcode = new QRCode(document.getElementById('qrcode'));

function generateQR() {
  var qrssid = ssid.value;
  var qrencryption = encryption.value;
  var qrpass = pass.value;
  var qrhidden = hidden.checked;

  var wifi = 'WIFI:S:' + qrssid +
              ';T:' + qrencryption +
              ';P:' + qrpass +
              ';H:' + qrhidden;

  qrcode.makeCode(wifi);
}