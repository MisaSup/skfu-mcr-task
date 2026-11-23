export const HomePage = () => {
    const main = document.createElement("main");
    main.className = "site-main";
    main.innerHTML = `
        <section class="hero">
            <h2>Клуб мейнеров Мортиса</h2>
            <p>Ресурс для координации игроков, использующих персонажа Mortis в дисциплине Brawl Stars. Здесь собирается статистика, оценивается уровень владения механиками персонажа и проводится отбор в закрытый состав.</p>
            <div class="promo-box">
                <span>Текущий сезон:</span>
                <strong>Шоудаун / Контроль</strong>
            </div>
        </section>
    `;
    return main;
};
