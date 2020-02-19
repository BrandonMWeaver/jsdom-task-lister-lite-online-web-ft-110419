document.addEventListener("DOMContentLoaded", () =>
{
  const button = document.querySelector("form input[type=\"submit\"]");
  button.addEventListener("click", function(event)
  {
    event.preventDefault();
    const ul = document.getElementById("list");
    ul.append(document.createElement("li"));
  });
});
