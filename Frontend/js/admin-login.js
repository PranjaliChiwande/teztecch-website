async function login(){


    const email =
    document.getElementById("email").value;


    const password =
    document.getElementById("password").value;



    const response = await fetch(
        "https://teztecch-website.onrender.com/api/auth/login",
        {

            method:"POST",

            headers:{
                "Content-Type":"application/json"
            },

            body:JSON.stringify({

                email,
                password

            })

        }
    );



    const data = await response.json();



    if(response.ok){


        localStorage.setItem(
            "admin",
            data.name
        );


        window.location.href="admin.html";


    }
    else{


        document.getElementById("message").innerText =
        data.message;


    }


}