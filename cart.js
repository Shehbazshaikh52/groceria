$(document).ready(function() {
    // Initialize cart from localStorage or create empty array
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
  
    // Function to update cart badge
    function updateCartBadge() {
      const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
      $('.cart-badge').text(totalItems);
    }
  
    // Function to save cart to localStorage
    function saveCart() {
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  
    // Handle Add to Cart button click
    $('.add-to-cart').on('click', function() {
      const productId = $(this).data('product-id');
      const productName = $(this).data('product-name');
  
      // Check if product is already in cart
      const existingItem = cart.find(item => item.id === productId);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        cart.push({
          id: productId,
          name: productName,
          quantity: 1
        });
      }
  
      // Save cart and update badge
      saveCart();
      updateCartBadge();
  
      // Optional: Show confirmation (e.g., alert or toast)
      alert(`${productName} added to cart!`);
    });
  
    // Initialize badge on page load
    updateCartBadge();
  });