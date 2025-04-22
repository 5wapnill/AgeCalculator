document.addEventListener('DOMContentLoaded', () => {
    const main = document.querySelector('main');
    
    const btn = document.querySelector(".button");
    btn.addEventListener("click", calculateAge);
    
    let close = document.querySelector("#x");
    close.addEventListener("click",()=>{
        ansContainer.classList.toggle('hide');
    main.classList.toggle('blur');

    })
});

function calculateAge() {
    const day = parseInt(document.getElementById('day').value);
    const month = parseInt(document.getElementById('month').value);
    const year = parseInt(document.getElementById('year').value);
    
    // Get current date
    const today = new Date();
    const currentYear = today.getFullYear();
    const currentMonth = today.getMonth() + 1;
    const currentDay = today.getDate();
    
    // Validate input
    if (!isValidDate(day, month, year, currentYear)) {
        return;
    }
    
    const main = document.querySelector('main');
    ansContainer.classList.toggle('hide');
    main.classList.toggle('blur');

    // Calculate age
    let years = currentYear - year;
    let months = currentMonth - month;
    let days = currentDay - day;

    // Adjust for dates
    if (currentMonth < month || (currentMonth === month && currentDay < day)) {
        years--;
        months = 12 + currentMonth - month;
        
        if (currentDay < day) {
            months--;
            const lastMonth = new Date(currentYear, currentMonth - 1, 0);
            days = lastMonth.getDate() - day + currentDay;
        }
    }

    // Adjust for remaining negative days
    if (days < 0) {
        months--;
        const lastMonth = new Date(currentYear, currentMonth - 1, 0);
        days += lastMonth.getDate();
    }

    // Handle edge case for months
    if (months < 0) {
        years--;
        months += 12;
    }

    // Display results
    displayResults(years, months, days);
}

function isValidDate(day, month, year, currentYear) {
    // Check for empty or invalid inputs
    if (isNaN(day) || isNaN(month) || isNaN(year)) {
        alert("Please enter valid numbers!");
        return false;
    }

    // Check ranges
    if (year < 1900 || year > currentYear) {
        alert("Please enter a valid year between 1900 and " + currentYear);
        return false;
    }

    if (month < 1 || month > 12) {
        alert("Please enter a valid month (1-12)");
        return false;
    }

    // Check days in month
    const daysInMonth = new Date(year, month, 0).getDate();
    if (day < 1 || day > daysInMonth) {
        alert(`Please enter a valid day (1-${daysInMonth}) for the selected month`);
        return false;
    }

    // Check if date is in future
    const today = new Date();
    const birthDate = new Date(year, month - 1, day);
    if (birthDate > today) {
        alert("Birth date cannot be in the future!");
        return false;
    }

    return true;
}

function displayResults(years, months, days) {
    document.getElementById("dyear").innerHTML = years + " years";
    document.getElementById("dmonth").innerHTML = months + " months";
    document.getElementById("ddate").innerHTML = days + " days";
}

