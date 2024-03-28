const url=document.getElementById("url")
const btn_url=document.getElementById("btn_url")

btn_url.addEventListener("click",(evt)=>{
    // window.location="https://google.com" //Redirect to desired url
    // window.location.replace("https://youtube.com") //Replace the current URL to new one, this removes the old url from history
    // window.location.assign("https://w3schools.com") //Replace the current URL to new one, this maintains the old url from history
    // window.location.reload() //Refresh the current page
    // window.history.back() //Go to previous page on history
    // window.history.forward() //Go to next page on history
    // console.log(window.history.length) //Prints on console the size of history object
    // window.history.go(1) //Go straight to a specific page in history
    window.location=url.value
})