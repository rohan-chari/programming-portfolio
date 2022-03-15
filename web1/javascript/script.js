let weather ={
    fetchWeather: function(){
        apiKey: 'c68bd60825eb1815d3c9701c19f21fc9'
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" 
        + city 
        + "&unites=metric&appid=" 
        + apiKey
        ).then((response)=> response.json())
        .then((data)=>console.log(data));
    },

};

