//select DOM elements
const inputName = document.getElementById('username');
const saveBtn = document.getElementById('save-btn');
const clearBtn = document.getElementById('clear-btn');
const displayName = document.getElementById('display-name');
const welcomeHeading = document.getElementById('welcome');

//bonus greeting depending on time of day
function getGreeting() {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good Morning';
    if (hour < 18) return 'Good Afternoon';
    return 'Good Evening';
}

//greeting and name display
function showName(name) {
    if (name) {
        const greeting = getGreeting();
        displayName.textContent = `${greeting}, ${name} =)`;
        welcomeHeading.textContent = `${greeting}, ${name} =)`;
    } else {
        displayName.textContent = '';
        welcomeHeading.textContent = 'Welcome User!';
    }
}

//load name from the localStorage
window.addEventListener('DOMContentLoaded', () => {
    const savedName = localStorage.getItem('username');
    if (savedName) {
        showName(savedName);
    }
});


//save name to localStorage and alert to save name if not entered
saveBtn.addEventListener('click', () => {
    const name = inputName.value.trim();
    if (name) {
        localStorage.setItem('username', name);
        showName(name);
        inputName.value = '';
    } else {
        alert('Please enter your name before saving.');
    }
});

//clear saved name
clearBtn.addEventListener('click', () => {
    localStorage.removeItem('username');
    showName(null);
    inputName.value = '';
});