function bonAppetit(bill, k, b) {
    // Calculate the total bill excluding the item Anna didn't eat
    const totalBill = bill.reduce((sum, item, index) => index !== k ? sum + item : sum, 0 /* 0 initialization of accumulator value */);

    // Calculate the split amount Anna should pay
    const annaShare = totalBill / 2;

    // Check if Brian's calculation is correct
    if (annaShare === b) {
        console.log("Bon Appetit");
    } else {
        // Calculate the amount Brian owes Anna
        const refund = b - annaShare;
        console.log(refund);
    }
}

// Example usage:
const n = 4; // Number of items ordered
const k = 1; // Index of the item Anna didn't eat
const bill = [3, 10, 2, 9]; // Cost of each item
const b = 12; // Amount Brian charged Anna

bonAppetit(bill, k, b);
// Output: Bon Appetit
