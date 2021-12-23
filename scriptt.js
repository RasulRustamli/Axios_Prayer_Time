
async function getNamazTimes(inputdate) {
    const res = await axios.get('https://api.aladhan.com/v1/calendar?latitude=40.409264&longitude=49.867092&method=2&month=4&year=2017');
    let lorem = (res.data.data);
    var reverseDate = inputdate.split("-").reverse().join("-")
    for (const item of lorem) {
        let jsonDate = (item.date.gregorian.date);
        if(reverseDate===`${jsonDate}`){
            console.log(item.timings)
            break;
        }

    }
}
function myFunction(){
    var dataa=document.getElementById("date").value
    getNamazTimes(dataa)
}
//esad odu consolda getirir :D








