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

function openNav() {
    document.getElementById("sidebar").style.width = "250px"; // Adjust width as needed
    document.getElementById("container").style.marginLeft = "250px"; // Adjust margin as needed
    document.body.style.backgroundColor = "rgba(0, 0, 0, 0.4)";
}

function closeNav() {
    document.getElementById("sidebar").style.width = "0";
    document.getElementById("container").style.marginLeft = "0";
    document.body.style.backgroundColor = "rgb(52, 51, 51)";
}

function togglePostBox() {
    var postBox = document.getElementById("posting-box");
    postBox.style.display = postBox.style.display == "none" ? "block" : "none";
}
