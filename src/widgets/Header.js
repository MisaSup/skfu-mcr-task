export const Header = () => {
    const header = document.createElement("header");
    header.className = "site-header";
    header.innerHTML = `
        <img src="https://icons8.com" alt="Logo" class="logo">
        <h1>Mortis Club</h1>
    `;
    return header;
};
