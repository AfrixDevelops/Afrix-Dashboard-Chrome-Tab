fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=cars")
    .then(res => res.json())
    .then(data => {
        console.log(data)
        
        document.body.style.background =` url(${data.urls.full}) rgba(24, 24, 24, .8) no-repeat center center fixed `
        document.body.style.backgroundSize =`cover`


    })
    .catch(err => {
        document.body.style.backgroundImage =` url("https://images.unsplash.com/photo-1548332325-403f42f4434a?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDI0NzB8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NDYzNjgxNDg&ixlib=rb-1.2.1&q=85")  `
    })




fetch("https://api.coingecko.com/api/v3/coins/shiba-inu")
    .then(res => res.json())
    .then(coin => {
        console.log(coin)
        //throw Error ("This is an error") // syntax for manual error
        document.getElementById("shib").innerHTML = `
        <img id="coin-img" src="${coin.image.small}">
        `
        document.getElementById("crypto-price-shib").innerHTML +=`
        <p id="current-price">$${coin.market_data.current_price.cad} CAD</p>
        <p id="current-price">$${coin.market_data.current_price.usd} USD</p>
        `

    })

    .catch(err => {

        document.getElementById("crypto").textContent = "Error: Could not find coin with the given id"
    })


    fetch("https://api.coingecko.com/api/v3/coins/ethereum")
    .then(res => res.json())
    .then(coin => {
        console.log(coin)
        //throw Error ("This is an error") // syntax for manual error
        document.getElementById("eth").innerHTML = `
        <img id="coin-img" src="${coin.image.small}">
        `
        document.getElementById("crypto-price-eth").innerHTML +=`
        <p id="current-price">$${coin.market_data.current_price.cad} CAD</p>
        <p id="current-price">$${coin.market_data.current_price.usd} USD</p>
        `

    })

    .catch(err => {

        document.getElementById("crypto").textContent = "Error: Could not find coin with the given id"
    })

    fetch("https://api.coingecko.com/api/v3/coins/bitcoin")
    .then(res => res.json())
    .then(coin => {
        console.log(coin)
        //throw Error ("This is an error") // syntax for manual error
        document.getElementById("btc").innerHTML = `
        <img id="coin-img" src="${coin.image.small}">
        `
        document.getElementById("crypto-price-btc").innerHTML +=`
        <p id="current-price">$${coin.market_data.current_price.cad} CAD</p>
        <p id="current-price">$${coin.market_data.current_price.usd} USD</p>
        `

    })

    .catch(err => {

        document.getElementById("crypto").textContent = "Error: Could not find coin with the given id"
    })

    fetch("https://api.coingecko.com/api/v3/coins/dogecoin")
    .then(res => res.json())
    .then(coin => {
        console.log(coin)
        //throw Error ("This is an error") // syntax for manual error
        document.getElementById("doge").innerHTML = `
        <img id="coin-img" src="${coin.image.small}">
        `
        document.getElementById("crypto-price-doge").innerHTML +=`
        <p id="current-price">$${coin.market_data.current_price.cad} CAD</p>
        <p id="current-price">$${coin.market_data.current_price.usd} USD</p>
        `

    })

    .catch(err => {

        document.getElementById("crypto").textContent = "Error: Could not find coin with the given id"
    })





    //check this to have everysecond update -> https://stackoverflow.com/questions/26584233/updating-javascript-time-every-second
    function thisTime(){

        let today = new Date()
        let timeNow = `${today.toLocaleTimeString("en-us", {timeStyle: "medium"})}`
        const time = document.getElementById("time")
        
        time.textContent = timeNow
    
    }
    
    setInterval(thisTime, 1000)
    

    


navigator.geolocation.getCurrentPosition((position) => {
    console.log(position)
    //lat=${position.coords.latitude}&lon=${position.coords.latitude} << I don't use this cause my coords is messed up, thats why I'm using q=vancouver
    fetch(`https://apis.scrimba.com/openweathermap/data/2.5/weather?q=vancouver&units=metric`)
    .then(res => {
        if (!res.ok) {
            throw Error("Weather data not available")
        }
        return res.json()
    })
           
    .then(weather => {
        console.log(weather)
        const iconUrl = `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png` // it only works here and not on the innerHTML because it only give you the weather ID and not including the @2x.png
      

         document.getElementById("weather").innerHTML = `
         <img src="${iconUrl}">
         <span> ${weather.main.temp}°</span> 
        <p>${weather.name}, ${weather.sys.country}</p>

        `
    })

    .catch( err => {document.getElementById("error-weather").textContent = "Weather data not available"})
})


