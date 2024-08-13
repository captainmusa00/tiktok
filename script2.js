document.getElementById("getOtpButton").addEventListener("click", function(event){
    event.preventDefault();

    const phoneNumber = document.getElementById("phoneNumber").value;

    if (phoneNumber) {
        alert("OTP sent to " + phoneNumber);

        // Show OTP input field
        document.getElementById("otpSection").style.display = 'block';
        document.getElementById("phoneSection").style.display = 'none';
    } else {
        alert("Please enter a valid phone number.");
    }
});

document.getElementById("verifyOtpButton").addEventListener("click", function(event){
    event.preventDefault();

    const otp = document.getElementById("otp").value;

    if (otp === "123456") { // Simulate OTP verification
        alert("OTP verified successfully");

        // Show success message
        document.getElementById("successMessage").style.display = 'block';
        document.getElementById("otpSection").style.display = 'none';
    } else {
        alert("Invalid OTP. Please try again.");
    }
});
