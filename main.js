// REPLACE THIS NUMBER WITH THEIR ACTUAL WHATSAPP NUMBER
const phone = "267XXXXXXXXX"; 

function orderItem(item, price) {
    const msg = `Hello City Club! I want to order the ${item} (P${price}). Is it available?`;
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`, '_blank');
}

function bookVIP(event) {
    event.preventDefault(); // Prevents the form from reloading the page
    const name = document.getElementById('vip-name').value;
    const date = document.getElementById('vip-date').value;
    const guests = document.getElementById('vip-guests').value;
    
    const msg = `Hello City Club! I would like to book a VIP table.\n\nName: ${name}\nDate: ${date}\nGuests: ${guests}`;
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`, '_blank');
}
