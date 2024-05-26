


function more() {

    const day = document.getElementById("day").value;
    const month = document.getElementById("month").value;
    const year = document.getElementById("year").value;

    const tDate = new Date;
    console.log(`${day} ${month} ${year}`);

    validation(day, month, year, tDate);
    nyear(year, tDate);
    nmonth(month, tDate);
}

function validation(day, month, year, tDate) {

    if (
        !((day <= 31 && day >= 1 && day != null)
            &&
            (month <= 12 && month >= 1 && month != null)
            &&
            (year <= tDate.getFullYear && year >= 0 && year != null))) {
        alert("Please enter valid date !");
    }
}

function nyear(year, tDate) {
    console.log("nyear called");


    let dYear = tDate.getFullYear() - year;
    console.log(dYear);
    document.getElementById("dyear").innerHTML = dYear;

}

function nmonth(month, tDate) {
    console.log("nmonth called");


    let dmonth = tDate.getMonth() - month;
    console.log(dmonth);
    document.getElementById("dmonth").innerHTML = dmonth;

}

