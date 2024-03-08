$(document).ready(function () {
  //toggle sidebar
  $(document).ready(function () {
    $("#sidebarCollapse").on("click", function () {
      $("#sidebar").toggleClass("active");
    });
  });

});

  async function updateUserBalance() {
            try {
                const response = await fetch('http://your-backend-url.com/getUserBalance');
                if (response.ok) {
                    const data = await response.json();
                    const userBalanceElement = document.getElementById('userBalance');
                    userBalanceElement.textContent = data.balance;
                    console.log('User balance updated:', data.balance);
                } else {
                    console.error('Failed to fetch user balance');
                }
            } catch (error) {
                console.error('Error updating user balance:', error);
            }
        }

        // Call the function to update user balance initially
        updateUserBalance();
        
        // Set interval to periodically update user balance
        setInterval(updateUserBalance, 60000); // Update every 1 minute (adjust as needed)
});
