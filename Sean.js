function cashRegister(price, cash, cid) {

// price = purchase price,
// cash = payment amount,
// cid (cash in drawer) = cash in register

// return value:
    let statusChange = {
        status: "",
        change: [],
    }

// Part 1:
    if(cash < price) {
        statusChange.status = "INCORRECT_PAYMENT";
        console.log(statusChange)
    }

// Part 2:    
    let changeDue = cash - price;
    
    let cashInDraw = 0;

    for (let i = 0; i < cid.length; i++) {
        cashInDraw += cid[i][1];
    }
    console.log(cashInDraw)

    if (cashInDraw < changeDue) {
        statusChange.status = "INSUFFICIENT_FUNDS";
        console.log(statusChange)
    }

// Cannot return exact change


}

cashRegister(8, 20, 10)
// cashRegister(19.5, 20, [
//     ["PENNY", 1.01],
//     ["NICKEL", 2.05],
//     ["DIME", 3.1],
//     ["QUARTER", 4.25],
//     ["ONE", 90],
//     ["FIVE", 55],
//     ["TEN", 20],
//     ["TWENTY", 60],
//     ["ONE HUNDRED", 100]
// ]);