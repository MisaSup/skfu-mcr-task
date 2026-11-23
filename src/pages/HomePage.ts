import type { Component } from "../shared/lib/components/types.js";

export const HomePage: Component = () => {
    const main = document.createElement("main");
    main.className = "site-main";
    main.innerHTML = `
        <section class="hero">
            <h2>Клуб мейнеров Мортиса</h2>
            <p>Ресурс для координации игроков Brawl Stars. Здесь собирается статистика и проводится отбор в состав.</p>
            <div class="promo-box"><span>Текущий сезон:</span> <strong>Шоудаун / Контроль</strong></div>
        </section>
    `;
    return main;
};
