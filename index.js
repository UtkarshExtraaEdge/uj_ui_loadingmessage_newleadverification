const fetchData = () => {
  fetch('https://reqres2.in/api/users/2')
      .then(response => response.json())
      .then(data => {
          document.querySelector(".loader").style.display = "none";
          document.querySelector("h2").style.display = "none";
          document.querySelector(".Success").style.display = "flex";
      })
      .catch((error) => {
          document.querySelector(".loader").style.display = "none";
          document.querySelector("h2").style.display = "none";
          document.querySelector(".failure").style.display = "flex";
      })
}