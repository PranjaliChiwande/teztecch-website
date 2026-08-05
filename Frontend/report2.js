console.log("Report JS Loaded");


const container = document.getElementById("reportContainer");


const params = new URLSearchParams(window.location.search);

const id = params.get("id");

console.log("Report ID:", id);
async function loadReport(){

    try{

        const response = await fetch(
            `http://localhost:5000/api/posts/${id}`
        );


        const report = await response.json();
        console.log("Report Data:", report);


       container.innerHTML = `

<div class="report-hero">


<span class="report-category">
${report.category}
</span>


<h1>
${report.title}
</h1>


<p class="report-date">
${new Date(report.createdAt).toDateString()}
</p>


</div>


<div class="report-content">


<p>
${report.content}
</p>


</div>


`; 

    }
    catch(error){

        console.log(error);

        container.innerHTML =
        "<h2>Failed to load report</h2>";

    }

}


loadReport();