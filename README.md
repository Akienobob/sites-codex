# Старый Икарус — Static Site

## Как посмотреть сайт локально

```bash
python -m http.server 8000 --bind 0.0.0.0
# открыть в браузере: http://127.0.0.1:8000/
```

## GitHub Pages

В репозитории настроен деплой через GitHub Actions: `.github/workflows/deploy-pages.yml`.

### Быстрый чеклист (если видите 404)
1. **Settings → Pages → Source = GitHub Actions** (не Deploy from branch).
2. Во вкладке **Actions** workflow **Deploy static site to GitHub Pages** должен завершиться `✅`.
3. Открывайте правильный URL:
   - для project pages: `https://<user>.github.io/<repo>/`
   - для user/org pages: `https://<user>.github.io/`
4. Проверьте, что репозиторий публичный (или у аккаунта/плана есть доступ к Pages для private repo).
5. После первого успешного деплоя подождите 1–3 минуты и обновите страницу.

### Что сделано для устойчивости деплоя
- В артефакт публикуется только папка `_site` с явным `index.html`.
- Добавлен `.nojekyll`, чтобы GitHub Pages не применял Jekyll-обработку.
- Добавлен `404.html` с редиректом на `index.html`.


## Публикация (чтобы сайт был реально виден)

1. Запушьте ветку с изменениями на GitHub.
2. Создайте PR и **смержьте его в ветку, которая триггерит Pages workflow** (`main`, `master` или `work`).
3. Убедитесь, что в **Actions** job `Deploy static site to GitHub Pages` завершился успешно.
4. Откройте URL Pages из шага `Deploy to GitHub Pages` (поле `page_url`).

Если PR не смержен в удалённом репозитории, сайт на GitHub Pages не обновится.
