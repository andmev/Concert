# MainStage: перший test Concert та import одного backing track

## Мета

Використати фактичну структуру шаблону `8 Backing Tracks` для import одного stereo WAV у перший Playback strip. На цьому етапі не налаштовуються педаль, автоматичні переходи, повтор приспіву, гітара, вокал або концерт із 25 пісень.

## Результат, який має бути наприкінці

У MainStage існує збережений `Backing Tracks — TEST.concert` з Patch `01 — Цілуються хмари`. У його першому Playback strip завантажено `Цілуються-хмари_BT_stereo_24bit.wav`, `Sync` вимкнено, а фізичне відтворення через акустику ще не запускалося.

## Передумови

- WAV-файл пройшов desktop listening test: `Pass`; див. [картку пісні](song-records/01-tsiluyutsia-khmary.md).
- CQ-12T підключений через USB, обраний у MainStage без помилки, а CQ, MainStage і macOS погоджені на `96 kHz`; див. [реєстр сумісності](04-compatibility-register.md).
- У тебе є доступ до WAV-файлу у Finder.
- Перед першим запуском playback вихідний рівень CQ-12T та активної колонки буде низьким або колонка буде вимкнена; див. [правила безпеки](05-audio-safety-and-power.md#cable-safety-rules).

## Офіційні джерела

- [Apple: Overview of Edit mode](https://support.apple.com/guide/mainstage/overview-of-edit-mode-mstg9b39ca1c/3.5/mac/10.15), перевірено 2026-07-26 — в `Edit mode` додають і організовують patches та channel strips.
- [Apple: MainStage release notes](https://support.apple.com/en-us/101568), перевірено 2026-07-26 — офіційно згадує шаблон `8 Backing Tracks` у поточних release notes.
- [Apple: Add patches in MainStage](https://support.apple.com/guide/mainstage/add-patches-mstg9da503fa/mac), перевірено 2026-07-26 — кнопка `Add Patch` (`+`) розміщена у верхньому правому куті `Patch List`; джерело використаємо лише після перевірки фактичного вмісту шаблону.
- [Apple: Add a Playback plug-in](https://support.apple.com/nl-nl/guide/mainstage/mstgd241cc7c/mac), перевірено 2026-07-26 — audio file можна перетягнути до Instrument slot з Playback plug-in; це завантажує файл у наявний Playback instance.
- [Apple: Playback Sync, Snap To, and Play From](https://support.apple.com/guide/mainstage/mainstage-playback-sync-snap-play-parameters-mstge93aad2f/mac), перевірено 2026-07-26 — при `Sync: Off` файл відтворюється у своєму recorded tempo.

## Важливе рішення цього тесту

У фактичному template є один Concert `Untitled Concert`, одна Patch `Song One` і вісім Playback strips `Track 1`–`Track 8`, усі виведені до `Main`. Для одного готового stereo backing track використовуємо **лише `Track 1`**. `Track 2`–`Track 8`, Aux sends та інші routing controls не змінюємо. Після import встановлюємо `Sync: Off`, щоб файл ішов у своєму записаному темпі. Це не остаточне рішення для повтору приспіву.

## Кроки

```mermaid
flowchart LR
    File["WAV пройшов desktop listening test"] --> Template["8 Backing Tracks: Song One + Track 1–8"]
    Template --> Save["Зберегти TEST.concert"]
    Save --> Rename["Song One → 01 — Цілуються хмари"]
    Rename --> Load["Завантажити WAV у Playback: Track 1"]
    Load --> Sync["Sync: Off"]
    Sync --> ImportPass["Import test: Pass"]
```

### 1. Створи ізольований test Concert з перевіреного шаблону

1. Відкрий MainStage.
2. Якщо MainStage показує вибір шаблону для нового Concert, вибери **`8 Backing Tracks`**.
3. Якщо MainStage вже відкрив інший Concert, у menu bar вибери `File > New`, а в діалозі — **`8 Backing Tracks`**.
4. Відразу збережи новий Concert: `File > Save`.
5. Назви його, наприклад, `Backing Tracks — TEST.concert`. Збережи окремо від оригінального Logic Pro project і майбутнього основного Concert.

**Перевірка:** у title bar MainStage видно назву test Concert.

### 2. Збережи Concert і перейменуй єдину Patch

На зафіксованому екрані видно `Untitled Concert` і одну Patch `Song One`.

1. У menu bar вибери `File > Save`.
2. Назви файл `Backing Tracks — TEST.concert` і збережи його окремо від Logic Pro project.
3. У `Patch List` зліва двічі натисни `Song One`.
4. Впиши: `01 — Цілуються хмари`.
5. Натисни `Return`.

**Перевірка:** зліва під Concert показано `01 — Цілуються хмари`.

### 3. Завантаж WAV тільки в `Track 1`

На screenshot центральний mixer уже містить вісім Playback strips `Track 1`–`Track 8`. Не додавай новий channel strip.

1. Відкрий Finder і знайди `Цілуються-хмари_BT_stereo_24bit.wav`.
2. Розмісти Finder так, щоб він не закривав центральний mixer MainStage.
3. Переконайся, що вибрана Patch `01 — Цілуються хмари`.
4. У центральному mixer знайди **перший** strip, підписаний `Track 1`.
5. Перетягни WAV із Finder точно на його зелену кнопку/slot `Playback`.
6. Не відпускай файл на `Track 2`–`Track 8`, `Main`, `Aux`, `Patch List` або `Workspace`.

**Очікуваний результат:** MainStage завантажує WAV у Playback instance `Track 1`. Інші сім tracks залишаються без файлів.

### 4. Перевір файл у Playback та встанови `Sync: Off`

1. У `Track 1` натисни зелену кнопку `Playback`, щоб відкрити вікно plug-in.
2. Знайди поле `File` і переконайся, що воно показує `Цілуються-хмари_BT_stereo_24bit.wav`.
3. Знайди `Sync` і встанови значення `Off`.
4. Не змінюй `Snap To`, `Play From`, markers, Aux sends, рівні `Track 1` або `Main`.
5. Закрий вікно plug-in звичайною червоною кнопкою macOS, потім виконай `File > Save`.

**Import test: Pass**, якщо файл видно у `Track 1` без повідомлення про помилку.

## Типові проблеми

| Симптом | Безпечна дія |
| --- | --- |
| Немає `8 Backing Tracks` у списку | Не вибирай схожий template. Зафіксуй повний список template Concerts і версію MainStage. |
| Після вибору template MainStage показує warning | Не змінюй параметри. Зафіксуй точний текст warning та screenshot. |
| Файл завантажився не в `Track 1` | Не запускай playback. Видали файл лише з помилкового Playback instance через його офіційне `Remove File`, потім повтори import у `Track 1`. |
| Не видно поля `File` або `Sync` | Переконайся, що відкрито вікно plug-in `Playback` саме на `Track 1`, а не загальні settings Patch або Channel Strip. |

## Межа цього документа

Цей документ завершується import test. Тільки після `Pass` створюється окрема процедура безпечного фізичного playback test через CQ-12T. Це навмисно не змішує перевірку файлу з перевіркою кабелів, виходів і рівнів.

## Стан після першого фактичного запуску

Для `Цілуються хмари` import пройшов, але після натискання `Play` у Playback звуку не було чутно. Це не є результатом `Pass` або `Fail` самого WAV: файл уже завантажено коректно. Потрібен окремий test усієї signal chain, описаний у [реєстрі сумісності](04-compatibility-register.md). До цього не змінювати template tracks, Aux, Metronome чи USB routing.

## Журнал змін

- 2026-07-26 — шаблон `Empty Concert` вилучено як непідтверджений. Фактичний список MainStage 4.3 користувача містить `8 Backing Tracks`.
- 2026-07-26 — screenshot користувача зафіксував фактичну структуру template: `Untitled Concert`, `Song One`, `Track 1`–`Track 8` із Playback та виходом до `Main`. Процедура import оновлена під цю структуру.
