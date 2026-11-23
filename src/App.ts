import type { Component } from "./shared/lib/components/types.js";
import { Header } from "./widgets/Header.js";
import { Nav, type Page } from "./widgets/Nav.js";
import { Footer } from "./widgets/Footer.js";
import { HomePage } from "./pages/HomePage.js";
import { FormPage } from "./pages/FormPage.js";
import { ProfilePage } from "./pages/ProfilePage.js";

export const App: Component = () => {
    let currentPage: Page = "profile";
    const wrapper = document.createElement("div");
    wrapper.className = "phone-wrapper";

    const render = () => {
        wrapper.innerHTML = "";
        const page = currentPage === "index" ? HomePage({})
            : currentPage === "form" ? FormPage({})
            : ProfilePage({});

        wrapper.append(
            Header({}),
            Nav({
                activePage: currentPage,
                onNavigate: (next) => {
                    currentPage = next;
                    render();
                },
            }),
            page,
            Footer({})
        );
    };

    render();
    return wrapper;
};
