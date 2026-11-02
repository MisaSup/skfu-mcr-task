# EXPO-04

Переносим проект из **CAT-01** — веб-приложение «Мой IP» — на **React Native**
с помощью **Expo**.

В CAT-01 мы делали простую страницу: кнопка «Показать мой IP», спиннер во время
запроса, IP при успехе и понятное сообщение при ошибке. Теперь соберём то же
самое как мобильное приложение, которое работает на Android, iOS и в веб.

Весь код приложения пишется на **TypeScript**.

## Предварительные требования

- Пройдено задание `task/EXPO-00` (окружение, Expo Go).
- Сделано `task/CAT-01` — или взят шаблон `task/CAT-01-demo`.

## Что нужно сделать

1. Создать новый Expo-проект (TypeScript включён по умолчанию):

   ```bash
   npx create-expo-app@latest IpExpo
   cd IpExpo
   ```

2. Собрать тот же интерфейс, что и в CAT-01: заголовок «Мой IP», область
   результата, кнопка «Показать мой IP».

3. По нажатию кнопки запрашивать IP у **ipify** через `fetch` + `async/await`:

   ```text
   GET https://api.ipify.org?format=json
   → { "ip": "176.52.83.148" }
   ```

4. Реализовать **три состояния интерфейса**, как в CAT-01:

   - **Loading** — пока идёт запрос, показываем спиннер;
   - **Success** — показываем полученный IP;
   - **Error** — показываем понятное сообщение, а не сырой объект ошибки.

5. Вынести запрос в отдельный модуль (`entities/ip/api/getIpApi.ts`), который
   возвращает уже разобранные данные (`data.ip`).

6. Стили — через `StyleSheet`, **mobile-first**.

7. Запустить приложение в **Expo Go** (Android/iOS) и в **веб**.

## Как переносить из веба в React Native

| В CAT-01 (веб) | В React Native |
| --- | --- |
| Шаблонные строки + `innerHTML` | JSX-компоненты |
| `querySelector` + `addEventListener('click', …)` | проп `onPress` у `Pressable` |
| `classList` / ручное обновление текста | состояние через `useState` |
| CSS-файлы рядом с компонентами | `StyleSheet.create` |
| `<div>`, `<span>` | `<View>`, `<Text>` |
| `<button>` | `<Pressable>` |
| CSS-спиннер | `<ActivityIndicator>` |
| `getIpApi.ts` (fetch) | без изменений — тот же `fetch` |

## Требования к структуре

Можно держать ту же архитектуру, что и в CAT-01 (`shared`, `entities`,
`widgets`), а можно упростить:

```text
app/
  _layout.tsx
  index.tsx
components/
  IpViewer.tsx
  Spinner.tsx
entities/
  ip/
    api/
      getIpApi.ts
```

## Критерии готовности

- Приложение запускается в Expo Go (Android/iOS) и в веб.
- По нажатию кнопки виден **спиннер**, пока идёт запрос.
- При успехе отображается **IP-адрес**, при ошибке — **понятное сообщение**.
- Запрос вынесен в отдельный модуль и использует `fetch` + `async/await`.
- Состояние хранится в React (`useState`), а не через DOM.
- Проект на **TypeScript**.

## Работа с ветками

Это отдельное задание, оно **не продолжает** туториал StickerSmash
(EXPO-01–EXPO-03), поэтому ветка создаётся от `task/EXPO-04`:

```bash
git switch -c student/EXPO-04-{ФАМИЛИЯ ИО} task/EXPO-04

# например
git switch -c student/EXPO-04-gorelovma task/EXPO-04
```

Делайте осмысленные коммиты и откройте Pull Request **в ветку `task/EXPO-04`**.

## Как сдать задание

- PR в ветку `task/EXPO-04`.
- В описании PR укажите: `[УНИВЕРСИТЕТ] [ФАМИЛИЯ ИМЯ] [ГРУППА]`.

Подробнее про работу с репозиторием — в [README.md](README.md).

## Ресурсы

- [Expo: документация](https://docs.expo.dev/)
- [Expo Router](https://docs.expo.dev/router/introduction/)
- [React Native: основы](https://reactnative.dev/docs/getting-started)
- [React Native: StyleSheet](https://reactnative.dev/docs/stylesheet)
- [ipify: документация API](https://www.ipify.org/)
- [Исходное задание CAT-01](https://github.com/MisaSup/skfu-mcr-task/tree/task/CAT-01)
- [Презентации курса (Google Drive)](https://drive.google.com/drive/folders/1dQFBPJ4BL9fk2z7Z02mZG_nGh5jGCPN0?usp=sharing)
