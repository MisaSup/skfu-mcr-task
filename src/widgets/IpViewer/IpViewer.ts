import { getIpApi } from "../../entities/ip/api/getIpApi";
import Spinner from "../../shared/ui/Spinner/Spinner";

const IpViewer = (): string => {
  return `
    <section class="ip-viewer">
      <div class="ip-viewer__result" data-ip-result>
        IP ещё не загружен
      </div>
      <button class="ip-viewer__button" type="button" data-ip-show>
        Показать мой IP
      </button>
    </section>
  `;
};

export const initIpViewer = (): void => {
  const button = document.querySelector("[data-ip-show]") as HTMLButtonElement | null;
  const result = document.querySelector("[data-ip-result]") as HTMLDivElement | null;

  if (!button || !result) return;

  button.addEventListener("click", async () => {

    result.innerHTML = Spinner();
    result.classList.add("ip-viewer__result--loading");

    try {
      const ip = await getIpApi();
      result.textContent = `Ваш IP: ${ip}`;
      
      result.classList.remove("ip-viewer__result--loading");
      result.classList.add("ip-viewer__result--success");
    } 
    catch (error) {

      result.textContent = "Не удалось загрузить IP. Попробуйте позже.";
      
      result.classList.remove("ip-viewer__result--loading");
      result.classList.add("ip-viewer__result--error");
    }
  });
};

export default IpViewer;