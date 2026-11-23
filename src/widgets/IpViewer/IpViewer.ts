import "./IpViewer.css";
import type { Component } from "../../shared/lib/components/types";
import { Spinner } from "../../shared/ui/Spinner/Spinner";
import { getIpApi } from "../../entities/ip/api/getIpApi";

export const IpViewer: Component = () => {
    return `
        <section class="ip-card">
            <h1 class="ip-card__title">Mortis Club • IP Scanner</h1>
            <p class="ip-card__subtitle">Узнай свой текущий публичный IPv4-адрес</p>
            <button type="button" class="ip-card__btn" id="fetch-ip-btn">Показать мой IP</button>
            <div class="ip-card__result" id="ip-result">Нажмите на кнопку выше</div>
        </section>
    `;
};

export const initIpViewer = (root: HTMLElement): void => {
    const button = root.querySelector<HTMLButtonElement>("#fetch-ip-btn");
    const resultBox = root.querySelector<HTMLDivElement>("#ip-result");

    if (!button || !resultBox) return;

    button.addEventListener("click", async () => {
        button.disabled = true;
        resultBox.classList.remove("ip-card__result--success", "ip-card__result--error");
        resultBox.innerHTML = Spinner();

        try {
            const ip = await getIpApi();
            resultBox.textContent = ip;
            resultBox.classList.add("ip-card__result--success");
        } catch {
            resultBox.textContent = "Не удалось получить IP-адрес. Проверьте соединение или отключите блокировщик.";
            resultBox.classList.add("ip-card__result--error");
        } finally {
            button.disabled = false;
        }
    });
};
