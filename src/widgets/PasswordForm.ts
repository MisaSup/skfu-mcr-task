import type { Component } from "../shared/lib/components/types.js";

export const PasswordForm: Component = () => {
    const section = document.createElement("section");
    section.className = "password-change-box";
    section.innerHTML = `
        <h3>Изменение пароля</h3>
        <form class="quiz-form">
            <div class="form-group">
                <label for="old-pass">Старый пароль:</label>
                <input type="password" id="old-pass" placeholder="••••••••" required>
            </div>
            <div class="form-group">
                <label for="new-pass">Новый пароль:</label>
                <input type="password" id="new-pass" placeholder="••••••••" required>
            </div>
            <button type="submit" class="btn btn-submit" style="margin-top: 10px;">Обновить пароль</button>
        </form>
    `;

    const form = section.querySelector("form");
    form?.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Пароль обновлён!");
        form.reset();
    });

    return section;
};
