# CQ-12T: MainStage USB return, Phones test і майбутній FOH

## Мета цього етапу

Отримати чутний stereo backing track із MainStage у навушниках, підключених до `Phones` CQ-12T. Це **домашній контрольний тест**: він не вимагає Bose, FOH, гітари, мікрофона чи TC-Helicon і не є soundcheck для концерту.

## Підтверджена схема саме для цього проєкту

```mermaid
flowchart LR
    MS["MainStage: Main output"] -->|"macOS speaker layout: L=13, R=14"| USB["USB-B cable"]
    USB -->|"USB 13/14"| CQ["CQ dedicated stereo input: USB L/R"]
    CQ --> Main["CQ Main LR"]
    Main --> Phones["CQ Phones output"]
```

Не плутай два напрями USB:

| Напрямок | У цьому проєкті | Значення |
| --- | --- | --- |
| Mac → CQ | MainStage `Left → 13`, `Right → 14` | backing track приходить у CQ `USB L/R` |
| CQ → Mac | `Channel Assignment` 11/12, 13/14, 15/16 | CQ відправляє свої сигнали в Mac для запису/інших задач; це **не** налаштовує playback із MainStage |

## Офіційні джерела

- [Allen & Heath: CQ User Guide v1.2 issue 6](https://www.allen-heath.com/content/uploads/2023/09/CQ_User_Guide_V1_2_0_iss6.pdf), перевірено 2026-07-26:
  - pp. 56–58 — CQ-12T має 16×16 USB-B; `Multitrack` дає DAW доступ до окремих USB-каналів.
  - pp. 82–83, 96 — stereo USB є окремим channel у `PROCESSING` bank `ST. INPUTS / FX`; bank tabs перемикають input/FX/output banks, а вибраний channel доступний для детальних processing controls.
  - pp. 41–42, 108 — input надсилається до `Main LR` через `PROCESSING / INPUTS` або `FADER`; загальний `Main LR` level регулюється окремо.
  - p. 69 — `Headphone Output` має власні `Source` і `Volume`; `Main LR` можна обрати як headphone source.
- [Allen & Heath: CQ USB-B Routing](https://support.allen-heath.com/hc/en-gb/articles/31464715078929-CQ-USB-B-Routing), перевірено 2026-07-26 — на CQ-12T USB channels `13/14` відповідають `USB L/R`.
- [Apple: Set up audio devices in Audio MIDI Setup](https://support.apple.com/guide/audio-midi-setup/set-up-audio-devices-ams59f301fda/mac), перевірено 2026-07-26 — `Configure Speakers` призначає audio device channels для Left/Right.

## Передумови

- MainStage `Output Device` — `CQ12T – Audio`; sample rate — `96 kHz`.
- В `Audio MIDI Setup > CQ12T – Audio > Output > Configure Speakers` обрано `Stereo`: `Left → Channel 13`, `Right → Channel 14`.
- WAV вже завантажено у `Track 1` Playback, `Sync: Off`, а MainStage meters рухаються під час `Play`.
- Навушники підключені саме до роз’єму `Phones` із піктограмою навушників.
- На початку рівень навушників низький. Не тестуй у гучних навушниках.

## Кроки: налаштувати CQ для повернення MainStage { #home-phones-test }

### 1. Переконайся у `Multitrack` mode

1. На CQ відкрий `CONFIG`.
2. Вибери піктограму цифрового аудіо — на цьому CQ вона показує USB, SD і Bluetooth.
3. Відкрий `USB/SD`.
4. Знайди `Stream Mode`.
5. Встанови `Multitrack`.
6. Переконайся, що `Sample Rate` залишається `96 kHz`.
7. Не змінюй `Channel Assignment`.

**Чому:** MainStage використовує 13/14, а не лише базову stereo-пару; офіційний User Guide вимагає `Multitrack` для індивідуальних channels DAW ↔ CQ.

### 2. Відкрий dedicated stereo return `USB`

1. Натисни верхню вкладку `PROCESSING`. **Не** залишайся у `CONFIG > INPUTS`: там видно лише фізичні `Input 1–10` і аналоговий `ST` input, а не dedicated stereo USB return.
2. У верхній частині `PROCESSING` знайди bank tabs із маленькими фейдерами/meters.
3. Перемикай bank tabs, поки не відкриється bank `ST. INPUTS / FX`. На ньому мають бути dedicated stereo channels, зокрема `USB`.
4. Натисни channel `USB`. Не обирай фізичні mono `Channel 1` або `Channel 2`: вони не відповідають обраній MainStage парі 13/14.
5. На екрані цього каналу ти бачиш processing-strip `USB` з регуляторами `HPF`, `GATE`, `PEQ`, `SENDS` і фейдером. **Не шукай блок `Preamp` і не намагайся знайти тут `Input Source`: у фактичному інтерфейсі dedicated stereo-каналу `USB` такого блоку немає.**
6. Не змінюй `Channel Assignment` у `CONFIG > USB/SD`.

**Чому це працює:** у твоєму `Multitrack` режимі `Out 13–14` MainStage фізично надходить у dedicated stereo return `USB L/R` CQ-12T. Це прямо підтверджує офіційна таблиця [CQ USB-B Routing](https://support.allen-heath.com/hc/en-gb/articles/31464715078929-CQ-USB-B-Routing): USB 13 = `USB L`, USB 14 = `USB R`.

**Виправлення:** попередня вказівка шукати `Preamp` на цьому екрані була помилковою. Вона вилучена; жодної дії в неіснуючому блоці робити не потрібно.

### 3. Надішли `USB` до `Main LR`

1. На CQ натисни верхню вкладку `FADER`.
2. У правому верхньому куті подивися на напис під кнопкою `Sends To`. Для цього тесту там має бути **`Main LR`**.
3. Якщо там інша назва, натисни `Sends To`, у списку натисни `Main LR`, а потім повернися на екран faders.
4. У лівій частині екрана натисни bank `ST.IN/FX` (у `PROCESSING` цей самий bank показував `ST IN`, `USB`, `BT`, `FX1`, `FX2`).
5. Знайди stereo fader із назвою `USB`. Не `ST IN` і не `BT`.
6. Запусти `Play` у MainStage. На фейдері/метрі `USB` має з’явитися рух сигналу. Це доказ першої ланки: **MainStage → USB**.
7. Переконайся, що `USB` не mute, а його fader не стоїть у крайньому нижньому положенні `Off`. За потреби підніми його обережно до `0 dB`.
8. Поглянь на master meter/fader праворуч, позначений `Main LR`. Поки `Play` триває, його meter теж має рухатися. Це доказ другої ланки: **USB → Main LR**.

Не змінюй `Sends To` на `Aux`, `FX` чи інший output під час цього тесту: тоді ти тестуватимеш інший маршрут, а не `Main LR`.

### 4. Налаштуй `Phones` для Main LR

1. У `CONFIG` відкрий `OUTPUTS`.
2. Знайди блок `Headphone Output`.
3. У `Source` обери `Main LR`.
4. У `Volume` почни з низького значення.
5. Вийди з `CONFIG`, відкрий `HOME` і знайди регулятор рівня навушників. Починай з мінімального рівня та піднімай його повільно тільки під час відтворення.

Якщо на кроці 8 вище meter `Main LR` рухається, `Headphone Output > Source` справді дорівнює `Main LR`, а в `Phones` тиша — проблема залишилась лише у третій ланці: **Main LR → Phones** (джерело/гучність навушників або самі навушники).

### 5. Виконай безпечний test

1. У MainStage відкрий Playback у `Track 1` і натисни `Play`.
2. Одночасно подивися на CQ: meter stereo input `USB` повинен рухатися.
3. Потім перевір meter `Main LR`: він також має рухатися.
4. Повільно підніми `Headphone Control` на `HOME` CQ, доки тихо не почуєш backing track.
5. Зупини `Play`.

## Критерії результату

| Результат | Значення | Наступна дія |
| --- | --- | --- |
| `Pass` | `USB` meter, `Main LR` meter і навушники відтворюють повний stereo backing track | Зафіксувати pass; далі створити тест із Bose / FOH output |
| `Needs follow-up: USB` | MainStage meters є, але CQ `USB` meter не рухається | Зробити screenshot `PROCESSING > ST. INPUTS / FX` із вибраним `USB`, нічого більше не міняти |
| `Needs follow-up: Main LR` | `USB` meter рухається, Main LR ні | Зробити screenshot FADER з `Sends to: Main LR` і фейдером `USB` |
| `Needs follow-up: Phones` | `USB` та `Main LR` meters рухаються, але тиша в навушниках | Зробити screenshot `CONFIG > OUTPUTS > Headphone Output` і перевірити Volume / Source |

## Що навмисно не змінюється

- `Track 2`–`Track 8` у MainStage;
- Aux sends, Aux outputs і Metronome;
- CQ `Channel Assignment`;
- sample rate `96 kHz`;
- routing гітари, SM58 і TC-Helicon;
- фізичні `Main L/R` виходи до Bose або FOH.

## Майбутній режим: окремий контроль stems на CQ-12T

Цей розділ **лише пояснює можливість**. Він не змінює поточний робочий режим: зараз одна пісня = один готовий stereo WAV = один stereo-канал `USB L/R` на CQ.

Так, у майбутній Фазі 2 ти зможеш регулювати барабани, бас, клавіші тощо безпосередньо на CQ-12T. MainStage дозволяє для кожного channel strip вибрати інший `Output`, а CQ-12T у `Multitrack` приймає 16 USB-каналів. Отже, один stem можна надіслати у власний channel або stereo-пару, а потім керувати його фейдером, EQ, dynamics і sends на CQ. Це підтверджують [Apple: Overview of channel strips](https://support.apple.com/et-ee/guide/mainstage/mstgdc629cf8/mac) і [Allen & Heath: CQ USB-B Routing](https://support.allen-heath.com/hc/en-gb/articles/31464715078929-CQ-USB-B-Routing).

| Що відтворюється | `Output` у MainStage | Куди надходить на CQ-12T | Що можна регулювати на CQ |
| --- | --- | --- | --- |
| Поточний готовий stereo WAV усієї пісні | `Out 13–14` | dedicated `USB L/R` | Лише весь backing track як одну stereo-групу |
| Майбутній mono stem, наприклад Bass | Один **вільний** USB output channel | Відповідний CQ input, переведений на цифровий source | Цей stem окремо |
| Майбутній stereo stem, наприклад Drums | Одна **унікальна** stereo output-пара | Відповідна CQ stereo-пара, переведена на цифровий source | Цей stereo stem окремо |

**Критична межа:** не можна взяти поточний один WAV, завантажити його в `Track 1`–`Track 8` і отримати окремі барабани, бас та клавіші. Усі вісім strips тоді відтворюватимуть однаковий повний мікс. Для незалежного контролю потрібні окремі exported stems із Logic Pro.

Для входів `1–10` це має ще одну важливу ціну: input може бути або analog джерелом для гітари/вокалу, або цифровим `USB/SD` return для stem. Тому не можна одночасно використовувати один і той самий CQ input і для TC-Helicon, і для stem. Це прямо випливає з офіційного підходу Allen & Heath: для DAW return потрібний input переводять на `USB/SD` source. Саме тому спершу треба зарезервувати фізичні CQ inputs для TC-Helicon (гітара і вокал), а вже потім складати карту stems.

Не складаємо конкретну карту stems зараз. Вона буде окремою процедурою `30-stems-and-cq12t-mixing.md` лише після стабільної базової системи.

## Чи є в CQ-12T «віртуальні» inputs і outputs?

**Коротко: частково так, але CQ не є необмеженим virtual patchbay, як Logic Pro.** У ньому є фіксована кількість внутрішніх каналів і mix buses; нові довільні audio inputs/outputs створювати не можна.

| Елемент CQ-12T | Чи є «віртуальним» | Практичне значення |
| --- | --- | --- |
| `USB L/R` | Так: dedicated internal stereo return | Саме цей stereo channel зараз приймає MainStage `Out 13–14`. Його можна незалежно обробляти і надсилати в `Main LR`/інші доступні destinations. |
| `BT` | Так: dedicated internal stereo return | Призначений для Bluetooth або USB 15/16, не потрібний у теперішньому тесті. |
| Inputs `1–10` | Ні, це наявні input strips; але їхній source можна переключити з analog на USB/SD | У Фазі 2 вони можуть приймати окремі USB stems, але тоді не приймають фізичний сигнал із TC-Helicon. |
| `Main LR` та `Out 1–6` | Це фіксовані mix buses / фізичні outputs, не нові virtual outputs | До них можна надсилати channels і робити окремі mix-и, але кількість fixed. |
| DCA та Mute Groups | Це virtual **керування**, не audio-routing | Один DCA може рухати кілька фейдерів разом, але не створює окремого audio output і не розділяє stems. |

За офіційним datasheet CQ-12T має 10 mono input channels (їх можна stereo-link), три fixed stereo input channels (`ST`, `USB`, `Bluetooth`), пару `Main LR` XLR outputs і шість `Out 1–6` sockets. Отже, для твого майбутнього stem-плану CQ уже має потрібні цифрові return-пункти, але має обмежену, наперед визначену архітектуру. Немає потреби або сенсу «створювати» ще один `USB L/R`.

## Журнал змін

- 2026-07-26 — перша версія на основі підтверджених screenshots: MainStage speaker layout `13/14`, CQ USB return `USB L/R`.
- 2026-07-26 — виправлено шлях USB return: `CONFIG > INPUTS` показує лише фізичні channels; dedicated stereo `USB` обирається через `PROCESSING > ST. INPUTS / FX`.
- 2026-07-26 — після фактичного test підтверджено, що MainStage `Track 1 > Output: Out 13–14` дає звук через CQ. Попередню помилкову вказівку про `USB > Preamp > Input Source` вилучено.
