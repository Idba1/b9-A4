
function calculateMoney(ticketSale) {
    if(ticketSale < 0){
        return "Please enter a positive number"
    }
    else{
        const ticketPrice = 120;
        let totalTicketSalePrice = ticketPrice * ticketSale;
        // return totalTicketSalePrice
        const stuffCost = 50;
        let totalStuffCost = stuffCost*8;
        // return totalStuffCost;
        const gateManCost = 500;
        let totalCost = gateManCost + totalStuffCost;
        // return totalCost;
        let bakerVaiHasMoney = totalTicketSalePrice - totalCost;
        return bakerVaiHasMoney;
    }
}
console.log(calculateMoney(10));
    