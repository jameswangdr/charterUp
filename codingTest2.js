// Design and code a pricing engine that will be used to generate quotes for charterUP. Prices should be
// computed using the following inputs: VehicleType, VehicleCount, PricingMethod, PricingMethodUnits, and
// VehicleTypeRate.
// The formula for computing price will be:
// price = VehicleCount * VehicelTypeRate * PricingMethod * PricingMethodUnits.
// PricingMethods: Daily, Hourly, Distance
// Vehicle Types: Charter Bus, Mini Bus, Sprinter, Party Bus, Sedan, SUV, Limousine, Trolley
// Rates will need to be stored for each VehicleType and PricingMethod combination as follows:
// Note: Distance rates are per mile.

let vehicles = {
    charterbus: { daily: 1000, hourly: 400, distance: 3.5 },
    minibus: { daily: 925, hourly: 360, distance: 3.25 },
    sprinter: { daily: 850, hourly: 320, distance: 3 },
    partybus: { daily: 775, hourly: 280, distance: 2.75 },
    sedan: { daily: 700, hourly: 240, distance: 3.5 },
    suv: { daily: 625, hourly: 200, distance: 2.25 },
    limousine: { daily: 550, hourly: 160, distance: 2 },
    trolly: { daily: 475, hourly: 120, distance: 1.75 }
}
let methodInput = document.getElementById("method").value
let units = document.getElementById("units");
form.addEventListener('submit', onSubmit);

function pricingEngine(VehicleCount, VehicleTypeRate, PricingMethodUnits) {
    let price = 0;

    price = VehicleCount * VehicleTypeRate * PricingMethodUnits;
    return price;
}

function onSubmit(event) {
    event.preventDefault();

    let vehicleInput = document.getElementById("vehicles").value 
    let amountInput = document.getElementById("amount").value || 1
    let methodInput = document.getElementById("method").value
    let distanceInput = document.getElementById("distance").value || 1

    let result = pricingEngine(amountInput, vehicles[vehicleInput][methodInput], distanceInput)
    let quote = document.getElementById("result")
    quote.innerHTML = `Estimate: $${result}`
}




