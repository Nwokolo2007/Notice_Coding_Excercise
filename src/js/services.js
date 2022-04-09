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
