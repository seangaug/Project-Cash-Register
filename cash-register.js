function cashRegister(price, cash, cid) {
    
    // let result = {status: "", change []}
    let baseDrawer = {
        "PENNY": 0.01,
        "NICKEL": 0.05,
        "DIME": 0.1,
        "QUARTER": 0.25,
        "ONE": 1,
        "FIVE": 5,
        "TEN": 10,
        "TWENTY": 20,
        "ONE HUNDRED": 100
    };
    // declare counters - one for amount in till, one for change due
    let change = cash*100 - price*100;
    let totalCID = 0;
 
    for (let elem of cid) {
        totalCID += elem[1]*100
    }
    if (change > totalCID) {
        return {
            status: "INSUFFICIENT_FUNDS", change: []
        }
    } if (price > cash) {
        return {
            status: "INCORRECT_PAYMENT", change: []
        }
    } else if (change === totalCID) {
        return {
            status: "CLOSED", change: cid
        }
    }
}
    
    // Only remaining outcomes at this point:
    // 1 - CID > Change and we can be it exactly or;
    // 2 - CID > Change however we do not have the exactly change to pay out

//     else {
//         cid = cid.reverse()
//         console.log(cid)
//     }