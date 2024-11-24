# Блог

Тестирую различные технологии, подходы на примере этого блога

## Стек

- Typescript
- React
- Scss

## Технологии

- Webpack
- Storybook
- Babel
- Jest
- Loki
- Eslint
- Stylelint
- Redux

## Методология

Feature-Sliced Design

## Dev возможности

Разработка компонентов в Storybook, поднятие сервера Webpack. Скриншотные тесты Loki, тесты Jest. Настройка линтера. Обработка ошибок с помощью Error boundary. Bundle Alalyzer доступен по: http://127.0.0.1:8888/ после запуска проекта.


## Тесты

- ``test:unit``: запускает unit-тесты в проекте
- ``test:ui``: запускает скриншотные тесты (результаты в папке .loki)
- ``test:ui:json``: создает json для генерации html в команде ``test:ui:html``
- ``test:ui:html``: создает html с наглядным представление различий в скриншотных тестах (запуск в браузере)
- ``test:ui:ok``: принять изменения в скриншотных тестах

## Создание бойлерплейтов для features, pages или entities

Введите команду ``npm run generate:slice <feature|page|entity> <featureName>``

## TODO

1. Реализация бекенд части с авторизацией и регистрацией. (сейчас используется JSON сервер)