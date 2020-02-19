document.addEventListener("DOMContentLoaded", () =>
{
  let button;
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
    document.getElementById("new-task-description").value = '';
    
    buttons = document.querySelectorAll("button");
    buttons.addEventListener("click", function(event)
    {
      event.target.parentNode.remove();
    });
  });
});
