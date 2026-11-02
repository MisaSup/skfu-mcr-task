# EXPO-03

Завершаем официальный туториал Expo и приложение **StickerSmash**. Это
**третья, финальная часть** — она продолжает задание **EXPO-02**.

## Предварительные требования

- Полностью пройдены [EXPO-01](https://github.com/MisaSup/skfu-mcr-task/tree/task/EXPO-01)
  и [EXPO-02](https://github.com/MisaSup/skfu-mcr-task/tree/task/EXPO-02):
  есть экран с изображением, выбором эмодзи и наклейкой с жестами.
- Есть своя ветка `student/EXPO-02-{ФАМИЛИЯ ИО}` с кодом из второго этапа.

## Что нужно сделать в EXPO-03

Пройти последние две главы официального туториала:

1. **[Take a screenshot](https://docs.expo.dev/tutorial/screenshot/)** —
   сохранить снимок экрана с наклейкой в медиатеку устройства (в веб — скачать
   файл).
2. **[Configure status bar, splash screen and app icon](https://docs.expo.dev/tutorial/configuration/)** —
   настроить строку состояния, сплэш-экран и иконку приложения.

После этого приложение StickerSmash готово целиком.

## Работа с ветками

EXPO-03 — продолжение EXPO-02, поэтому ветку создаём **от своей ветки
EXPO-02**:

1. Создайте новую ветку от предыдущей:

   ```bash
   git switch -c student/EXPO-03-{ФАМИЛИЯ ИО} student/EXPO-02-{ФАМИЛИЯ ИО}

   # например
   git switch -c student/EXPO-03-gorelovma student/EXPO-02-gorelovma
   ```

2. Делайте осмысленные коммиты по ходу прохождения глав:

   ```bash
   git add .
   git commit -m "student/EXPO-03-gorelovma: chapter 7 screenshot"
   ```

3. Когда EXPO-03 готов, запушьте ветку и откройте Pull Request
   **в ветку `task/EXPO-03`**.

> PR делается отдельно для каждого этапа. Не сливайте все главы в один коммит.

## Как сдать задание

- PR в ветку `task/EXPO-03`.
- В описании PR укажите: `[УНИВЕРСИТЕТ] [ФАМИЛИЯ ИМЯ] [ГРУППА]`.

Подробнее про работу с репозиторием — в [README.md](README.md).

## Ресурсы

- [Туториал Expo: введение](https://docs.expo.dev/tutorial/introduction/)
- [Take a screenshot](https://docs.expo.dev/tutorial/screenshot/)
- [Configure status bar, splash screen and app icon](https://docs.expo.dev/tutorial/configuration/)
- [Исходники StickerSmash](https://github.com/expo/examples/tree/master/stickersmash)
- [Презентации курса (Google Drive)](https://drive.google.com/drive/folders/1dQFBPJ4BL9fk2z7Z02mZG_nGh5jGCPN0?usp=sharing)
