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
| Перший playback test через CQ-12T | `Needs follow-up`: WAV запускався кнопкою `Play` у Playback, але звуку не було чутно; точна ланка тиші ще не визначена |

## Наступна дія

Провести поетапну перевірку MainStage → USB 1/2 → CQ Channel 1/2 → Main LR → фізична акустика. До неї не видаляти template tracks, Aux або Metronome.
