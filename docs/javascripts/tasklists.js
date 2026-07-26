(() => {
  const storageKey = `concert-tasklists:${window.location.pathname}`;
  const checkboxes = [...document.querySelectorAll('.task-list-item input[type="checkbox"]')];

  if (checkboxes.length === 0) return;

  let savedState = {};

  try {
    savedState = JSON.parse(window.localStorage.getItem(storageKey) || '{}');
  } catch {
    savedState = {};
  }

  checkboxes.forEach((checkbox, index) => {
    if (Object.hasOwn(savedState, index)) {
      checkbox.checked = savedState[index];
    }

    checkbox.addEventListener('change', () => {
      savedState[index] = checkbox.checked;
      window.localStorage.setItem(storageKey, JSON.stringify(savedState));
    });
  });
})();
