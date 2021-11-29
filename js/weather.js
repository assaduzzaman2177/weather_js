const inputTxt = document.querySelector('.inputTxt');
var button = document.querySelector('.btn');
const showData = document.querySelector('.showData');

////get api from open weather 
const API_Key = "2e3740f12bc7271591a00760bea4f3d0";

//// now add event listener
button.addEventListener('click', () => {

    /////get input value
    const cityInput = inputTxt.value;
    console.log(cityInput);
    /////// now fetch though get api
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityInput}&units=metric&APPID=${API_Key}`)
        .then(res => res.json())
        .then(data => {
           ///console.log(data);

           //////when fill input field then clear input field
           inputTxt.innerHTML=" ";

           ////now show all data value
           showData.innerHTML=`
                              <ul>
                              <li class="desc">${data.weather[0].description} </li>
                              <li class"city">${data.name}</li>
                              <li class"temp">${data.main.temp}°C</li>
                               </ul>
                               `;
        });
});