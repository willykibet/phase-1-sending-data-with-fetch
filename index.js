// Add your code here
function submitData(myname, myemail) {
  fetch(`http://localhost:3000/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      accept: "application/json",
    },
    body: JSON.stringify({
      name: myname,
      email: myemail,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("span2").textContent = data.id;
      document.getElementById("span").textContent = "Unauthorized Access";
    })
    .catch((error) => {
      console.error("Unauthorized Access", error);
      document.getElementById("span").textContent = "Unauthorized Access";
    });
}
