function calculateMoney(ticketSale) {
    if (ticketSale < 0) {
        return "Please enter a positive number";
    }
    else {
        const ticketPrice = 120;
        let totalTicketSalePrice = ticketPrice * ticketSale;

        const stuffCost = 50;
        let totalStuffCost = stuffCost * 8;
        const gateManCost = 500;
        let totalCost = gateManCost + totalStuffCost;

        let bakerVaiHasMoney = totalTicketSalePrice - totalCost;
        return bakerVaiHasMoney;
    }
}


function checkName(name) {

    if (typeof name !== "string") {
        return "invalid";
    }
    else {
        name = name.trim().toLowerCase();
        const goodNameWord = ['a', 'y', 'i', 'e', 'o', 'u', 'w'];
        if (goodNameWord.includes(name.charAt(name.length - 1))) {
            return "Good Name";
        }
        else {
            return "Bad Name";
        }
    }
}


function deleteInvalids(array) {
    if (!Array.isArray(array)) {
        return "Invalid Array";

    }
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (typeof (array[i]) === "number" && !isNaN(array[i])) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}


function password(obj) {
    if (obj.name === undefined || obj.birthYear === undefined || obj.siteName === undefined || obj.birthYear <= 999) {
        return "invalid";
    }
    else {
        const websiteName = obj.siteName.charAt(0).toUpperCase()+obj.siteName.slice(1);
        const userName = obj.name;
        const birth = obj.birthYear;
        const getPassword = websiteName + "#" + userName + "@" + birth;
        return getPassword;
    }
}
console.log(password({ name: "kolimuddin", birthYear: 1999, siteName: "google" }))



function monthlySavings(arr, livingCost) {
    if(!Array.isArray(arr) || typeof livingCost !== "number"){
        return "invalid input";
    }
    let totalIncome = 0;
    for(let i=0 ; i<arr.length ; i++){
        let payment = arr[i];
        if(payment >= 3000){
            totalIncome = totalIncome + payment * 0.8;
        }
        else{
            totalIncome = totalIncome + payment;
        }
    }
    const savings = totalIncome - livingCost;
    if(savings >= 0){
        return savings;
    }
    else{
        return "earn more";
    }
}
// console.log(monthlySavings(100, [ 900 , 2700 , 3400] ))