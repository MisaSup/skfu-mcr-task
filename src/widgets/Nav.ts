import type { Component } from "../shared/lib/components/types.js";

export type Page = "index" | "form" | "profile";

interface NavProps {
    activePage: Page;
    onNavigate: (page: Page) => void;
}

export const Nav: Component<NavProps> = ({ activePage, onNavigate }) => {
    const nav = document.createElement("nav");
    nav.className = "site-nav";

    const items: { id: Page; title: string }[] = [
        { id: "index", title: "Главная" },
        { id: "form", title: "Анкета" },
        { id: "profile", title: "Профиль" },
    ];

    for (const item of items) {
        const link = document.createElement("a");
        link.href = "#";
        link.className = item.id === activePage ? "nav-link active" : "nav-link";
        link.textContent = item.title;
        link.addEventListener("click", (e) => {
            e.preventDefault();
            onNavigate(item.id);
        });
        nav.append(link);
    }

    return nav;
};
