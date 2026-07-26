# Картка пісні: «Цілуються хмари»

Це журнал фактичних результатів для однієї пісні. Він не замінює покрокові інструкції: для повторення процесу дивись [перевірку в Logic Pro](../10-logic-preflight.md) та [export stereo backing track](../11-logic-export-stereo-backing-track.md).

## Вихідний проєкт

| Поле | Значення |
| --- | --- |
| Назва проєкту Logic Pro | `Цілуються хмари Logic Pro` |
| Дата первинної перевірки | 2026-07-26 |
| Темп | Один темп: `70 BPM` |
| Живий основний вокал | Відсутній |
| Жива акустична гітара | Відсутня |
| Записана електрогітара | Залишити |
| `Click` | **Залишити:** це Finger snapping, художній елемент, а не метроном |

## Доріжки, що мають залишитися

- `Guitar`
- `Drum`
- `Bass`
- `Piano`
- `Other`
- `Click` (Finger snapping)
- `Organ`
- `Back Vocals`

## Export

| Поле | Значення |
| --- | --- |
| Дата | 2026-07-26 |
| Файл | `Цілуються-хмари_BT_stereo_24bit.wav` |
| Тривалість Bounce | `3:15` |
| Destination | `Uncompressed` |
| File Type | `WAVE` |
| Bit Depth | `24-bit` |
| Sample Rate у Bounce | `44.1 kHz` — залишений відповідно до готового проєкту Logic Pro |
| Format | `Interleaved` |
| Dithering | `None` |
| Normalize | `Off` |
| Mode | `Automatic` |
| Desktop listening test | `Pass` |
| MainStage import test | `Pass` |
| Перший playback test через CQ-12T | `Pass` для появи звуку: у `Track 1 > Output` обрано `Out 13–14`, після чого звук із MainStage з’явився через CQ dedicated stereo `USB L/R`. Повний test рівнів у `Phones` ще не записано. |
| Monitoring через `Phones` | `Pass`: користувач підтвердив роботу після вибору `Headphone Output > Source: Main LR`. Screenshot із `Listen` зроблено до цього перемикання. |
| Marker-WAV desktop listening test | `Pass`: `Цілуються-хмари_BT_stereo_markers_24bit.wav` прослухано від початку до кінця |
| MainStage marker import | `Pass`: видимі `Current Marker: Intro`, `Next Marker: Verse` і marker `Intro` у waveform MARKER TEST Concert |
| MARKER TEST output | `Pass`: `B-Track 1` із marker-WAV має `Out 13–14`. Видимі `Output 1–2` у screenshot належать іншим порожнім B-Track strips. |
| Marker navigation | `Pass`: `Intro → Verse → Chorus A → Chorus B` працює через marker controls MainStage |
| Cycle `Chorus A` | `Pass`: `Chorus A` повторюється між bar 17 і 25 |
| Release до `Chorus B` | `Pass`: після вимкнення `Cycle` playback переходить у `Chorus B` |
| Межі marker-loop | `Pass`: плавне повернення `Chorus B → Chorus A`; без чутних клацань, тріску, обриву або паузи. Користувач чує це як плавний fade. |
| AIRSTEP Lite Bluetooth MIDI | `Pass`: macOS показує `AIRSTEP Lite` з `MIDI Input/MIDI Output`; дія `Disconnect` підтверджує active connection. |
| AIRSTEP A → Play | `Pass`: у `Local Preset 2 (MIDI CC)`, `Toggle Mode: Off`, `A` надсилає `CC 22 = 127`. Три незалежні повтори «A → start; екранний `Stop`; A → start» пройшли. MainStage assignment не перестворювався. LED Lite світиться постійно в `Normal Mode`; це не впливає на transport, але LED не вважається індикатором стану MainStage без окремо підтвердженого двостороннього MIDI feedback. |

## Карта структури

| Секція | Початок | Наступна межа |
| --- | --- | --- |
| `Intro` | `1 1 1 1` | `9 1 1 1` |
| `Verse` | `9 1 1 1` | `17 1 1 1` |
| `Chorus A` | `17 1 1 1` | `25 1 1 1` |
| `Chorus B` | `25 1 1 1` | `33 1 1 1` |
| `Outro` | `33 1 1 1` | Кінець пісні ще не зафіксовано окремим marker |

**Стан:** `Arrangement` sections і звичайні Marker points створено та збігаються за межами. Marker-WAV пройшов desktop listening test, MainStage marker import, navigation, `Cycle` і перевірку плавної межі повтору.

## Наступна дія

Наступний етап — повний маршрут `B–E` у test Concert: `B = Previous Marker (CC 23)`, `C = Next Marker (CC 24)`, `D = Cycle (CC 25)`, `E = Stop (CC 26)`. Усі — `Toggle Mode: Off`, `Press`, `MIDI`, `ALL`, `Control Change`, channel `1`, value `127`. Кожну кнопку прив’язати до відповідного видимого screen control і перевірити окремо, потім виконати `FULL ROUTE`. `A = Start (CC 22)` не змінювати. LED Lite не вважати індикатором playback. Factory reset не потрібен; не видаляти local preset slots.
