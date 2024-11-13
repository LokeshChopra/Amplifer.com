// Function to redirect to UPI payment app
function redirectToUPI(amount) {
    const upiId = "7339706928@paytm";  // Your UPI ID
    const merchantName = "Amplifier Tournament";
    const transactionId = 'TX' + new Date().getTime();  // Unique transaction ID
    const note = "Tournament Entry Fee";
    
    // Construct the UPI deep link URL
    const upiURL = `upi://pay?pa=${7339706928}&pn={Ampifier gaming}&mc=1234&tid={76538290265}&amount=${amount}&tn=${note}&url=https://www.paytm.com/success`;
    
    // Try to redirect to UPI payment app (e.g., Google Pay, PhonePe, Paytm, etc.)
    window.location.href = upiURL;
  
    // Fallback: Show the QR code if UPI app is not installed
    generateQRCode(amount);
  }
  
  // Function to generate a QR code for UPI payment link
  function generateQRCode(amount) {
    const upiId = "7339706928@ybl";
    const transactionId = 'TX' + new Date().getTime();
    const note = "Tournament Entry Fee";
    const upiLink = `upi://pay?pa=${7339706928}&pn=Amplifier&mc=1234&tid=${transactionId}&amount=${amount}&tn=${note}&url=https://www.yoursite.com/success`;
    
    // Show QR code container
    document.getElementById("qrcode-container").style.display = "block";
    
    // Generate QR Code for UPI payment link
    var qrcode = new QRCode(document.getElementById("qrcode"), {
      text: upiLink,
      width: 256,
      height: 256
    });
  }
  
  // Function to close the QR code container
  function closeQRCode() {
    document.getElementById("qrcode-container").style.display = "none";
  }
  