document.addEventListener('DOMContentLoaded', () => {
  // Example of adding interactivity
  const buttons = document.querySelectorAll('.btn');
  buttons.forEach((button) =>
    button.addEventListener('click', () => {
      alert('Button clicked!');
    })
  );
});
