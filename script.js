document.getElementById('orderForm').addEventListener('submit', function(e){
    e.preventDefault();
    const name = document.getElementById('name').value;
    const packageQty = document.getElementById('packageSelect').value;
    const type = document.getElementById('typeSelect').value;

    let unitPrice = (type === "Chocolate") ? 8 : 6;
    let total = unitPrice * parseInt(packageQty);

    const message = `¡Hola! Quiero pedir ${packageQty} donas de tipo ${type}. Total: $${total}. Nombre: ${name}`;
    const whatsappUrl = `https://wa.me/528113508150?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
});
