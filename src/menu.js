document.addEventListener("DOMContentLoaded", () => {
    const cartKey = "campusBitesMenuCart";
    const cartModal = document.querySelector("#cart-modal .modal-box");
    const cartLink = document.querySelector('a[href="#cart-modal"]');

    let cart = JSON.parse(localStorage.getItem(cartKey) || "[]");

    function saveCart() {
        localStorage.setItem(cartKey, JSON.stringify(cart));
        updateCartBadge();
        renderCart();
    }

    function updateCartBadge() {
        if (!cartLink) return;

        let badge = cartLink.querySelector(".cart-count");
        const count = cart.reduce((sum, item) => sum + item.quantity, 0);

        if (!badge) {
            badge = document.createElement("span");
            badge.className = "cart-count";
            cartLink.appendChild(badge);
        }

        badge.textContent = count;
        badge.hidden = count === 0;
    }

    function renderCart() {
        if (!cartModal) return;

        const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

        cartModal.innerHTML = `
            <a href="#" class="modal-close" aria-label="Close">&times;</a>
            <p class="modal-eyebrow">YOUR BAG</p>
            <h3>${cart.length ? "Your Cart" : "Your Cart is Empty"}</h3>
            ${
                cart.length
                    ? `<div class="cart-items">
                        ${cart.map(item => `
                            <div class="cart-item">
                                <div>
                                    <strong>${item.name}</strong>
                                    <p>Rs. ${item.price} × ${item.quantity}</p>
                                </div>
                                <button type="button" class="cart-remove" data-remove="${item.name}">Remove</button>
                            </div>
                        `).join("")}
                       </div>
                       <p class="cart-total"><strong>Total: Rs. ${total}</strong></p>
                       <p class="modal-sub">Your items have been added to your cart.</p>`
                    : `<p class="modal-sub">Add your favourite items from the menu.</p>
                       <a href="menu.html" class="modal-primary-btn">Explore Menu</a>`
            }
        `;

        cartModal.querySelectorAll("[data-remove]").forEach(button => {
            button.addEventListener("click", () => {
                cart = cart.filter(item => item.name !== button.dataset.remove);
                saveCart();
            });
        });
    }

    document.querySelectorAll(".menu-card").forEach(card => {
        const input = card.querySelector(".quantity-input");

        card.querySelectorAll("[data-action]").forEach(button => {
            button.addEventListener("click", () => {
                let quantity = parseInt(input.value, 10) || 1;

                if (button.dataset.action === "increase") quantity++;
                if (button.dataset.action === "decrease") quantity = Math.max(1, quantity - 1);

                input.value = quantity;
            });
        });

        input.addEventListener("change", () => {
            input.value = Math.max(1, parseInt(input.value, 10) || 1);
        });

        card.querySelector(".add-cart-btn").addEventListener("click", event => {
            const button = event.currentTarget;
            const name = button.dataset.name;
            const price = Number(button.dataset.price);
            const quantity = Math.max(1, parseInt(input.value, 10) || 1);

            const existing = cart.find(item => item.name === name);

            if (existing) {
                existing.quantity += quantity;
            } else {
                cart.push({ name, price, quantity });
            }

            saveCart();

            button.textContent = "Added!";
            setTimeout(() => button.textContent = "Add to Cart", 900);
        });
    });

    updateCartBadge();
    renderCart();
});
