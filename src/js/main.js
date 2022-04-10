
const titles = ["Notice Coding Excercise","Another title"];

function changeTitleHandler()
{
    
   let currentTitle =  document.getElementById("title");
    let currentIndex = 0;
    if(currentTitle == null)
    {
        alert("The title tag does not exist on the DOM");
    }
   
    let title = currentTitle.innerHTML;
    currentIndex = titles.indexOf(title);
    currentIndex = ((currentIndex +1) >= titles.length) ? 0: currentIndex+1;

    currentTitle.innerHTML = titles[currentIndex];

    return;
}

function setUserName()
{

    let userName = document.getElementById("username").value;
    if(userName === "")
    {
        alert("please enter a user name");
        return false;
    }
    localStorage.setItem("userName",userName);
    let display =  document.getElementById("display");

      if(display)
    {
        display.innerHTML = userName;
    }
    return false;
}

 window.onload =  function getUserName()
{
    let userEmail =  localStorage.getItem('useremail');
    let userName =  localStorage.getItem("userName");
    let display =  document.getElementById("display");
    let loginButton = document.getElementById('login');
    if(display)
    {
        display.innerHTML = userName;
    }
    if(userEmail)
    {
        loginButton.style.visibility = 'hidden';
        document.getElementById('profileName').innerHTML = "Welcome " + userEmail;
    }
    else{
        loginButton.style.visibility = 'visible';
    }
   
    return;
}


