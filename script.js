function more()
{
    const day = document.getElementById("day").value;
    const month = document.getElementById("month").value;
    const year = document.getElementById("year").value;

<<<<<<< exp
    const tDate = new Date;
    console.log(`${day} ${month} ${year}`);     

=======
const day = document.getElementById("day").value;
const month = document.getElementById("month").value;
const year = document.getElementById("year").value;

const tDate = new Date;

function Date()
{
    console.log(`${day} ${month} ${year}`);
>>>>>>> main
    if (
        !((day <= 31 && day >= 1 && day != null)
            &&
            (month <= 12 && month >= 1 && month != null)
            &&
            (year <= tDate.getFullYear && year >= 0 && year != null)))
    {
        alert("Please enter valid date !");
    }
}
