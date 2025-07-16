async function sigIn() {

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const SignIn = {
        email: email,
        password: password
    };

    const signInJson = JSON.stringify(SignIn);

    const response = await fetch(
        "SignIn",
        {
            method: "POST",
            body: signInJson,
            header: {
                "Content-Type": "application/json"
            },
        }
    );

    if (response.ok) { //success
        const json = await response.json();
        if (json.status) { //if true

            if (json.message === "1") { //1 = Not verified
                window.location = "verify-account.html"; // Redirect to verify account page

            } else {//verified
                window.location = "index.html"; // Redirect to home page
            }

        } else { //when status is false
            // custom message
            const msg = document.getElementById("message")
            msg.innerHTML = json.message;
        }
    } else {
        document.getElementById("message").innerHTML = "Sign In failed. Please try again.";
    }


}


