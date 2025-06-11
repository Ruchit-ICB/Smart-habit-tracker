document.addEventListener('DOMContentLoaded', () => {
  const habitForm = document.getElementById('habit-form');
  const habitInput = document.getElementById('habit-name');
  const habitList = document.getElementById('habit-list');

  let habits = JSON.parse(localStorage.getItem('habits')) || [];

  function renderHabits() {
    habitList.innerHTML = '';
    habits.forEach((habit, index) => {
      const li = document.createElement('li');
      li.innerHTML = `
        ${habit}
        <button onclick="deleteHabit(` + index + `)">❌</button>
      `;
      habitList.appendChild(li);
    });
  }

  function deleteHabit(index) {
    habits.splice(index, 1);
    localStorage.setItem('habits', JSON.stringify(habits));
    renderHabits();
  }

  habitForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const habit = habitInput.value.trim();
    if (habit) {
      habits.push(habit);
      localStorage.setItem('habits', JSON.stringify(habits));
      habitInput.value = '';
      renderHabits();
    }
  });

  window.deleteHabit = deleteHabit;

  renderHabits();
});