console.log("Main JS Loaded");
console.log("Teztecch Platform Initialized");


const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    let target = Number(counter.getAttribute("data-target"));

    let count = 0;

    let interval = setInterval(() => {

        count += Math.ceil(target / 100);

        if(count >= target){

            counter.innerText = target + "+";

            clearInterval(interval);

        }else{

            counter.innerText = count;

        }

    },20);

});
async function loadPosts() {
    try {
        const response = await fetch("https://teztecch-website.onrender.com/api/posts");
        const posts = await response.json();

        console.log(posts); // Check the fetched data
    } catch (error) {
        console.error("Error loading posts:", error);
    }
}

loadPosts();