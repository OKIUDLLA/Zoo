# MASTER PROMPT – Web pro Zahradnictví Franklová Žatčany

> Tento prompt je samostatný brief. Vlož ho jako úvodní zprávu do nového sezení (Claude.ai, Claude Code, Cursor, jiný AI agent). Pokud máš plná práva zápisu do adresáře, agent dokončí web v jednom průchodu.

---

## 1. KONTEXT A CÍL

Postav **moderní statický web** pro rodinné zahradnictví **Jiřiny Franklové** v Žatčanech u Brna. Firma nemá vlastní stránku – existuje jen profil na obecním webu a v katalozích. Cílem je profesionální online prezentace, kterou zvládne provozovat technicky nezdatný majitel (statické HTML, žádný build, žádné CMS).

**Publikum:** zákazníci z jižní Moravy (Brno, Újezd u Brna, okolí), hledající sadbu, květiny a vazby.

**Tón:** vřelý, lidský, řemeslný, lehce nostalgický – „rodinné zahradnictví, kde víme, co prodáváme". Žádné korporátní fráze.

---

## 2. OVĚŘENÁ FAKTA O FIRMĚ

**Nepřidávej nic, co nemáš v této sekci.** (Žádný rok založení, žádné „X let zkušeností", žádné fake recenze.)

| Pole | Hodnota |
|---|---|
| Název | ZAHRADNICTVÍ – Jiřina Franklová |
| Provozovna | Skleník v areálu bývalého ZD |
| Adresa | Žatčany 28, 664 53 Žatčany |
| Telefon | 776 030 447 (+420776030447) |
| E-mail | jirina.franklova@seznam.cz |
| GPS (cca) | 49.0763 N, 16.7670 E |
| Otevírací doba | Po–Pá 9:00–11:00 a 13:00–17:00; So 8:00–17:00; Ne a mimo dobu po dohodě |

### Sortiment (z webu obce Žatčany)
- **Muškáty** – stálá cena **25 Kč/ks**, vzpřímené i převislé
- **Voskovky**
- **Sadba rajčat – 8 odrůd** (cherry, koktejlová, tyčková salátová a masitá, keříčková do truhlíku)
- **Sadba paprik – 10 odrůd** (kápie, kalifornky, beraní rohy, feferony, chilli)
- **Roubované melouny**
- **Letničky a balkónové rostliny** (surfinie, petúnie, voskovky, begonie, verbeny, lobelky)
- **Trvalky a okrasné dřeviny** (levandule, hortenzie, růže, traviny, jehličnany, ovocné stromky)
- **Pokojovky**
- **Substráty, hnojiva, postřiky, truhlíky, květináče, keramika**

**USP:** *„Pěstujeme si rostliny sami – proto u nás nakoupíte výhodněji než v běžných květinářstvích."*

### Služby
1. Stříhání živých plotů (túje, habry, ptačí zob, tisy)
2. Řez ovocných stromů (jabloně, hrušně, slivoně, peckoviny)
3. Řez okrasných dřevin a růží
4. Výsadby zahrad a předzahrádek
5. Vyvýšené záhony na míru (dřevěné)
6. Svatební kytice, korsáže, výzdoba
7. Smuteční vazby, věnce, srdce
8. Adventní věnce ruční výroby, dušičkové vazby
9. Odborné poradenství

---

## 3. ZDROJE (citace)

- https://ujezdubrna.cz/spol/zahradnictvi-franklova-jirina
- https://obeczatcany.cz/index.php?action=view&desktop=clanky&id=2492
- https://zahradnictvi-zatcany.webnode.cz/
- https://www.ceskestavby.cz/firmy/jirina-franklova.html

Firma **nemá** Facebook ani Instagram (ověřeno).

---

## 4. STRUKTURA VÝSTUPU

```
/index.html        – Úvod (hero, představení, sortiment teaser, kontakt teaser, motto)
/sortiment.html    – 7 kategorií s alternujícím layoutem + CTA pruh
/sluzby.html       – 9 servisních karet + 4krokový proces + dvojité CTA
/galerie.html      – 12 fotek (masonry mřížka) + lightbox s prev/next
/kontakt.html      – 4 kontaktní karty + OpenStreetMap embed + 5 FAQ
/styles.css        – jeden CSS soubor (~470 řádků)
/script.js         – jeden JS soubor (~140 řádků)
/robots.txt        – Allow + odkaz na sitemap
/sitemap.xml       – 5 URL s prioritami
```

**Bez build kroku.** Žádný npm, Vite, ani SASS. Otevíratelné dvojklikem na `index.html`.

---

## 5. DESIGN SYSTÉM

### Paleta
```css
--green-950:#14241a;  --green-900:#1f3a2b;  --green-800:#28503a;
--green-700:#326b4b;  --green-600:#4a8a64;  --green-500:#6aae84;
--green-200:#cfe1d4;  --green-100:#e8f1ea;  --green-50:#f3f8f4;
--cream:#faf6ee;      --sand:#f1ead9;       --gold:#c8a25b;
--ink:#1d2622;        --muted:#5d6b62;      --line:#e3ddcd;
```

### Typografie
- **Nadpisy:** Cormorant Garamond 500/600/700 (Google Fonts)
- **Text:** Inter 300/400/500/600 (Google Fonts)
- H1: clamp(2.4rem, 5vw, 3.8rem) · line-height 1.12
- Body: 1.6 line-height, 16px base

### UI tokeny
- Border-radius: `--radius-sm:10px; --radius:18px; --radius-lg:26px;`
- Shadows: 3 úrovně (`-sm`, normal, `-lg`)
- Easing: `cubic-bezier(.2,.8,.2,1)`
- Container: `max-width:1180px; padding:0 24px;`

### Komponenty
- **`.eyebrow`** – malý text v capslocku se zlatou linkou před textem
- **`.btn`** primary (zelený) / ghost (obrys) / pill (zlatý)
- **`.feature-card`** s ikonkou v zeleném čtverci
- **`.product`** karta s obrázkem 5:4
- **`.cat-row`** alternující 2sloupcový layout (`.reverse`)
- **`.visual-card`** obrázek s tmavým badge v rohu
- **`.status-pill`** s pulzující tečkou (zelená = otevřeno, oranžová = zavřeno)

### Sekce
- `.section` (90px padding)
- `.section-muted` (sand pozadí)
- `.section-dark` (`--green-900`, decorative blob)
- `.page-hero` (světlý gradient pozadí)
- `.hero` (full-bleed, 92vh, dark overlay nad obrázkem)

---

## 6. KLÍČOVÉ INTERAKCE (JS)

```js
// 1. Footer year auto-fill
document.querySelectorAll('#year').forEach(el => el.textContent = new Date().getFullYear());

// 2. Mobile nav toggle (hamburger)
// 3. Status pill — spočte z aktuálního času: 
//    Po–Pá 9–11 a 13–17, So 8–17, Ne dle dohody
//    Vrátí { open: bool, label: "Otevřeno · do 17:00" / "Zavřeno · otevírá v 9:00" }
// 4. Highlight dnešního dne v tabulce hodin (přidá .today)
// 5. IntersectionObserver pro .reveal → .in (opacity + translateY)
// 6. Back-to-top tlačítko (visible po 600px scroll)
// 7. Lightbox: 
//    - kliknutí na .g-item otevře
//    - prev/next tlačítka + ← → klávesy + Esc
//    - počítadlo "3 / 12"
//    - body-lock při otevření
// 8. Image fallback: 
//    .img wrapper má CSS gradient + emoji v ::after,
//    JS přidá .failed pokud img.naturalWidth === 0
```

---

## 7. SEO & ACCESSIBILITY (POVINNÉ)

- **Inline SVG favicon** (zelený čtverec s zlatou kapkou) jako `data:image/svg+xml,...`
- **Open Graph + Twitter card meta** na index
- **JSON-LD `LocalBusiness`** na index s adresou, telefonem, geo, openingHoursSpecification
- **Canonical** link na každé stránce
- **`lang="cs"`**, **`<meta name="theme-color" content="#28503a">`**
- **Skip-link** `.skip` na začátku body
- **`:focus-visible`** outline 3px solid var(--gold)
- **`aria-label`** na nav, lightbox, hamburger, back-to-top
- **`loading="lazy"`** na všech img kromě hero
- **`alt`** atribut popisující obsah, ne dekorace
- **`prefers-reduced-motion`** → vypne animace
- **Print styly** (vypnou header/footer/lightbox)

---

## 8. OBRÁZKY (OVĚŘENÉ Unsplash IDs)

**KAŽDÝ URL DOLE byl ověřen `curl -I` → HTTP 200 a vizuálně zkontrolován náhledem.** Použij přesně tyto. Pokud chceš jiné, *nejdřív* ověř `curl -o /dev/null -w "%{http_code}" "https://images.unsplash.com/<id>?w=200"` a stáhni si náhled pro vizuální kontrolu.

Formát URL: `https://images.unsplash.com/<id>?auto=format&fit=crop&w=<šířka>&q=80`

| Účel | Photo ID | Co fotka zobrazuje |
|---|---|---|
| Hero úvodu | `photo-1585320806297-9794b3e4eeae` | Zahrada s pěšinou mezi květinami |
| Muškáty | `photo-1582794543139-8ac9cb0f7b11` | Růžové růže (nejbližší dostupné) |
| Sadba rajčat | `photo-1592924357228-91a4daadcfea` | Tři rajčata na révě |
| Sadba paprik | `photo-1530836369250-ef72a3f5cda8` | Sazenice ve sadbovači + ruka |
| Letničky | `photo-1597848212624-a19eb35e2651` | Slunečnice |
| Roubované melouny | `photo-1587049352846-4a222e784d38` | Vodní meloun |
| Trvalky | `photo-1469259943454-aa100abba749` | Levandulové pole |
| Pokojovky / keramika | `photo-1465379944081-7f47de8d74ac` | Monstera v hrnku |
| Vyvýšený záhon | `photo-1591857177580-dc82b9ac4e1e` | Vyvýšený dřevěný záhon |
| Visual card „Najdete nás" | `photo-1611843467160-25afb8df1074` | Ruce při výsadbě |
| Vazba / kytice | `photo-1455659817273-f96807779a8a` | Pestrá svatební kytice |
| Záhon (galerie) | `photo-1457530378978-8bac673b8062` | Zelený keř / zahrada |

### Fallback strategie
Každý `<img>` zabal do `<div class="img" data-fallback="🌸">…</div>`. CSS:
```css
.img{position:relative;background:linear-gradient(135deg,#6aae84,#28503a)}
.img::after{content:attr(data-fallback);position:absolute;inset:0;
  display:grid;place-items:center;color:rgba(255,255,255,.85);
  font-size:3rem;opacity:0;transition:opacity .3s}
.img.failed::after{opacity:1}
.img.failed img{opacity:0}
```
JS přidá `.failed`, pokud `img.naturalWidth === 0` po `error`.

---

## 9. MAPA (KRITICKÉ – NEVYMÝŠLEJ ODKAZ)

Použij **OpenStreetMap embed** (funguje bez API klíče):

```html
<iframe
  src="https://www.openstreetmap.org/export/embed.html?bbox=16.7470%2C49.0660%2C16.7870%2C49.0860&layer=mapnik&marker=49.0763%2C16.7670"
  loading="lazy" allowfullscreen
  referrerpolicy="no-referrer-when-downgrade"
  title="Mapa – Žatčany 28"></iframe>
```

Pod mapou tři externí odkazy: Mapy.cz (`https://mapy.cz/zakladni?q=Žatčany+28`), Google Mapy (`https://www.google.com/maps/search/?api=1&query=Žatčany+28`), OSM.

---

## 10. ČEHO SE VYVAROVAT (chyby z první verze)

❌ **Smyšlený rok založení** (firma žádný veřejně uvedený nemá)
❌ **„30+ let zkušeností"** / „od roku 1995" – nezakládá se na zdrojích
❌ **Falešné recenze v uvozovkách od „spokojených zákazníků"**
❌ **`frame.mapy.cz/s/megemozesa`** – tento odkaz neexistuje
❌ **Nav, která na mobilu zmizí bez hamburgru**
❌ **Pevný odkaz na fotku bez ověření, že HTTP 200**
❌ **Obrázky muškátů/paprik/skleníku nemíchat s bramborami/ohni/lopatičkami** (=> vždy stáhni náhled a zkontroluj očima)
❌ **JSON-LD bez geo, otevírací doby a IČO/adresy**
❌ **Inline styly v každém elementu** (jen tam, kde to dává smysl – CSS class first)
❌ **Tag balance** – ujisti se, že `<div>` páry sedí (`grep -c "<div" file = grep -c "</div" file`)

---

## 11. CO MÁ AGENT PROAKTIVNĚ DĚLAT

1. **Ověř každé Unsplash ID** přes `curl -s -o /dev/null -w "%{http_code}" "URL"`. Pokud kterýkoli vrátí 404, ohlas a zeptej se na náhradu.
2. **Stáhni 3–5 fotek a otevři je** (Read tool s image podporou), zkontroluj že obsah sedí.
3. **Spusť `python3 -m http.server 8000`** a curl-em otestuj všech 5 HTML cest (každá vrátí 200).
4. **Validuj párování tagů** přes `grep -c "<tag"` vs `grep -c "</tag"`.
5. Pokud máš dostupný **headless prohlížeč** (Playwright, Chromium), pořiď screenshot každé stránky a doruč ho uživateli.
6. **Commitni** s popisným messagem, **nepush**uj, dokud uživatel neřekne.

---

## 12. CO DORUČIT NA KONCI

- Všech 9 souborů v jednom adresáři
- Audit checklist (markdown), co bylo ověřeno (HTTP statusy fotek, tag balance, použitá schémata)
- Pokyny ke spuštění:
  - **Lokálně:** dvojklik na `index.html`, případně `python3 -m http.server`
  - **Veřejně zdarma:** přetáhnout složku na app.netlify.com/drop nebo zapnout GitHub Pages
- 1–2 screenshoty, pokud jsi měl prohlížeč

---

## 13. ROZSAH ZMĚN VŮČI ZÁKLADU

Pokud uživatel chce **rozšířit nad tento prompt**, držte se konzervativně: žádné AJAX, žádný framework, žádný cookie banner (web nesbírá data), žádný online objednávkový formulář (firma to neumí obsloužit – stačí tel/e-mail/`mailto:` CTA).

---

## STARTOVNÍ ZPRÁVA (zkopíruj přesně, pokud chceš jednoduchý start)

> Postav statický web podle přiloženého master promptu. Před psaním HTML mi ohlas 3 věci: (1) potvrzení, že máš plná práva zápisu do adresáře `./web/`, (2) výsledek `curl` ověření všech 12 Unsplash IDs, (3) výsledek `python3 --version`, abys mohl pustit lokální server. Pak začni od `styles.css`.
