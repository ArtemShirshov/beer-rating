# Beer rating
[![Netlify Status](https://api.netlify.com/api/v1/badges/8b6ac487-319b-4d11-9499-4ea81e863e06/deploy-status)](https://app.netlify.com/sites/beer-rating/deploys)

## Основные свойства

```json
{
  "title": "Название",
  "img": "Изображение",
  "description": "Описание",
  "region": {
    "city": "Город",
    "country": "Страна"
  },
  "fortress": "Крепость",
  "volume": "Объем",
  "note": "Заметка",
  "rating": "Рейтинг по 10 больной шкале с шагом в 0.5",
  ...
}
```

## property

`bitterness` — На сколько горькое пиво.

`hangover` — Похмелье после пива.

`lightness` — Легкость пива. 

Максимальное значение 5, минимальное 0.

```json
{
  ...
  "property": [
    {
      "key": "bitterness",
      "level": "1"
    },
    {
      "key": "hangover",
      "level": "1"
    },
    {
      "key": "lightness",
      "level": "5"
    }
  ]
}
```
