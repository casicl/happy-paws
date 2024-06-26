const loginFormHandler = async (event) => {
    event.preventDefault();
  
    // login form values
    const userEmail = document.querySelector("#email").value.trim();
    const userPass = document.querySelector("#password").value.trim();
  
    if (userEmail && userPass) {
      console.log("hello")
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ email: userEmail, password: userPass }),
        headers: { 'Content-Type': 'application/json' },
      });
  
       if (response.ok) {
        console.log(response, "login response")
         document.location.replace('/');
       } else {
         alert(response.statusText);
       }
    }
  };
  
  const signupFormHandler = async (event) => {
    event.preventDefault();
    console.log("clicked")
    const username = document.querySelector("#signup-name").value.trim();
    const useremail = document.querySelector("#signup-email").value.trim();
    const userpassword = document.querySelector("#create-password").value.trim();
  
    if (username && email && password) {
      const response = await fetch('/api/users/signup', {
        method: 'POST',
        body: JSON.stringify({ name: username, email: useremail, password: userpassword }),
        headers: { 'Content-Type': 'application/json' },
      });
  
       if (response.ok) {
         document.location.replace('/');
       } else {
         alert(response.statusText);
       }
    }
  };
  
  document
    .querySelector(".login-form")
    .addEventListener('submit', loginFormHandler);
  
  document
    .querySelector("#signup")
    .addEventListener('click', signupFormHandler);
  