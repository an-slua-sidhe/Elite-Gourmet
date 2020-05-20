function sendMail(contactForm) {
    emailjs.send("gmail", "gourmet", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.email.value,
        "request_topic": contactForm.radio.value,
        "request_message": contactForm.message.value
    }).then(
        function (response) {
            console.log("Email Sent!", response);
            swal({
                title: "Your Email was Sent!",
                text: "Thank you for contacting Elite Gourmet. \n We will be in touch with you shortly.",
                icon: "success",
                button: "Return to Site",
              });
        },
        function (error) {
            console.log("Email Not Sent...", error);
            swal({
                title: "Ooops!",
                text: "We're sorry, there was an error! \n Please try again.",
                icon: "error",
                button: "Try Again",
              });
        });
    return false;
}