# Старый Икарус — Static Site

## Как посмотреть сайт локально

```bash
python -m http.server 8000 --bind 0.0.0.0
# открыть в браузере: http://127.0.0.1:8000/
```

## GitHub Pages

Я добавил GitHub Actions workflow для деплоя статического сайта в GitHub Pages: `.github/workflows/deploy-pages.yml`.

### Что нужно сделать в репозитории GitHub
1. Откройте **Settings → Pages**.
2. В **Build and deployment** выберите **Source: GitHub Actions**.
3. Запушьте изменения в ветку (по умолчанию workflow реагирует на `main`, `master` и `work`).
4. Дождитесь успешного workflow **Deploy static site to GitHub Pages** во вкладке **Actions**.
5. После деплоя сайт будет доступен по URL из шага deploy (или по стандартному `https://<user>.github.io/<repo>/`).

> Важно: так как это проектный сайт в корне репозитория, никаких сборщиков не требуется — деплоится как есть.
