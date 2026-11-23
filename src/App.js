import { Header } from "./widgets/Header.js";
import { Nav } from "./widgets/Nav.js";
import { Footer } from "./widgets/Footer.js";
import { HomePage } from "./pages/HomePage.js";
import { FormPage } from "./pages/FormPage.js";
import { ProfilePage } from "./pages/ProfilePage.js";

export const App = () => {
    let currentPage = "profile";
    const wrapper = document.createElement("div");
    wrapper.className = "phone-wrapper";

    const render = () => {
        wrapper.innerHTML = "";
        let pageContent;
        if (currentPage === "index") pageContent = HomePage();
        else if (currentPage === "form") pageContent = FormPage();
        else pageContent = ProfilePage();

        wrapper.append(
            Header(),
            Nav(currentPage, (nextPage) => {
                currentPage = nextPage;
                render();
            }),
            pageContent,
            Footer()
        );
    };

    render();
    return wrapper;
};
