fetch('https://tidesandcurrents.noaa.gov/api/datagetter?date=latest&station=8725110&product=air_temperature&datum=STND&time_zone=lst_ldt&units=english&format=json').then((response) => {
    return response.json();
}).then((data) => {
    console.log(data);

    const name = data.metadata.name;
    const tideD = document.getElementById('location');
    tideD.innerHTML = name;

    const tObj = data.data[0].v;

    const height = document.getElementById('tideDisplay');
    height.innerHTML = tObj;

    console.log(tObj);

}).catch((err) => {
    console.warn(error);
});