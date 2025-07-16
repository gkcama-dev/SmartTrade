async function verifyAccount() {

    const verificationCode = document.getElementById("verificationCode").value;

    //JS Object
    const verification = {
        verificationCode: verificationCode
    };

    //JS -> JSON
    //JSON.stringify() converts a JavaScript object into a JSON string
    const verificationJson = JSON.stringify(verification);

    const response = await fetch(
        "VerifyAccount", //url 
        {
            method: "POST",
            body: verificationJson,
            header: {
                "Content-Type": "application/json"
            },
        }
    );

    if (response.ok) { //success

        const json = await response.json();

        //json.status is true or false
        if (json.status) { //when status is true
            window.location = "index.html"; // Redirect to index page

        } else { //when status is false

            //when email not found in session
            if (json.message === "1") { //Email not found = 1
                window.location = "sign-in.html"; // Redirect to sign-in page
            } else {
                document.getElementById("message").innerHTML = json.message; // custom message
            }

        }

    } else {
        // custom message
        document.getElementById("message").innerHTML = "Verification failed. Please try again.";
    }
}
