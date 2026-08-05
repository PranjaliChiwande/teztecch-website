const form = document.getElementById("postForm");
const container = document.getElementById("postsContainer");

// Load all posts
async function loadPosts() {
    try {
        const response = await fetch("http://localhost:5000/api/posts");
        const posts = await response.json();

        container.innerHTML = "";

        posts.forEach(post => {
            container.innerHTML += `
                <div class="report-card">
                    <h3>${post.title}</h3>
                    <p>${post.content}</p>
                    <small>${post.category}</small>
                </div>
            `;
        });
    } catch (err) {
        console.error(err);
    }
}

// Add new report
form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const title = document.getElementById("title").value;
    const category = document.getElementById("category").value;
    const content = document.getElementById("content").value;

    const response = await fetch("http://localhost:5000/api/posts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            title,
            category,
            content
        })
    });

    if (response.ok) {
        alert("✅ Report Published Successfully!");

        form.reset();
        loadPosts();
    } else {
        alert("❌ Failed to publish report.");
    }
});

loadPosts();