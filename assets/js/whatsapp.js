document.getElementById("whatsappForm").addEventListener("submit", function (e) {
    e.preventDefault(); // evita recargar la página

    const telefono = "5491124790787"; // tu número sin +
    let mensaje = "";

    const nombre = document.getElementById("nombre").value.trim();
    if (nombre) mensaje += `*Nombre:* ${nombre}\n`;

    const email = document.getElementById("email").value.trim();
    if (email) mensaje += `*Email:* ${email}\n`;

    const typeValue = document.getElementById("type").value;
    let typeText = "";

    if (typeValue === "1") {
    typeText = "PC";
    } else if (typeValue === "2") {
    typeText = "Notebook";
    }

    if (typeText) mensaje += `*Tipo:* ${typeText}\n`;

    const descripcion = document.getElementById("description").value.trim();
    if (descripcion) mensaje += `*Consulta:* ${descripcion}\n`;

    // encodeURIComponent para que no se rompa el link
    const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;

    window.open(url, "_blank");
});