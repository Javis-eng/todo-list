
const toDoList = document.getElementById('toDoList');
const completedList = document.getElementById('completedList');
const form = document.querySelector('form');
const modeBtn = document.getElementById('modeBtn');
const moonSvg =  `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
<path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
</svg>`
const sunSvg = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
<path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
</svg>`

//add tasks to "toDoList" and "completedList"
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const textarea = document.querySelector('textarea');
    const taskText = textarea.value.trim();
    if (taskText) {
        const listItem = document.createElement('li');
        listItem.textContent = taskText;
        listItem.className = 'toDoItem lightMode';
        toDoList.appendChild(listItem);
        const button = document.createElement('button');
        button.textContent = 'Done';
        button.className = 'doneBtn lightMode';
        listItem.appendChild(button);
        button.addEventListener('click', () => {
            listItem.classList.toggle("toDoItem");
            listItem.classList.toggle("completedItem");
            if (listItem.classList.contains("completedItem")) {
                completedList.appendChild(listItem);
            } else {
                toDoList.appendChild(listItem);
            }
            button.classList.toggle("doneBtn");
            button.classList.toggle("undoBtn");
            if (button.classList.contains("undoBtn")) {
                button.textContent = 'Undo';
            } else {
                button.textContent = 'Done';
            }
        });
        textarea.value = ''; // Clear the textarea after adding the task
    }
})

//change between light and dark mode
modeBtn.addEventListener('click', () => {
    document.body.classList.toggle("darkMode");
    isDark = document.body.classList.contains("darkMode");
    modeBtn.innerHTML = isDark ? sunSvg : moonSvg;
});

