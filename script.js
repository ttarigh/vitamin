const form = document.getElementById('audioForm');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent default form submission

  const checkedBoxes = form.querySelectorAll('input[type="checkbox"]:checked');

  checkedBoxes.forEach(checkbox => {
    const audio = new Audio(checkbox.value);
    audio.play();
  });
});
