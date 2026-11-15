import type { Component } from '../../shared/lib/components/types';
import Spinner from '../../shared/ui/Spinner/Spinner';
import { getIpApi } from '../../entities/ip/api/getIpApi';
import './IpViewer.css';

const IpViewer: Component = () => {
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

export const setupIpViewer = (root: HTMLElement) => {
  const button = root.querySelector<HTMLButtonElement>('[data-ip-show]');
  const result = root.querySelector<HTMLElement>('[data-ip-result]');

  if (!button || !result) return;

  button.addEventListener('click', async () => {
    result.innerHTML = Spinner();
    result.classList.remove('ip-viewer__result_error');
    button.disabled = true;

    try {
      const ip = await getIpApi();
      
      result.textContent = `Ваш IP: ${ip}`;
    } catch (error) {
      result.textContent = 'Произошла ошибка при загрузке IP. Попробуйте позже.';
      result.classList.add('ip-viewer__result_error');
    } finally {
      button.disabled = false;
    }
  });
};

export default IpViewer;