function cashRegister(price, cash, cid) {
    
    // let result = {status: "", change []}
    
    // declare counters - one for amount in till, one for amount left in the till

    // Create variable for calculation of diff between cash, price - if (conditional) cash given < price. Status "Incorrect Payment" plus empty array for change.
    
    if(cash < price) {
        return {status: "INCORRECT_PAYMENT"; change []}
    }

    // Compare above calc to amount in till. If change due > cash in draw, return "Insufficint Funds", plues empty array for change.

    // var change = cash - price (use in above calc also?)

    if(change > cid) {
        return {status: "INSUFFICIENT FUNDS"; change []}
    }

    // Can we give them exact change from draw? . N - return "insufficient funds". Y - return "Closed" and exact change/cid in array, include zero values.

    // Is cash in draw more than change is due(CID === price)

    // Given the above, if we can give them change and CID remains above zero, return "open", with array of change due, no zero values in array.

    // return object e.g. {status: " ", change []}
}