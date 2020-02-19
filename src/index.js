document.addEventListener("DOMContentLoaded", () =>
{
  const submitButton = document.querySelector("form input[type=\"submit\"]");
  submitButton.addEventListener("click", function(event)
  {
    event.preventDefault();
    const ul = document.getElementById("list");
    const li = document.createElement("li");
    deleteButton = document.createElement("button");
    deleteButton.innerHTML = 'X';
    li.innerHTML = document.getElementById("new-task-description").value;
    li.append(deleteButton);
    ul.append(li);
  });
  
  let button = document.querySelector("button");
  button.addEventListener("click", function(event)
  {
    if (event.target.nodeName)
  });
});
