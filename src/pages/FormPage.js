export const FormPage = () => {
    const main = document.createElement("main");
    main.className = "site-main";
    main.innerHTML = `
        <section class="password-change-box">
            <h3>Анкета вступления</h3>
            <form class="quiz-form">
                <div class="form-group">
                    <label for="player-tag">Тег игрока:</label>
                    <input type="text" id="player-tag" placeholder="#92LV90UU" required>
                </div>
                <div class="form-group">
                    <label for="trophies">Количество кубков:</label>
                    <input type="number" id="trophies" placeholder="1250" required>
                </div>
                <div class="form-group">
                    <label for="skin">Любимый скин:</label>
                    <input type="text" id="skin" placeholder="Коварный Мортис" required>
                </div>
                <button type="submit" class="btn btn-submit" style="margin-top: 10px;">Отправить анкету</button>
            </form>
        </section>
    `;

    const form = main.querySelector("form");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Анкета отправлена!");
        form.reset();
    });

    return main;
};
