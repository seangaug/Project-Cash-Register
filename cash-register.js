function cashRegister(price, cash, cid) {
    
    // let result = {status: "", change []}
    
    let baseMoney = {
        "PENNY": 1,
        "NICKEL": 5,
        "DIME": 10,
        "QUARTER": 25,
        "ONE": 100,
        "FIVE": 500,
        "TEN": 1000,
        "TWENTY": 2000,
        "ONE HUNDRED": 10000,
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

    
    // Only remaining outcomes at this point:
    // 1 - CID > Change and we can be it exactly or;
    // 2 - CID > Change however we do not have the exactly change to pay out

    else {
        // Create new arr to push everything within holder (defined below) that is not a zero. For status 'open', no zero values to be discplayed
        let answer = [];
        // Reverse cid - highest to lowest. Array passed in is currently lowest to highest
        // cid = cid.reverse()
        // Iterate through to identify how much money of each denomination
        for (let elem of cid) {
            // Create empty array to store all different types of money we are taking out of the draw
            let holder = [elem[0], 0]
            // Multiply element by 100 to convert to pennies (as per change calculation)
            elem[1] = elem[1]*100;
            // Need to find the max demoniation below the amount of change due & check array passed in to make sure we hold an amount of that denomination
            while (change >= baseMoney[elem[0]] && elem[1] > 0) {
                // Decrease change by amount that we are taking out of the drawer
                change -= baseMoney[elem[0]]
                // Decrease element in array to show change has been given. Decrement by amount of intial amount of chagne provided
                elem[1] -= baseMoney[elem[0]]
                // Add demonitations we are taking out of teh draw into the holder variable
                holder[1] += baseMoney[elem[0]] / 100
            }
            if(holder[1] > 0) {
                answer.push(holder)
            }
        }
        // If change is still outstanding once above while loop has run:
        if (change > 0) {
            return {
                status: "INSUFFICIENT_FUNDS", change: []
            }
        }
        return {
            status: "OPEN", change: answer
        }
    }
}

cashRegister(19.5, 20, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100]
  ]);
  // => {status: "INCORRECT_PAYMENT", change: []}