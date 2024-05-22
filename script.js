
const day = document.getElementById("day").value;
const month = document.getElementById("month").value;
const year = document.getElementById("year").value;

const tDate = new Date;




function Date() {
    console.log(`${day} ${month} ${year}`);
    if (
        !((day <= 31 && day >= 1 && day != null)
        &&
        !(month <= 12 && month >= 1 && month != null)
        &&
        !(year <= tDate.getFullYear && year >= 0 && year != null)))
    {
        alert("Please enter valid date !");
    }
    else
    {
        
    }

}
