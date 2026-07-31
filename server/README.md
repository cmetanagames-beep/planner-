# Lumo backend

Секретные ключи не хранятся в `index.js`. Перед первым запуском скопируйте
`.env.example` в `.env` и заполните `VAPID_PUBLIC_KEY`, `VAPID_PRIVATE_KEY` и
остальные используемые параметры. Файл `.env` исключён из Git.

Этот каталог содержит Node.js API для push-уведомлений, семьи, синхронизации и собственного распознавания речи `whisper.cpp`.

## Запуск

```bash
npm ci
cp .env.example .env
npm start
```

На рабочем VPS процесс запускается через PM2:

```bash
pm2 start index.js --name push
pm2 save
```

Секреты и базы данных не коммитятся. Для голосового API сначала запусти `bash scripts/install-whisper.sh`. Скрипт устанавливает всё в домашний каталог без `sudo`; модель задаётся переменной `WHISPER_MODEL_NAME`, по умолчанию используется многоязычная `base`.
