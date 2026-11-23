export const Nav = (activePage, onNavigate) => {
    const nav = document.createElement("nav");
    nav.className = "site-nav";

    const links = [
        { id: "index", label: "Главная" },
        { id: "form", label: "Анкета" },
        { id: "profile", label: "Профиль" },
    ];

    links.forEach(({ id, label }) => {
        const a = document.createElement("a");
        a.href = "#";
        a.className = id === activePage ? "nav-link active" : "nav-link";
        a.textContent = label;
        a.addEventListener("click", (e) => {
            e.preventDefault();
            onNavigate(id);
        });
        nav.append(a);
    });

    return nav;
};
