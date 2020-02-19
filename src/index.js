document.addEventListener("DOMContentLoaded", () =>
{
  const button = document.querySelector("form input[type=\"submit\"]");
  button.addEventListener("click", function(event)
  {
    event.preventDefault();
    const ul = document.getElementById("list");
    const li = document.createElement("li");
    li.innerText = document.getElementById("new-task-description").innerText;
  });
});
