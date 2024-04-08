// handles the functionality for the posts 
function post() {
    var inputText = document.getElementById("post-input").value;
    if (inputText.trim() !== "") {
        var postContainer = document.getElementById("posts-container");
        var postElement = document.createElement("div");
        postElement.classList.add("post");
        postElement.textContent = inputText;
        postContainer.appendChild(postElement);
        document.getElementById("post-input").value = "";
    }
}

// open the navigation bar when prompted 
function openNav() {
    document.getElementById("sidebar").style.width = "250px"; // Adjust width as needed
    document.getElementById("container").style.marginLeft = "250px"; // Adjust margin as needed
    document.body.style.backgroundColor = "rgba(0, 0, 0, 0.4)";
}

// close the navigation bar when prompted 
function closeNav() {
    document.getElementById("sidebar").style.width = "0";
    document.getElementById("container").style.marginLeft = "0";
    document.body.style.backgroundColor = "rgb(52, 51, 51)";
}

// function to handle button click
function handleButtonClick(post) {
    // Redirect to another page with the post information in the URL
    window.location.href = "/viewpost?post=" + encodeURIComponent(post);
}


