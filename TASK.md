# EXPO-01

Продолжаем знакомство с **Expo**. В заданиях **EXPO-01 – EXPO-03** мы пройдём
официальный туториал Expo и соберём приложение **StickerSmash**, которое
работает на Android, iOS и в веб.

Это **первая часть из трёх**. Задания проходятся строго по порядку: каждый
следующий этап продолжает предыдущий.

## Предварительные требования

- Пройдено задание [`task/EXPO-00`](https://github.com/MisaSup/skfu-mcr-task/tree/task/EXPO-00) —
  окружение настроено, приложение запускается в Expo Go.

## Как устроена серия EXPO

Туториал состоит из 8 глав. Мы разбили его на три задания:

| Задание | Главы туториала |
| --- | --- |
| **EXPO-01** | 1. Create your first app · 2. Add navigation · 3. Build a screen |
| EXPO-02 | 4. Use an image picker · 5. Create a modal · 6. Add gestures |
| EXPO-03 | 7. Take a screenshot · 8. Configure status bar, splash screen and app icon |

Проходить нужно **по порядку**: сначала полностью EXPO-01, затем EXPO-02, затем
EXPO-03.

## Что нужно сделать в EXPO-01

Пройти первые три главы официального туториала:

1. **[Create your first app](https://docs.expo.dev/tutorial/create-your-first-app/)** —
   создать проект StickerSmash, скачать ассеты, выполнить `reset-project`,
   запустить приложение на телефоне и в веб, изменить первый экран.
2. **[Add navigation](https://docs.expo.dev/tutorial/add-navigation/)** —
   добавить stack-навигацию и нижние табы через Expo Router.
3. **[Build a screen](https://docs.expo.dev/tutorial/build-a-screen/)** —
   собрать первый экран: `expo-image`, `Pressable`, переиспользуемые компоненты
   и нативные кнопки из Expo UI.

Код пишите **вместе с туториалом**, а не копируйте готовый проект целиком: так
вы разберётесь, как всё устроено.

## Работа с ветками

Серия EXPO устроена как **цепочка веток**: каждый этап продолжает предыдущий.

1. Создайте свою рабочую ветку от ветки задания:

   ```bash
   git switch -c student/EXPO-01-{ФАМИЛИЯ ИО} task/EXPO-01

   # например
   git switch -c student/EXPO-01-gorelovma task/EXPO-01
   ```

2. Делайте осмысленные коммиты по ходу прохождения глав:

   ```bash
   git add .
   git commit -m "student/EXPO-01-gorelovma: chapter 1 create app"
   ```

3. Когда EXPO-01 готов, запушьте ветку и откройте Pull Request
   **в ветку `task/EXPO-01`**.

4. Для следующего задания создавайте ветку **от своей ветки EXPO-01**, а не от
   `main`:

   ```bash
   git switch -c student/EXPO-02-{ФАМИЛИЯ ИО} student/EXPO-01-{ФАМИЛИЯ ИО}
   ```

   PR при этом идёт в `task/EXPO-02`. Для EXPO-03 — аналогично, от EXPO-02.

> Важно: нельзя выполнить весь туториал одним коммитом в одной ветке. Нужно три
> отдельных этапа с Pull Request после каждого — так виден прогресс.

## Как сдать задание

- PR в ветку `task/EXPO-01`.
- В описании PR укажите: `[УНИВЕРСИТЕТ] [ФАМИЛИЯ ИМЯ] [ГРУППА]`.

Подробнее про работу с репозиторием — в [README.md](README.md).

## Ресурсы

- [Туториал Expo: введение](https://docs.expo.dev/tutorial/introduction/)
- [Create your first app](https://docs.expo.dev/tutorial/create-your-first-app/)
- [Add navigation](https://docs.expo.dev/tutorial/add-navigation/)
- [Build a screen](https://docs.expo.dev/tutorial/build-a-screen/)
- [Исходники StickerSmash](https://github.com/expo/examples/tree/master/stickersmash)
- [Презентации курса (Google Drive)](https://drive.google.com/drive/folders/1dQFBPJ4BL9fk2z7Z02mZG_nGh5jGCPN0?usp=sharing)
