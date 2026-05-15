# Zahradnictví Franklová – Žatčany (web)

Statický web pro rodinné **Zahradnictví Jiřiny Franklové** v Žatčanech u Brna.
Vytvořeno na základě veřejně dostupných zdrojů (obecní web Žatčany, ujezdubrna.cz,
zahradnictvi-zatcany.webnode.cz, ceskestavby.cz).

## Soubory

- `index.html` – úvodní stránka (hero, o nás, výběr sortimentu, kontakt teaser)
- `sortiment.html` – kategorie sortimentu (muškáty, rajčata, papriky, melouny, letničky, trvalky, doplňky)
- `sluzby.html` – služby (řez, výsadby, vyvýšené záhony, vazby, věnce, poradenství)
- `galerie.html` – fotogalerie s lightboxem
- `kontakt.html` – kontakt, otevírací doba, mapa, FAQ
- `styles.css` – styly (zelená paleta, responzivní layout)
- `script.js` – lightbox + dynamický rok v patičce

## Zdroje informací

- https://ujezdubrna.cz/spol/zahradnictvi-franklova-jirina
- https://obeczatcany.cz/index.php?action=view&desktop=clanky&id=2492
- https://zahradnictvi-zatcany.webnode.cz/
- https://www.ceskestavby.cz/firmy/jirina-franklova.html

## Obrázky

Fotografie jsou ilustrační – načítají se z volné fotobanky Unsplash
(licence dovoluje použití na webech). Pro produkční nasazení doporučujeme
nahradit vlastními fotkami ze skleníku.

## Spuštění lokálně

Stačí otevřít `index.html` v prohlížeči, nebo:

```bash
python3 -m http.server 8000
```

a otevřít `http://localhost:8000`.
