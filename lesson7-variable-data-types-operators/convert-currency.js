let amount = document.getElementById('amount').value;
document.getElementById("btn").addEventListener("click", function() {
    console.log(amount)
    document.getElementById("result").innerHTML = `Result: ${amount / 26000}`;
})
