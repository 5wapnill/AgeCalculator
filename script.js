

function get()
{
    const day = document.getElementById('day').value;
    const month = document.getElementById('month').value;
    const year = document.getElementById('year').value;
    console.log(day, month, year);

    const presentDate = new Date().getDate();
    const presentMonth = new Date().getMonth();
    const presentYear = new Date().getFullYear();
    console.log(presentDate, presentMonth, presentYear);
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

