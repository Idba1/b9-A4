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
        const goodNameWord = ['a', 'y','i','e','o', 'u', 'w'];
        if(goodNameWord.includes(name.charAt(name.length-1))){
            return "Good Name";
        }
        else{
            return "Bad Name";
        }
    }
}


function deleteInvalids(array) {
    if(!Array.isArray(array)){
        return "Invalid Array";

    }
    let newArray=[];
    for(let i=0 ; i<array.length ; i++){
        if(typeof (array[i]) === "number" && !isNaN(array[i])){
            newArray.push(array[i]);
        }
    }
    return newArray;
}
