# Журнал зовнішньої перевірки

Цей журнал доводить, що технічні твердження не з’явилися з пам’яті або припущень. Перед новим практичним документом додай запис: дата, конкретний Brave query, офіційні URL, що саме джерело підтверджує, та окремо — неофіційні практичні приклади.

```mermaid
flowchart LR
    Query["Brave query"] --> Official["Офіційний URL"]
    Official --> Claim["Конкретне підтверджене твердження"]
    Claim --> Doc["Документ проєкту"]
    Practice["Практичний приклад<br/>виконавця"] -. "не замінює джерело" .-> Doc
```

## 2026-07-26 — перевірка стартових документів

### Brave Web Search

**Query:** `site:support.apple.com MainStage 4.3 audio interface preferences Playback plug-in markers`

**Офіційні результати, використані в документації:**

- [MainStage Playback interface](https://support.apple.com/en-bh/guide/mainstage/mstg93cd8d05/mac) — markers у Playback plug-in і функції групового керування.
- [MainStage Playback Sync, Snap To, and Play From parameters](https://support.apple.com/guide/mainstage/mainstage-playback-sync-snap-play-parameters-mstge93aad2f/mac) — поведінка `Current Marker`, `Wait for Marker` і вимоги tempo information для Sync.
- [MainStage release notes](https://support.apple.com/101568) — актуальні виправлення, що стосуються Playback та markers.
- [If MainStage isn't working](https://support.apple.com/en-us/101941) — `MainStage > Preferences > Audio` і вимога сумісності зовнішнього audio/MIDI interface з версією macOS.

### Brave LLM Context

**Query:** `official Allen Heath CQ-12T macOS Tahoe 26 compatibility USB audio Main L R outputs; Zoom AMS-24 output A TRS 48V gain safety; Bose S1 Pro Plus mono line input; Shure SM58 dynamic official manuals`

**Офіційний результат, використаний у документації:**

- [CQ-12T Resources](https://www.allen-heath.com/hardware/cq/cq-12t/resources/) — Allen & Heath не верифікував повну коректну роботу CQ-12T з macOS 26 Tahoe на дату перевірки.

### Brave Web Search

**Query:** `Zoom AMS-24 Operation Manual OUTPUT A TRS impedance balanced 48V gain 0 official`

**Офіційні результати, використані в документації:**

- [Zoom AMS-24 Operation Manual](https://zoomcorp.com/manuals/ams-24-en/) — `Gain = 0` і `48V = OFF` перед підключенням, 48 V для condenser microphones, USB cable із data transfer та виходи `OUTPUT A`.
- [Zoom AMS-24 Operation Manual (PDF)](https://zoomcorp.com/media/documents/E_AMS-24.pdf) — перед підключенням speakers/headphones встановлювати volume в `0`; виходи `L/R` для stereo сигналу.

### Brave Web Search

**Query:** `Bose S1 Pro+ Owner's Guide Channel 3 1/4 TRS line input mono official`

**Офіційні результати, використані в документації:**

- [Bose S1 Pro+ Owner’s Guide](https://assets.bose.com/content/dam/Bose_DAM/Web/consumer_electronics/global/products/speakers/S1PROP-SPEAKERWIRELESS/pdf/872237_og_bose-s1-pro_plus_en.pdf) — 6.35 mm TRS line input у Channel 3 є mono; 3.5 mm AUX input є stereo.

### Brave Web Search

**Query:** `Shure SM58 User Guide dynamic vocal microphone official`

**Офіційні результати, використані в документації:**

- [Shure SM58 User Guide](https://www.shure.com/en-US/docs/guide/SM58) — SM58 є dynamic vocal microphone.

### Brave LLM Context — TC-Helicon routing, ще не завершено

**Query:** `https://mediadl.musictribe.com/download/software/tchelicon/harmony-g-xt-manual-v2.pdf VoiceTone Harmony-G XT manual typical setups output connectors guitar output vocal XLR output`

**Що підтверджено офіційним URL:** повний [VoiceTone Harmony-G XT Product Manual](https://mediadl.musictribe.com/download/software/tchelicon/harmony-g-xt-manual-v2.pdf) існує. Він має бути опрацьований у майбутньому окремому документі до створення фізичної схеми TC-Helicon. До того моменту в документації заборонено припускати, що для базового сетапу потрібні два конкретні кабелі або що гітара й вокал виходять окремо.

## 2026-07-26 — Logic Pro preflight

### Brave Web Search

**Query:** `site:support.apple.com/guide/logicpro Logic Pro 12.3 export project audio files bounce project section cycle mode normalize official`

**Офіційні результати, використані для планування наступного етапу:**

- [Bounce a project to an audio file](https://support.apple.com/guide/logicpro/bounce-a-project-to-an-audio-file-lgcp785a41c3/mac) — `File > Bounce`, Start/End, Cycle mode та normalization; використовується лише в наступному документі про export.
- [Set the bounce range](https://support.apple.com/guide/logicpro/set-the-bounce-range-lgcp190ba9b7/mac) — зв’язок bounce range із Cycle mode та selected regions.

### Brave Web Search

**Query:** `site:support.apple.com/guide/logicpro solo tracks mute tracks Logic Pro Mac`

**Офіційні результати, використані в `10-logic-preflight.md`:**

- [Track header controls](https://support.apple.com/guide/logicpro/track-header-controls-lgcpe19a7a67/mac) — controls у `track header`.
- [Mute tracks](https://support.apple.com/guide/logicpro/mute-tracks-lgcp08bafdee/mac) — `Mute` окремої доріжки.
- [Solo tracks](https://support.apple.com/guide/logicpro/solo-tracks-lgcp58240315/10.7/mac/11.0) — `Solo` для ізольованого прослуховування.

### Brave Web Search

**Query:** `site:support.apple.com/guide/logicpro show tempo track tempo changes Logic Pro`

**Офіційний результат, використаний в `10-logic-preflight.md`:**

- [Tempo track overview](https://support.apple.com/guide/logicpro/tempo-track-overview-lgcpc0ba44af/mac) — показ Global Tracks і Tempo track.

## 2026-07-26 — Logic Pro stereo export і MainStage Playback format

### Brave LLM Context

**Query:** `Apple MainStage User Guide Playback plug-in supported audio file formats WAV AIFF CAF 16-bit 24-bit official`

**Офіційні результати, використані в `11-logic-export-stereo-backing-track.md`:**

- [The Playback Plug-in](https://help.apple.com/mainstage/mac/2.2/en/mainstage/usermanual/chapter_A_section_0.html) — підтримка незжатих mono/stereo AIFF, WAV та CAF із 16/24-bit.
- [Adding a Playback Plug-in](https://help.apple.com/mainstage/mac/2.2/en/mainstage/usermanual/chapter_8_section_1.html) — файли з marker information, зокрема bounced from Logic Pro, можуть використовуватися з Playback.

**Обмеження:** ці офіційні сторінки Apple збереглися в архівному маршруті довідки. Тому кожен exported file додатково проходить import test у встановленому MainStage 4.3 перед концертним використанням.

## 2026-07-26 — уточнення після фінального аудиту

- Виправлено термінологію Zoom: у всіх документах для зовнішнього stereo line output використовується `OUTPUT A L/R`, а не двозначне `Output A/B`.
- Усі згадки про TC-Helicon routing позначено як заплановані до окремої перевірки. До розбору повного офіційного manual і домашнього тесту документація не визначає кількість кабелів, роз’єми або окреме/змішане виведення гітари та вокалу.

## 2026-07-26 — CQ-12T: діагностика помилки sample rate

### Brave LLM Context

**Query:** `Allen Heath CQ-12T USB sample rate 48 96 kHz official user guide and MainStage audio preferences sample rate official Apple`

**Офіційний результат, використаний у документації:**

- [CQ: Multitrack Recording and Playback from SD Card](https://support.allen-heath.com/hc/en-gb/articles/19853352600337-CQ-Multitrack-Recording-and-Playback-from-SD-Card) — Allen & Heath позначає шлях як `CONFIG / Digital Audio (Symbols) / USB/SD`: на фактичному CQ-12T користувача це **піктограма USB, SD і Bluetooth** у `CONFIG`, потім `USB/SD`. Тут обирається `Sample Rate`; CQ-12T підтримує 16×16 USB-аудіо на 48 або 96 kHz. В інструкції не стверджується причина конкретної помилки MainStage, тому в документації це позначено як діагностика, а не встановлений діагноз.

### Brave Web Search

**Query:** `site:support.apple.com Audio MIDI Setup change sample rate audio device Mac`

**Офіційний результат, використаний у документації:**

- [Apple: Set up audio devices in Audio MIDI Setup](https://support.apple.com/guide/audio-midi-setup/set-up-audio-devices-ams59f301fda/mac) — після вибору audio device в sidebar `Format` показує/задає sample rate та bit depth; Apple вимагає відповідності параметрам пристрою.

### Фактичний результат користувача

- CQ-12T: `96 kHz`; MainStage: `96 kHz`; macOS `Audio MIDI Setup`: `96,000 Hz, 16 ch, 24-bit Integer`.
- Після узгодження MainStage з 96 kHz помилка `Sample Rate 48 kHz not allowed` зникла. Імовірне початкове значення MainStage `48 kHz` записано лише як гіпотеза користувача, не як офіційно підтверджена причина.

### Brave Web Search

**Query:** `site:support.apple.com/guide/mainstage "Sample Rate" "Audio Preferences" MainStage`

**Результат:** точного актуального результату Apple Search не повернув. Для кроків MainStage використовуємо лише перевірені екрани встановленого MainStage і не приписуємо Apple непідтверджені назви параметрів.

## 2026-07-26 — Logic Pro: збереження project sample rate під час export

### Brave Web Search

**Query:** `site:support.apple.com/guide/logicpro bounce project sample rate PCM sample rate Logic Pro`

**Офіційні результати, використані в `11-logic-export-stereo-backing-track.md`:**

- [Apple: Set the project sample rate](https://support.apple.com/guide/logicpro/set-the-project-sample-rate-lgcpce0958b8/mac) — не змінювати sample rate після запису або імпорту audio files, щоб уникнути зміни pitch і speed; Logic виконує internal processing і bouncing в original project sample rate.
- [Apple: Bounce a project to an audio file](https://support.apple.com/guide/logicpro/bounce-a-project-to-an-audio-file-lgcp785a41c3/mac) — у bounce потрапляють параметри, effects і automation нем’ючених tracks; `Output 1-2` є типовим stereo output для `File > Bounce`.

## 2026-07-26 — Logic Pro: значення Start/End у Bounce

### Brave Web Search

**Query:** `site:support.apple.com/guide/logicpro bar beat division tick position display start end bounce range`

**Офіційні результати, використані в `11-logic-export-stereo-backing-track.md`:**

- [Apple: Change event position and length](https://support.apple.com/guide/logicpro/change-the-position-and-length-of-events-lgcp215888c6/mac) — музичні позиції мають одиниці bars, beats, divisions і ticks; відлік починається з `1 1 1 1`.
- [Apple: Set the bounce range](https://support.apple.com/guide/logicpro/set-the-bounce-range-lgcp190ba9b7/mac) — без обмежень Bounce охоплює проєкт від Start до End; Cycle mode використовує locator positions, а selected regions обмежують bounce range вибраною ділянкою.

## 2026-07-26 — MainStage: перший import WAV

### Brave Web Search та Brave LLM Context

**Queries:**

- `site:support.apple.com/guide/mainstage create concert set patch MainStage Playback plug-in`
- `site:support.apple.com MainStage add Playback plug-in audio file Playback plug-in`
- `site:support.apple.com/guide/mainstage Playback plug-in "Sync" off audio playback`
- `site:support.apple.com/guide/mainstage MainStage create a new empty concert add patch select patch patch list new concert`

**Офіційні результати, використані в `13-mainstage-concert-foundation.md`:**

- [Apple: Add patches in MainStage](https://support.apple.com/guide/mainstage/add-patches-mstg9da503fa/mac) — `Add Patch` (`+`) у верхньому правому куті Patch List і перейменування patch.
- [Apple: Add a Playback plug-in](https://support.apple.com/nl-nl/guide/mainstage/mstgd241cc7c/mac) — перетягування audio file в Channel Strips створює channel strip із Playback.
- [Apple: MainStage release notes](https://support.apple.com/en-la/101568) — перетягування stereo audio file до mixer створює stereo Playback channel strip.
- [Apple: Playback Sync, Snap To, and Play From](https://support.apple.com/guide/mainstage/mainstage-playback-sync-snap-play-parameters-mstge93aad2f/mac) — `Sync: Off` відтворює audio file в recorded tempo.

## 2026-07-26 — виправлення: MainStage template для першого test Concert

### Brave Web Search та Brave LLM Context

**Queries:**

- `site:support.apple.com/guide/mainstage "8 Backing Tracks" MainStage template`
- `Apple MainStage 4.3 templates "8 Backing Tracks" "Lead Vocal & One Backing Track" official`

**Факти:**

- Точний список template Concerts наданий користувачем із його MainStage 4.3. У ньому **немає** `Empty Concert`; попередня згадка цього template була помилкою і вилучена.
- [Apple MainStage release notes](https://support.apple.com/en-us/101568) офіційно згадують `8 Backing Tracks`, тож його існування підтверджено.
- Офіційні результати пошуку не описують поточний внутрішній routing, Patch List або Channel Strips цього template. До screenshot фактичного Concert документація не припускає його структуру.

### Фактичний screenshot користувача після вибору template

- Template `8 Backing Tracks` у встановленому MainStage 4.3 відкриває `Untitled Concert` з однією Patch `Song One`.
- У центральному mixer видно вісім Playback strips: `Track 1`–`Track 8`; вони виведені до `Main`.
- Цей факт є основою лише для поточного проєкту та версії MainStage користувача. Import-інструкцію оновлено: один stereo backing track завантажується в `Track 1`; інші сім strips не змінюються.

## 2026-07-26 — CQ-12T: діагностика тиші після Playback

### Brave Web Search та Brave LLM Context

**Queries:**

- `site:allen-heath.com/content/uploads CQ User Guide USB B playback USB channel source CQ-12T input channels`
- `site:support.allen-heath.com CQ USB B playback source input channel USB 1 2 Main LR`
- `site:support.apple.com/guide/mainstage Playback plug-in no sound output channel strip main output`
- `https://support.allen-heath.com/hc/en-gb/articles/31464715078929-CQ-USB-B-Routing CQ-12T downstream USB playback inputs 1 2 MainStage`

**Офіційні результати, використані в документації:**

- [Allen & Heath: CQ USB-B Routing](https://support.allen-heath.com/hc/en-gb/articles/31464715078929-CQ-USB-B-Routing) — у CQ-12T USB channels `1` і `2` зі сторони комп’ютера відповідають `Channel 1` і `Channel 2` на mixer.
- [Allen & Heath: CQ Multitrack streaming using CQ](https://support.allen-heath.com/hc/en-gb/articles/19338440353425-CQ-Multitrack-streaming-using-CQ) — для streaming потрібне USB-B з’єднання CQ з комп’ютером; CQ є Core Audio compliant у macOS.
- [CQ-12T Technical Datasheet](https://www.allen-heath.com/content/uploads/2023/10/CQ-12T-Tech-Datasheet.pdf) — USB-B є 16×16 bi-directional audio interface 48/96 kHz, 24-bit.

**Обмеження:** офіційні джерела підтверджують mapping, але не дають достатньо підтверджених даних про фактичний стан сигналу на цьому CQ. Наступна дія — прочитати meters і sources по ланках, а не змінювати налаштування навмання.

### Уточнення напрямків USB routing

- За офіційною статтею [CQ USB-B Routing](https://support.allen-heath.com/hc/en-gb/articles/31464715078929-CQ-USB-B-Routing), `Channel Assignment` у `Config > USB S/D` описує **upstream configurable USB sends**: сигнал, який CQ відправляє до Mac. Тому значення користувача `11/12 → ST IN`, `13/14 → Out 5/6`, `15/16 → Main LR` не налаштовують повернення audio з MainStage у CQ.
- Фактичний meter test: MainStage `Track 1` і `Main` рухаються, CQ не показує сигналу. Це відкидає WAV як причину тиші та вказує на непідтверджений mismatch вихідної USB-пари MainStage / digital input CQ. До перегляду актуального MainStage routing жодна пара не перемикається.

## 2026-07-26 — точна routing-пара MainStage 13/14 → CQ USB L/R

### Офіційний CQ User Guide: локальна перевірка PDF після Brave search

**Офіційний документ:** [CQ User Guide v1.2 Issue 6](https://www.allen-heath.com/content/uploads/2023/09/CQ_User_Guide_V1_2_0_iss6.pdf)

**Підтверджені кроки:**

- p. 58: DAW → CQ: обрати CQ як Audio Output Device, призначити DAW output channels, у `CONFIG / INPUTS` вибрати required channels і переключити `Input Source` на `USB/SD`.
- p. 57: `Multitrack` потрібен, щоб надсилати й отримувати всі channels individually.
- p. 89: `USB/SD` source отримує USB-B, якщо не активний SD multitrack playback.
- pp. 82–83, 96: фактичний dedicated stereo return `USB` знаходиться у `PROCESSING` bank `ST. INPUTS / FX`, не на `CONFIG > INPUTS`, де на CQ-12T видно фізичні inputs і analog `ST` input.
- pp. 41–42, 108: input send до `Main LR` і рівень `Main LR` контролюються у `PROCESSING / INPUTS` або `FADER`.
- p. 69: Headphone Output source може бути `Main LR`, а рівень доступний також із `HOME`.

### Фактичні налаштування користувача

- MainStage `Settings > Audio`: output/input device `CQ12T – Audio`; 96 kHz.
- `Audio MIDI Setup > Configure Speakers`: Stereo `Left → Channel 13`, `Right → Channel 14`.
- За [CQ USB-B Routing](https://support.allen-heath.com/hc/en-gb/articles/31464715078929-CQ-USB-B-Routing), CQ-12T приймає цю пару як dedicated stereo `USB L/R`.
- Створено окрему процедуру [17-cq12t-mainstage-and-foh.md](17-cq12t-mainstage-and-foh.md) для контрольованого test у Phones.

### Виправлення після фактичного screenshot CQ-12T

- Screenshot користувача підтвердив, що `CONFIG > INPUTS` не показує channel `USB`; він показує `Input 1–10` та analog `ST` input.
- Попередній шлях `CONFIG > INPUTS > USB` був помилковим і вилучений. Dedicated stereo return відкривається через `PROCESSING > ST. INPUTS / FX > USB`.
- Наступний screenshot користувача підтвердив, що в actual processing-strip `USB` **немає** блока `Preamp` або меню `Input Source`. Попередню вказівку шукати ці елементи вилучено як помилкову.

## 2026-07-26 — фактичний output MainStage та межа stem-маршрутизації

- Користувач установив у першому Playback strip MainStage `Track 1 > Output: Out 13–14`. Після цього звук із MainStage через CQ з’явився.
- Офіційна [CQ USB-B Routing table](https://support.allen-heath.com/hc/en-gb/articles/31464715078929-CQ-USB-B-Routing) підтверджує: downstream USB 13 = `USB L`, USB 14 = `USB R` на CQ-12T. Тому фактичний результат відповідає документації.
- Офіційний [Apple overview of MainStage channel strips](https://support.apple.com/et-ee/guide/mainstage/mstgdc629cf8/mac) підтверджує, що `Output` slot channel strip можна спрямувати на інший output. Це робить future independent stems routing технічно можливим.
- Висновок: поточний один stereo WAV можна коригувати на CQ тільки як одну stereo-групу. Індивідуальне керування барабанами, басом тощо вимагатиме окремих stems, exported із Logic Pro, кожен із унікальним MainStage output/channel pair. Дублювання одного WAV у восьми strips не розділяє інструменти.
- Для CQ inputs `1–10` потрібний stem input має бути переведений на `USB/SD`; отже цей самий input не можна паралельно використовувати як analog input TC-Helicon. Остаточна stem-карта має спершу зарезервувати analog inputs для гітари й вокалу.

## 2026-07-26 — перевірка ланцюга `USB → Main LR → Phones` і внутрішня архітектура CQ

- За офіційним CQ User Guide, екран `FADER` показує рівні, що надсилаються до вибраного output; за замовчуванням це `Main LR`. Він також дає доступ до output levels і mutes. Тому test має перевіряти meter `USB`, а потім meter `Main LR` саме за `Sends To: Main LR`.
- p. 69 User Guide документує окремі `Headphone Output Source` та `Volume`; `Main LR` є допустимим source. Це відокремлює останню ланку `Main LR → Phones` від routing USB.
- За [CQ-12T technical datasheet](https://www.allen-heath.com/content/uploads/2023/10/CQ-12T-Tech-Datasheet.pdf), CQ-12T має 10 mono inputs (stereo-linkable), три fixed stereo input channels (`ST`, `USB`, `Bluetooth`), пару `Main LR` XLR outputs і шість `Out 1–6` sockets. Це fixed architecture, а не створення необмежених virtual inputs/outputs.
- DCA/Mute Groups є virtual control groups, а не окремими audio channels або outputs.

## 2026-07-26 — завершення базового monitoring test і перехід до карти пісні

- Користувач підтвердив, що після зміни `Headphone Output > Source` із `Listen` на `Main LR` навушники працюють. Screenshot із полем `Listen` є знімком стану до перемикання.
- Базовий маршрут `MainStage Out 13–14 → CQ USB L/R → Main LR → Phones` має статус `Pass` для короткого відтворення.
- Наступна дія не вимагає зміни audio routing: створено картку структури пісні в Logic Pro. Офіційні Apple sources підтверджують, що Arrangement track у Global Tracks містить markers, яким можна змінювати назви та межі; ці markers використовуються тут тільки як музична карта, а не як неперевірений спосіб автоматичного MainStage control.

## 2026-07-26 — Arrangement sections ≠ Marker List для marker-WAV

- Screenshot показав заповнений `Arrangement` track і порожній `Marker` track. Це два різні типи global track у Logic Pro.
- Офіційна Apple стаття [Use marker information from audio files](https://support.apple.com/guide/logicpro/use-marker-information-lgcpadb63ff8/mac) говорить, що при record або Bounce до audio file додається поточний **Marker List**. Тому перед marker-Bounce треба додати звичайні Marker points на межах уже створених Arrangement sections.
- Фактичні позиції першої пісні зі screenshot: Intro `1 1 1 1`; Verse `9 1 1 1`; Chorus A `17 1 1 1`; Chorus B `25 1 1 1`; Outro `33 1 1 1`.
- Майбутня перевірка у MainStage ґрунтуватиметься на офіційній поведінці Playback: marker navigation переміщує playback між parts файла, а `Cycle` повторює ділянку між current marker і next marker. Вона виконуватиметься у копії Concert, без заміни робочого WAV.

## 2026-07-26 — Marker List створено для «Цілуються хмари»

- Screenshot підтвердив п’ять standard Marker points у рядку `Marker`: `Intro`, `Verse`, `Chorus A`, `Chorus B`, `Outro`; їхні start positions збігаються з Arrangement sections: 1, 9, 17, 25, 33.
- Наступна контрольована дія — окремий marker-WAV: він не замінює перевірений робочий WAV і має пройти новий desktop listening test.
- Для `Chorus A` початок = bar 17, а наступний marker `Chorus B` = bar 25. Це створює тестову 8-bar marker-boundary для перевірки MainStage `Cycle`; live-дозвіл повторювати приспів ще не зафіксований.

## 2026-07-26 — marker-WAV пройшов desktop listening test

- Користувач підтвердив `Desktop listening test: Pass` для `Цілуються-хмари_BT_stereo_markers_24bit.wav`.
- Наступний ризик — не audio content, а фактичне читання marker information у MainStage 4.3. Він перевіряється ізольовано в duplicated `Backing Tracks — MARKER TEST.concert`.
- Офіційна Apple article [Use the MainStage Playback Action menu and File field](https://support.apple.com/guide/mainstage/mainstage-playback-action-menu-file-field-mstg35827cbb/mac) підтверджує `File` field та `Action > Open File` як способи завантажити audio file у Playback instance.

## 2026-07-26 — MainStage 4.3 marker import Pass та правильний output B-Track 1

- Screenshot MARKER TEST Concert підтвердив, що MainStage 4.3 бачить embedded marker information: `Current Marker = Intro`, `Next Marker = Verse`, label `Intro` у waveform.
- Початкове читання screenshot про `Track 1 > Output 1–2` було помилковим: `B-Track 1` закритий вікном Playback, а видимі `Output 1–2` належать іншим порожнім B-Track strips.
- Користувач підтвердив: `B-Track 1` з marker-WAV має `Out 13–14`. Маршрут MainStage USB 13/14 → CQ dedicated `USB L/R` зберігається; наступна дія — marker navigation/Cycle test.

## 2026-07-26 — marker navigation і Cycle пройшли test

- `Navigation: Pass` — marker controls пройшли `Intro → Verse → Chorus A → Chorus B`.
- `Cycle Chorus A: Pass` — тестова ділянка bar 17 → 25 повторилась.
- `Release to Chorus B: Pass` — після вимкнення Cycle playback продовжився у `Chorus B`.
- Межа marker-loop пройшла перевірку: користувач почув плавне повернення `Chorus B → Chorus A`, без клацання, тріску, обриву чи короткої паузи. Він описав ефект як плавний fade. Це узгоджується з офіційним описом Apple: `Cycle` автоматично застосовує crossfade у marker points для мінімізації clicks. Navigation і механіка `Cycle` підтверджені; наступна фаза — дослідження та mapping AIRSTEP Lite.

## 2026-07-26 — AIRSTEP Lite Bluetooth MIDI pairing Pass

- Screenshot у `Audio MIDI Setup > MIDI Studio > Configure Bluetooth` підтвердив активне з’єднання: `AIRSTEP Lite`, `MIDI Input/MIDI Output` та доступна дія `Disconnect`.
- Це відповідає офіційному Apple процесу для Mac як Bluetooth MIDI host: `Window > Show MIDI Studio` → `Configure Bluetooth` → вибрати peripheral → `Connect` ([Apple: Set up Bluetooth MIDI devices](https://support.apple.com/guide/audio-midi-setup/ams33f013765/mac), перевірено 2026-07-26).
- Наступний test обмежено однією функцією: лівий footswitch AIRSTEP → екранний `Play` у `Backing Tracks — MARKER TEST.concert`. Apple документує `Assign & Map` і три натискання button для MIDI learn ([Apple: Learn a controller assignment](https://support.apple.com/guide/mainstage/mstg338d4728/mac), перевірено 2026-07-26).
- Перший test `AIRSTEP A → Play` має статус `Fail`: screenshot показав parameter mapping (`Playback > Play/Stop (From Start)`), але не підтвердив MIDI message від footswitch. Це не Bluetooth selector: Bluetooth already handled by macOS. Перед повторним MainStage learn додаємо Apple `Test MIDI Setup`, де up arrow на AIRSTEP Lite має підсвітитися після натискання (`[Apple: Test your MIDI connection](https://support.apple.com/guide/audio-midi-setup/ams668e66f1d/mac)`, перевірено 2026-07-26).

## Важлива примітка про попередні файли

Файли `03-glossary.md`, `05-audio-safety-and-power.md` і `06-cables-and-stage-checklists.md` уже містять прямі офіційні посилання. Їхня джерельна база повторно перевірена через Brave 2026-07-26 цим журналом. До створення наступного документа застосовується обов’язковий research gate з [політики джерел](01-evidence-policy.md#evidence-check).
