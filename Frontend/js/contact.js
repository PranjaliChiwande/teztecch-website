console.log("Contact JS Loaded");


const contactForm = document.getElementById("contactForm");


contactForm.addEventListener("submit", async function(e){

    e.preventDefault();


    const contactData = {

        name: document.getElementById("name").value,

        email: document.getElementById("email").value,

        company: document.getElementById("company").value,

        message: document.getElementById("message").value

    };


    try {


        const response = await fetch(
            "http://localhost:5000/api/contact",
            {
                method:"POST",

                headers:{
                    "Content-Type":"application/json"
                },

                body:JSON.stringify(contactData)

            }
        );


        const data = await response.json();


        alert("Thank you! Your message has been sent successfully.");


        contactForm.reset();


        console.log(data);


    }

    catch(error){

        console.error(error);

        alert("Something went wrong. Please try again.");

    }


});