// Wait for the HTML document to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // Select all elements with the class "item" (individual items in the shopping cart)
    const items = document.querySelectorAll(".item");

    // Select the element with the ID "total-price" where the total price will be displayed
    const totalElement = document.getElementById("total-price");

    // Initialize a variable to keep track of the total price
    let total = 0;

    // Iterate through each item using a for loop
    for (let i = 0; i < items.length; i++) {
        // Get the current item element
        const item = items[i];

        // Select various elements within the current item
        const likedButton = item.querySelector(".like-button");
        const removeButton = item.querySelector(".remove-button");
        const incrementButton = item.querySelector(".increment");
        const decrementButton = item.querySelector(".decrement");
        const quantityValue = item.querySelector(".quantity-value");
        const itemPrice = item.querySelector(".item-price");

        // Initialize variables for item-specific data
        let liked = false;
        let quantity = 0;
        const price = parseFloat(itemPrice.textContent.slice(1)); // Item price

        // Event listener for the "Like" button
        likedButton.addEventListener("click", () => {
            // Toggle the like status when the button is clicked
            liked = !liked;
            likedButton.classList.toggle("liked", liked);
        });

        // Event listener for the "Remove" button
        removeButton.addEventListener("click", () => {
            // Removes the item from the cart
            item.remove();
            // Update the total price
            updateTotal();
        });

        // Event listener for the increment button
        incrementButton.addEventListener("click", () => {
            quantity++;
            // Update quantity displayed
            quantityValue.textContent = quantity;
            updateTotal();
        });

        // Event listener for the decrement button
        decrementButton.addEventListener("click", () => {
            // If quantity is greater than 1, decrease
            if (quantity >0) {
                quantity--;
                quantityValue.textContent = quantity;
                updateTotal();
            }
        });

        // Function to update total price
        function updateTotal() {
            // Calculate the total price by iterating through cart items
            let totalPrice = 0;

            for (let j = 0; j < items.length; j++) {
                const currentItem = items[j];
                const itemPrice = parseFloat(currentItem.querySelector(".item-price").textContent.slice(1));
                const itemQuantity = parseInt(currentItem.querySelector(".quantity-value").textContent);
                totalPrice += itemPrice * itemQuantity;
            }

            // Display the updated total price with two decimal places
            totalElement.textContent = `Total: $${totalPrice.toFixed(2)}`;
        }
    }
});
