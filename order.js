// Pre-fill Cake Code if Redirected from Product Page
window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const cakeCode = urlParams.get('cakeCode');
    console.log("Cake Code from URL:", cakeCode);  // Debugging

    if (cakeCode) {
        document.getElementById('cakeCode').value = cakeCode;
    } else {
        console.log("No cake code found in URL.");
    }
};

// Redirect to Gmail with Filled Details
document.getElementById('order-form').onsubmit = function(event) {
    event.preventDefault();
    
    const name = encodeURIComponent(document.getElementsByName("name")[0].value);
    const email = encodeURIComponent(document.getElementsByName("email")[0].value);
    const phone = encodeURIComponent(document.getElementsByName("phone")[0].value);
    const address = encodeURIComponent(document.getElementsByName("address")[0].value);
    const cakeCode = encodeURIComponent(document.getElementsByName("cakeCode")[0].value);
    const weight = encodeURIComponent(document.getElementsByName("weight")[0].value);

    const mailtoLink = `mailto:oreo.ibnat81@gmail.com?subject=New Cake Order&body=
        Name:%20${name}%0A
        Email:%20${email}%0A
        Phone:%20${phone}%0A
        Address:%20${address}%0A
        Cake%20Code:%20${cakeCode}%0A
        Weight:%20${weight}`;

    window.location.href = mailtoLink;
};
