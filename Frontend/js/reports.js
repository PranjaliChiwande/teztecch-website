console.log("Reports Page Loaded");


const container =
document.getElementById("reportsContainer");


async function loadReports(){


try{


const response =
await fetch(
    "https://teztecch-website.onrender.com/api/reports"
);


const reports =
await response.json();



container.innerHTML="";



reports.forEach(report=>{


container.innerHTML += `


<div class="report-card">


<h2>
${report.title}
</h2>


<p>
${report.content}
</p>


<span>
${report.category}
</span>


<br>


<a href="report2.html?id=${report._id}">
Read Full Report →
</a>



</div>


`;


});



}
catch(error){

console.log(error);

}


}



loadReports();