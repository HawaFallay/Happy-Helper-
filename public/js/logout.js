console.log("Logout js is connected");

const logout = async (event) => {
    document.cookie = "loginToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    console.log("Logout button is working")
    location.reload();
  }
  
  const logoutBtn = document.getElementById("logout");
  logoutBtn.addEventListener("click",logout)