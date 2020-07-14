const tideD = document.getElementById('tide-display');

// Send GET to API to retrieve tides
const purple = async function getTides() {
    const res = await fetch('https://tidesandcurrents.noaa.gov/api/datagetter?date=today&station=8729840&product=water_level&datum=STND&time_zone=lst_ldt&units=english&format=json');
    const data = await res.json();
    return data;
}

getTides().then(data => console.log(data));
tideD = purple.station;


// fetch('https://tidesandcurrents.noaa.gov/api/datagetter?date=today&station=8729840&product=water_level&datum=STND&time_zone=lst_ldt&units=english&format=json').then(function (response) {
//     console.log('Spoonbills run in packs', response);

// }).catch(function (err) {
//     console.warn('something went wrong', err);
// });