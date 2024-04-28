
const form = document.getElementById("audioForm");
const sub = document.getElementById("submitButton");
const resetButton = document.getElementById("resetButton");

form.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent default form submission
  sub.style.display = "none";
  document.body.style.backgroundColor = "blue";
  document.body.style.color = "blue";

  const checkedBoxes = form.querySelectorAll('input[type="checkbox"]:checked');

  const allCheckboxes = form.querySelectorAll('input[type="checkbox"]');
      allCheckboxes.forEach((box) => {
        if (!box.checked) {
          box.style.display = "none";
        }
      });
  checkedBoxes.forEach((checkbox) => {
    const audio = new Audio(checkbox.value);
    const label = checkbox.parentElement; // Get the label element
    label.style.backgroundColor = "yellow";  
    // label.style.color = "black";  
    audio.play();

    // Stop audio after 1 minute (60 seconds)
    setTimeout(() => {
      sub.style.display = "block";
      
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      
      label.style.backgroundColor = "transparent";  
     
      const allCheckboxes = form.querySelectorAll('input[type="checkbox"]');
      allCheckboxes.forEach((box) => {
        if (!box.checked) {
          box.style.display = "inline-flex";
        }
      });
      audio.pause();
      checkbox.checked = false;
      resetButton.click();
    }, 6 * 1000); // 60 seconds * 1000 milliseconds
  });
});

