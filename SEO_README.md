# SEO Setup Instructions

## Файлы для замены перед деплоем

Когда у вас будет доменное имя, замените `https://example.com` на ваш реальный домен в следующих файлах:

### 1. public/sitemap.xml
Заменить все вхождения `https://example.com` на ваш домен.

### 2. public/robots.txt
Заменить `Sitemap: https://example.com/sitemap.xml` на ваш домен.

### 3. src/pages/Home.jsx
В объекте `localBusinessSchema` и метатегах Helmet:
- `"url": "https://example.com"`
- `"image": "https://example.com/images/image-1.png"`
- `<link rel="canonical" href="https://example.com/" />`
- Все Open Graph и Twitter meta tags с `https://example.com`

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
   - Отправьте sitemap: `https://ваш-домен.com/sitemap.xml`

2. **Bing Webmaster Tools**
   - Зарегистрируйте сайт
   - Отправьте sitemap

3. **Google My Business**
   - Создайте профиль компании
   - Укажите адрес: Bachstraße 36, 23909 Ratzeburg
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

## Локальное SEO

Для лучшего ранжирования в Ratzeburg и Schleswig-Holstein:

1. Используйте ключевые слова:
   - "Renovierung Ratzeburg"
   - "Handwerker Ratzeburg"
   - "Badsanierung Schleswig-Holstein"
   - "Sanierung Ratzeburg"

2. Создайте контент:
   - Статьи в блоге про проекты в Ratzeburg
   - Case studies местных работ
   - Отзывы клиентов из региона

3. Внешние ссылки:
   - Местные справочники
   - Строительные порталы
   - Партнерские сайты

## Важные координаты

- Latitude: 53.7044
- Longitude: 10.7614
- Регион: DE-SH (Schleswig-Holstein)
- Город: Ratzeburg
- Индекс: 23909
