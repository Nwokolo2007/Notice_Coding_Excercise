let BASE_URL = "http://localhost:8080/";
let requestUrl = BASE_URL + "time";


function getRequestCurrentTime()
{
    fetch(requestUrl)
    .then(res =>{

        if(res.status !== 200)
        {
            throw new Error('Failed to fetch resource');
        }
        return res.json();
    })
    .then(resData =>{

        alert(resData["currentTime"]);
    })
}

loginHandler = () => {
    //event.preventDefault();

   let email = document.getElementById('email').value;
   let password = document.getElementById('password').value;

   let loginUrl = BASE_URL + "login";

    fetch(loginUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ 
          email:email, 
          password:password
       
      })
    })
      .then(res => {
        if (res.status === 422) {
          throw new Error('Validation failed.');
        }
        if (res.status !== 200 && res.status !== 201) {
          console.log('Error!');
          throw new Error('Could not authenticate you!');
        }
        return res.json();
      })
      .then(resData => {
        console.log(resData);
    
        localStorage.setItem('token', resData.token);
        localStorage.setItem('useremail', resData.Email);
        const remainingMilliseconds = 60 * 60 * 1000;
        const expiryDate = new Date(
          new Date().getTime() + remainingMilliseconds
        );
        localStorage.setItem('expiryDate', expiryDate.toISOString());
        this.setAutoLogout(remainingMilliseconds);
       
        window.location.href = "/src/views/profile.html";

      })
      .catch(err => {
        console.log(err);
      });
  };


  logoutHandler = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('expiryDate');
    localStorage.removeItem('useremail');
  };

  setAutoLogout = milliseconds => {
    setTimeout(() => {
      this.logoutHandler();
    }, milliseconds);
  };