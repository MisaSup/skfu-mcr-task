# EXPO-00

Знакомимся с **Expo** — инструментом для разработки мобильных приложений на React Native. В этом задании мы подготовим окружение, в котором дальше будем запускать наши приложения.

## Что нужно сделать

1. Зарегистрировать аккаунт на [expo.dev](https://expo.dev/).
2. Установить приложение **Expo Go** на телефон.
3. Развернуть приложение в Expo Go, следуя официальной инструкции.
4. Изменить любой текст в шаблоне приложения (например, заголовок на главном экране) на свой.

## Развёртывание приложения в Expo Go

Скорее всего, в курсе мы обойдёмся развёртыванием нашего приложения в **Expo Go**. Инструкция для всех возможных вариантов использования (платформа, устройство, режим сборки) — по ссылке:

[https://docs.expo.dev/get-started/set-up-your-environment/?platform=android&device=physical&mode=expo-go&buildEnv=local](https://docs.expo.dev/get-started/set-up-your-environment/?platform=android&device=physical&mode=expo-go&buildEnv=local)

## Если возникает ошибка при получении приложения в Expo Go

Попробуйте следующие команды:

```bash
npx expo start --tunnel
```

или

```bash
npx expo start --tunnel ngrok
```

## Работа с репозиторием

- PR нужно сделать в ветку `task/EXPO-00`.

Подробнее про то, как мы работаем с репозиториями, — в [README.md](README.md).

## Ресурсы

- [Expo: документация](https://docs.expo.dev/)
- [Expo Go](https://expo.dev/go)
- [Expo: установка окружения](https://docs.expo.dev/get-started/set-up-your-environment/)
