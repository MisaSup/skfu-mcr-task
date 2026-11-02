# EXPO-02

Продолжаем официальный туториал Expo и приложение **StickerSmash**. Это
**вторая часть из трёх** — она продолжает задание **EXPO-01**.

## Предварительные требования

- Полностью пройдено [EXPO-01](https://github.com/MisaSup/skfu-mcr-task/tree/task/EXPO-01):
  приложение создано, добавлена навигация, собран первый экран.
- Есть своя ветка `student/EXPO-01-{ФАМИЛИЯ ИО}` с кодом из первого этапа.

## Что нужно сделать в EXPO-02

Пройти главы 4, 5 и 6 официального туториала:

1. **[Use an image picker](https://docs.expo.dev/tutorial/image-picker/)** —
   дать пользователю выбрать изображение из медиатеки (`expo-image-picker`) и
   показать его на экране.
2. **[Create a modal](https://docs.expo.dev/tutorial/create-a-modal/)** —
   сделать нижнюю панель (bottom sheet) с выбором эмодзи, список эмодзи и
   наклейку-эмодзи поверх изображения.
3. **[Add gestures](https://docs.expo.dev/tutorial/gestures/)** —
   добавить жесты к наклейке: масштабирование двойным тапом и перетаскивание.

Код продолжаем писать вместе с туториалом, поверх кода из EXPO-01.

## Работа с ветками

EXPO-02 — продолжение EXPO-01, поэтому ветку создаём **от своей ветки
EXPO-01**, а не от `main`:

1. Создайте новую ветку от предыдущей:

   ```bash
   git switch -c student/EXPO-02-{ФАМИЛИЯ ИО} student/EXPO-01-{ФАМИЛИЯ ИО}

   # например
   git switch -c student/EXPO-02-gorelovma student/EXPO-01-gorelovma
   ```

2. Делайте осмысленные коммиты по ходу прохождения глав:

   ```bash
   git add .
   git commit -m "student/EXPO-02-gorelovma: chapter 4 image picker"
   ```

3. Когда EXPO-02 готов, запушьте ветку и откройте Pull Request
   **в ветку `task/EXPO-02`**.

4. Для следующего задания создавайте ветку **от своей ветки EXPO-02**:

   ```bash
   git switch -c student/EXPO-03-{ФАМИЛИЯ ИО} student/EXPO-02-{ФАМИЛИЯ ИО}
   ```

> PR делается отдельно для каждого этапа. Не сливайте все главы в один коммит.

## Как сдать задание

- PR в ветку `task/EXPO-02`.
- В описании PR укажите: `[УНИВЕРСИТЕТ] [ФАМИЛИЯ ИМЯ] [ГРУППА]`.

Подробнее про работу с репозиторием — в [README.md](README.md).

## Ресурсы

- [Туториал Expo: введение](https://docs.expo.dev/tutorial/introduction/)
- [Use an image picker](https://docs.expo.dev/tutorial/image-picker/)
- [Create a modal](https://docs.expo.dev/tutorial/create-a-modal/)
- [Add gestures](https://docs.expo.dev/tutorial/gestures/)
- [Исходники StickerSmash](https://github.com/expo/examples/tree/master/stickersmash)
- [Презентации курса (Google Drive)](https://drive.google.com/drive/folders/1dQFBPJ4BL9fk2z7Z02mZG_nGh5jGCPN0?usp=sharing)
