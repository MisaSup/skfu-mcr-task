import type { Component } from "../shared/lib/components/types.js";

export const Footer: Component = () => {
    const footer = document.createElement("footer");
    footer.className = "site-footer";
    footer.innerHTML = `
        <p>© 2026 Novikov G.A. | SKFU PMI</p>
        <div class="footer-links"><a href="https://github.com">GitHub</a></div>
    `;
    return footer;
};
