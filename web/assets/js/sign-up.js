/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
 */
async function signUp() {

    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

   const user = {
    firstName: firstName,
    lastName: lastName, 
    email: email,
    password: password
   };

   const userJson = JSON.stringify(user);

   const response = await fetch(
      "SignUp", //url
      {
        method:"POST",
        body:userJson,
        header:{
            "Content-Type":"application/json"
        }
      }
   );

}

