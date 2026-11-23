export const PasswordForm = () => {
    const section = document.createElement("section");
    section.className = "password-change-box";
    section.innerHTML = `
        <h3>Изменение пароля</h3>
        <form class="quiz-form">
            <div class="form-group">
                <label for="old-pass">Введите старый пароль:</label>
                <input type="password" id="old-pass" name="old-pass" placeholder="••••••••" required>
            </div>
            <div class="form-group">
                <label for="new-pass">Введите новый пароль:</label>
                <input type="password" id="new-pass" name="new-pass" placeholder="••••••••" required>
            </div>
            <div class="form-group">
                <label for="confirm-pass">Повторите новый пароль:</label>
                <input type="password" id="confirm-pass" name="confirm-pass" placeholder="••••••••" required>
            </div>
            <button type="submit" class="btn btn-submit" style="margin-top: 10px;">Обновить пароль</button>
        </form>
    `;

    const form = section.querySelector("form");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Пароль успешно обновлён!");
        form.reset();
    });

    return section;
};
