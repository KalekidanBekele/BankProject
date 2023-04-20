var bal;
fetch("./user_data/user.json")
.then(response => response.json())
	.then(data => {
	bal=parseFloat(data.balance).toFixed(2);
});



const acctBalanceLbl = document.getElementById("balance");
const deposits = [];
const withdrawals = [];
let totalBalance = bal;
console.log(totalBalance);
const userDeposit = document.getElementById("userDeposit");
const btnDeposit = document.getElementById("btnDeposit");
const userWithdraw = document.getElementById("userWithdraw");
const btnWithdraw = document.getElementById("btnWithdraw");

const formatter = new Intl.NumberFormat('en-US',
{
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
});

btnDeposit.addEventListener('click', () =>
{

    if (isNaN(userDeposit.value))
    {
        alert("Please enter a number.");
        return userDeposit.value = '';
    }
    else
    {

        if (userDeposit.value < 0.01 || userDeposit.value > 10000)
        {
            alert("You can only deposit between $0.01 and $10,000.")
            return userDeposit.value = '';
        }
        else
        {
        deposits.push(Number(userDeposit.value));
        totalBalance += (Number(userDeposit.value));

        let totalBalanceFormatted = formatter.format(totalBalance);
        document.getElementById("acctBalanceLbl").innerHTML = totalBalanceFormatted;

    console.log("$" + userDeposit.value);
    return userDeposit.value = '';
    }
}
    
});

btnWithdraw.addEventListener('click', () =>
{
    if (isNaN(userWithdraw.value))
    {
        alert("Please enter a number.");
        return userWithdraw.value = '';
    }
    else
    {
        if (userWithdraw.value > totalBalance - 5)
        {
            alert("Your total balance cannot drop below $5.");
            return userWithdraw.value = '';
        }
        else
        {
            withdrawals.push(Number(userWithdraw.value));
            totalBalance -= (Number(userWithdraw.value));

            let totalBalanceFormatted = formatter.format(totalBalance);
            document.getElementById("acctBalanceLbl").innerHTML = totalBalanceFormatted;

            console.log("$" + userWithdraw.value);
            return userWithdraw.value = '';
        }
    }
});

let totalBalanceFormatted = formatter.format(totalBalance);
document.getElementById("acctBalanceLbl").innerHTML = totalBalanceFormatted;
