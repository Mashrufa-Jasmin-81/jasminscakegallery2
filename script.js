// Redirect to Order Form with Pre-filled Cake Code
function orderNow(cakeCode) {
    window.location.href = "order.html?cakeCode=" + encodeURIComponent(cakeCode);
}
