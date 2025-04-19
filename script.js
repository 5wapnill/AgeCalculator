document.addEventListener('DOMContentLoaded', () => {
    let btn = document.querySelector(".button");
    btn.addEventListener("click",() => {
        const day = document.getElementById('day').value;
        const month = document.getElementById('month').value;
        const year = document.getElementById('year').value;
        console.log(day, month, year);

        let present = new Date;
        const presentDate = present.getDate();
        const presentMonth = present.getMonth();
        const presentYear = present.getFullYear();
        console.log(presentDate, presentMonth, presentYear);
    
        validation(day,month,year,presentYear);
        birthYears(year,presentYear);
        birthMonths(month, presentMonth);
        birthDates(day, presentDate);
    })
})



function validation(day, month, year, presentYear) {

    if (
        !((day <= 31 && day >= 1 && day != null)
            &&
            (month <= 12 && month >= 1 && month != null)
            &&
            (year <= presentYear && year >= 0 && year != null))) {
        alert("Please enter valid date !");
    }
}

function birthYears(year, presentYear) {
    console.log("nyear called");


    let birthYear = presentYear - year;
    console.log(birthYear);
    document.getElementById("dyear").innerHTML = birthYear + " years";

}

function birthMonths(month, presentMonth) {

    let birthMonth = presentMonth - month + 1;
    console.log(birthMonth);
    document.getElementById("dmonth").innerHTML = Math.abs(birthMonth) + " months";

}

function birthDates(day, presentDate) {

    let birthDate = presentDate - day;
    console.log(birthDate);
    document.getElementById("ddate").innerHTML = Math.abs(birthDate) + " days";
}


// function get() {

//     const day = document.getElementById("day").value;
//     const month = document.getElementById("month").value;
//     const year = document.getElementById("year").value;

//     const present = new Date;
//     console.log(present);
//     const presentDay = present.getDate();
//     console.log(presentDay);
//     console.log(`${day} ${month} ${year}`);

//     validation(day, month, year, present);
//     // nyear(year, present);
//     // nmonth(month, present);
// }

// function validation(day, month, year, present) {

//     if (
//         !((day <= 31 && day >= 1 && day != null)
//             &&
//             (month <= 12 && month >= 1 && month != null)
//             &&
//             (year <= present.getFullYear && year >= 0 && year != null))) {
//         alert("Please enter valid date !");
//     }
// }

// // function nyear(year, present) {
// //     console.log("nyear called");


// //     let dYear = present.getFullYear() - year;
// //     console.log(dYear);
// //     document.getElementById("dyear").innerHTML = dYear;

// // }

// // function nmonth(month, present) {
// //     console.log("nmonth called");


// //     let dmonth = present.getMonth() - month;
// //     console.log(dmonth);
// //     document.getElementById("dmonth").innerHTML = dmonth;

// // }

