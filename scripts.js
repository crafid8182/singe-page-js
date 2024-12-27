
let userName = '';
let posts = [];


function renderSignUp() {
  const rootDiv = document.getElementById('root');
  rootDiv.innerHTML = `
    <h1>Sign Up</h1>
    <form id="signupForm">
      <label for="name">Name:</label>
      <input type="text" id="name" placeholder="Enter your name" />

      <label for="email">Email:</label>
      <input type="email" id="email" placeholder="Enter your email" />

      <label for="password">Password:</label>
      <input type="password" id="password" placeholder="Enter your password" />

      <button type="button" onclick="handleSignUp()">Sign Up</button>
    </form>
  `;
}

function renderHomePage() {
  const rootDiv = document.getElementById('root');
  rootDiv.innerHTML = `
    <h1>Welcome, ${userName}!</h1>

    <h2>Create a Post</h2>
    <textarea id="postContent" placeholder="What's on your mind?"></textarea>
    <button type="button" onclick="handleCreatePost()">Post</button>
    
    <h3>Your Posts</h3>
    <ul id="postList"></ul>
  `;
  renderPostList();
}


function renderPostList() {
  const postListElement = document.getElementById('postList');
  // Clear the current list
  postListElement.innerHTML = '';

  // Loop through the posts array and create li elements
  posts.forEach((post) => {
    const postItem = document.createElement('li');
    postItem.textContent = post;
    postListElement.appendChild(postItem);
  });
}


function handleSignUp() {
  const nameInput = document.getElementById('name').value.trim();
  const emailInput = document.getElementById('email').value.trim();
  const passwordInput = document.getElementById('password').value.trim();

  if (nameInput && emailInput && passwordInput) {
    userName = nameInput; // Store user name for personalized greeting
    renderHomePage();     // Proceed to the home page
  } else {
    alert('Please fill out all fields');
  }
}


function handleCreatePost() {
  const postContent = document.getElementById('postContent').value.trim();
  if (postContent) {
    posts.push(postContent);
    // Clear the text area
    document.getElementById('postContent').value = '';
    // Re-render the posts list
    renderPostList();
  } else {
    alert('Post content cannot be empty');
  }
}

renderSignUp();
