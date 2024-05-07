const button = document.getElementById('datePickerButton');
const input = document.getElementById('dateInput');

button.addEventListener('click', () => {
  input.click();
});

input.addEventListener('change', () => {
  const selectedDate = input.value;
  console.log(`Selected date: ${selectedDate}`);
});