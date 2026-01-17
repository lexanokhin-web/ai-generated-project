# SEO Setup Instructions

## Файлы с настроенным SEO
На данный момент сайт настроен на домен `https://www.wintuss.de`.

### 1. public/sitemap.xml
Все ссылки обновлены на `https://www.wintuss.de/`.

### 2. public/robots.txt
Указан путь: `Sitemap: https://www.wintuss.de/sitemap.xml`.

### 3. Метатеги и Schema.org (Home.jsx, About.jsx и др.)
- `"url": "https://www.wintuss.de"`
- `"image": "https://www.wintuss.de/images/image-1.webp"`
- `<link rel="canonical" href="https://www.wintuss.de/" />`
- Все Open Graph и Twitter теги настроены на `https://www.wintuss.de`

## Favicon (Опционально)

Добавьте иконки сайта в папку `/public`:
- `favicon.ico` (32x32)
- `favicon-16x16.png`
- `favicon-32x32.png`
- `apple-touch-icon.png` (180x180)

Затем раскомментируйте строки в `index.html`:
```html
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
```

## PWA Icons (Опционально)

Для полной PWA поддержки добавьте:
- `/public/images/icon-192.png` (192x192)
- `/public/images/icon-512.png` (512x512)

## После деплоя

1. **Google Search Console**
   - Зарегистрируйте сайт
   - Отправьте sitemap: `https://www.wintuss.de/sitemap.xml`

2. **Bing Webmaster Tools**
   - Зарегистрируйте сайт
   - Отправьте sitemap

3. **Google My Business**
   - Создайте профиль компании
   - Укажите адрес: Jägerstraße 24a, 23909 Ratzeburg
   - Добавьте фотографии работ
   - Подтвердите владение

4. **Проверка разметки**
   - Google Rich Results Test: https://search.google.com/test/rich-results
   - Проверьте LocalBusiness schema

5. **Social Media**
   - Facebook Sharing Debugger: https://developers.facebook.com/tools/debug/
   - Twitter Card Validator: https://cards-dev.twitter.com/validator

## SEO Чеклист

✅ Sitemap.xml создан
✅ Robots.txt создан
✅ LocalBusiness schema добавлен на главную
✅ Open Graph теги на всех страницах
✅ Twitter Card теги
✅ Geo meta tags для локального SEO
✅ PWA manifest
✅ Canonical URLs
✅ Описательные meta descriptions
✅ Структурированные данные services

Для лучшего ранжирования в Lübeck и Schleswig-Holstein:

1. Используйте ключевые слова:
   - "Renovierung Lübeck"
   - "Handwerker Lübeck"
   - "Badsanierung Schleswig-Holstein"
   - "Sanierung Lübeck"

2. Создайте контент:
   - Статьи в блоге про проекты в Lübeck
   - Case studies местных работ
   - Отзывы клиентов из региона (Lübeck, Hamburg)

3. Внешние ссылки:
   - Местные справочники
   - Строительные порталы
   - Партнерские сайты

## Важные координаты (Lübeck)

- Latitude: 53.8655
- Longitude: 10.6866
- Регион: DE-SH (Schleswig-Holstein)
- Город: Lübeck (Центральный фокус SEO)
- Адрес офиса: Jägerstraße 24a, 23909 Ratzeburg (Для юридических данных)
