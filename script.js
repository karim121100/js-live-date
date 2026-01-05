const today = new Date();
const options = { year: 'numeric', month: 'long', day: 'numeric' };
document.getElementById("date").textContent =
  today.toLocaleDateString(undefined, options);
