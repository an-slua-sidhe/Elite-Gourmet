function sendMail(contactForm) {
    emailjs.send("gmail", "gourmet", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.email.value,
        "request_topic": contactForm.radio.value,
        "request_message": contactForm.message.value
    }).then(
        function (response) {
            console.log("Email Sent!", response);
        },
        function (error) {
            console.log("Email Not Sent...", error);
        });
    return false;
}