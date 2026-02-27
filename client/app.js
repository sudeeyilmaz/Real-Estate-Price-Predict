function getBathValue() {
    var radios = document.getElementsByName("uiBathrooms");
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            return parseInt(radios[i].value);
        }
    }
    return -1;
}

function getBHKValue() {
    var radios = document.getElementsByName("uiBHK");
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            return parseInt(radios[i].value);
        }
    }
    return -1;
}

function onClickedEstimatePrice() {
    console.log("Estimate price button clicked");
    var sqft = document.getElementById("uiSqft");
    var bhk = getBHKValue();
    var bathrooms = getBathValue();
    var location = document.getElementById("uiLocations");
    var estPrice = document.getElementById("uiEstimatedPrice");

    // "Loading" animasyonu gibi geçici bir metin
    estPrice.innerHTML = "<h2>Calculating...</h2>";

    var url = "http://127.0.0.1:5000/predict_home_price"; 

    $.post(url, {
        total_sqft: parseFloat(sqft.value),
        bhk: bhk,
        bath: bathrooms,
        location: location.value
    }, function(data, status) {
        // Backend'den gelen veri "Lakh" cinsinden (Örn: 50.5 Lakh)
        var priceInLakhs = parseFloat(data.estimated_price);
        
        // Lakh'ı normal Hindistan Rupisine (INR) çeviriyoruz (1 Lakh = 100,000 INR)
        var priceInINR = priceInLakhs * 100000;
        
        // INR'yi Dolara (USD) çeviriyoruz (Güncel kur ortalama 1 USD = 83 INR kabul edildi)
        var priceInUSD = priceInINR / 83; 
        
        // Fiyatı Amerikan doları formatında virgüllerle güzelleştiriyoruz ($ 150,000 gibi)
        var formattedUSD = new Intl.NumberFormat('en-US', { 
            style: 'currency', 
            currency: 'USD',
            maximumFractionDigits: 0 // Küsürat istemiyorsak 0 yapıyoruz
        }).format(priceInUSD);

        console.log("Converted Price in USD:", formattedUSD);
        estPrice.innerHTML = "<h2>" + formattedUSD + "</h2>";
    });
}

function onPageLoad() {
    console.log("document loaded");
    var url = "http://127.0.0.1:5000/get_location_names"; 
    $.get(url, function(data, status) {
        console.log("got response for get_location_names request");
        if(data) {
            var locations = data.locations;
            $('#uiLocations').empty();
            $('#uiLocations').append(new Option("Choose a Location", "", true, true)); // İlk seçenek
            for(var i in locations) {
                var opt = new Option(locations[i]);
                $('#uiLocations').append(opt);
            }
        }
    });
}

window.onload = onPageLoad;