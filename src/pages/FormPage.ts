import type { Component } from "../shared/lib/components/types.js";

export const FormPage: Component = () => {
    const main = document.createElement("main");
    main.className = "site-main";
    main.innerHTML = `
        <section class="password-change-box">
            <h3>Анкета вступления</h3>
            <form class="quiz-form">
                <div class="form-group">
                    <label for="tag">Тег игрока:</label>
                    <input type="text" id="tag" placeholder="#92LV90UU" required>
                </div>
                <div class="form-group">
                    <label for="cups">Кубки:</label>
                    <input type="number" id="cups" placeholder="1250" required>
                </div>
                <button type="submit" class="btn btn-submit" style="margin-top: 10px;">Отправить</button>
            </form>
        </section>
    `;

    const form = main.querySelector("form");
    form?.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Анкета отправлена!");
        form.reset();
    });

    return main;
};
