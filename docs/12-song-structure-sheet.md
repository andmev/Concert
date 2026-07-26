# Logic Pro: карта структури пісні для майбутнього live-керування

## Мета

Позначити музичні секції готової пісні (`Intro`, `Verse`, `Chorus`, `Bridge`, `Outro`) і точно записати межі кожної секції. Це є основою майбутнього контрольованого повтору приспіву з MainStage та AIRSTEP Lite.

На цьому етапі markers **не керують** MainStage, не потрапляють автоматично у WAV і не змінюють аранжування чи звук. Це лише точна музична карта, яку ми використаємо, коли окремо перевіримо спосіб live-переходів у MainStage.

## Коли застосовувати / коли не застосовувати

Застосовуй після успішного stereo export і першого playback test через CQ-12T. Не застосовуй для редагування audio regions, зміни темпу або повторного Bounce.

## Пов’язані документи

- [Перевірка проєкту Logic Pro](10-logic-preflight.md)
- [Export stereo backing track](11-logic-export-stereo-backing-track.md)
- [MainStage: перший test Concert](13-mainstage-concert-foundation.md)
- [Картка «Цілуються хмари»](song-records/01-tsiluyutsia-khmary.md)

## Офіційні джерела

- [Apple: Logic Pro markers overview](https://support.apple.com/guide/logicpro/markers-overview-lgcp0ec9fc09/mac), перевірено 2026-07-26 — markers позначають частини проєкту; їх можна переглядати й редагувати у Marker track.
- [Apple: Add arrangement markers in Logic Pro](https://support.apple.com/guide/logicpro/add-arrangement-markers-lgcpb9f20ee5/mac), перевірено 2026-07-26 — arrangement markers додаються через кнопку `+`, мають назву й межі, які можна змінювати.
- [Apple: Global tracks overview](https://support.apple.com/guide/logicpro/global-tracks-overview-lgcp4994bead/10.7/mac/11.0), перевірено 2026-07-26 — Arrangement track є global track і відображається під ruler.

## Передумови

- Пісня вже має перевірений WAV. Для «Цілуються хмари» це `Цілуються-хмари_BT_stereo_24bit.wav`.
- Відкрито **оригінальний** project Logic Pro, а не WAV у MainStage.
- Під час цієї процедури не рухай і не розрізай audio/MIDI regions.

## Кроки

```mermaid
flowchart LR
    Project["Оригінальний project у Logic Pro"] --> Global["Показати Global Tracks"]
    Global --> Map["Позначити Intro / Verse / Chorus / Bridge / Outro"]
    Map --> Boundaries["Вирівняти межі по bar/beat"]
    Boundaries --> Card["Записати карту в картку пісні"]
    Card --> Later["Пізніше: окремо обрати MainStage live-переходи"]
```

### 1. Покажи Arrangement track

1. Відкрий у Logic Pro project пісні.
2. Натисни клавішу `G`. Це показує `Global Tracks` під ruler у верхній частині `Tracks area`.
3. Знайди рядок `Arrangement`. Якщо він уже містить секції, нічого не додавай: лише прочитай їхні назви та межі.

### 2. Познач секції, якщо їх ще немає

1. Постав playhead на початок пісні та прослухай її, стежачи за bar/beat ruler.
2. У рядку `Arrangement` натисни кнопку `+`, щоб додати першу arrangement marker.
3. Назви marker `Intro` або фактичним іменем першої секції.
4. Потягни праву межу marker так, щоб вона закінчувалась **безпосередньо перед** наступною секцією.
5. Повтори для всіх секцій, використовуючи прості сталі назви: `Intro`, `Verse 1`, `Chorus 1`, `Verse 2`, `Chorus 2`, `Bridge`, `Final Chorus`, `Outro`.
6. Не змінюй тривалість audio regions під markers. Пересуваються лише межі marker.

### 3. Особливо познач приспіви

Для кожного `Chorus` запиши:

- позицію початку у форматі `bar beat division tick`, наприклад `17 1 1 1`;
- позицію кінця або початку наступної секції;
- чи дозволено повторити його live;
- куди має піти пісня **після** повтору: до `Verse`, `Bridge`, `Final Chorus` або `Outro`.

Не вирішуй на цьому етапі, якою саме кнопкою MainStage робити повтор. Це залежить від окремого тесту Playback markers і MIDI-команд AIRSTEP Lite.

### 4. Зафіксуй результат

Заповни таблицю у картці пісні. Для першої перевірки достатньо надіслати список секцій і їхні позиції або screenshot Arrangement track.

| № | Секція | Початок | Кінець / початок наступної | Повторити live? | Після повтору перейти до |
| --- | --- | --- | --- | --- | --- |
| 1 | `Intro` |  |  | Ні | `Verse 1` |
| 2 | `Verse 1` |  |  | Ні | `Chorus 1` |
| 3 | `Chorus 1` |  |  | Так / Ні |  |

## Як перевірити

- Кожна секція має зрозумілу назву.
- Немає проміжків або накладань між сусідніми секціями, якщо це не задуманий музичний ефект.
- Marker-лінія стоїть на музичній межі, а не випадково в середині фрази.
- WAV, MainStage routing і темп не змінилися.

## Типові помилки та безпечне відновлення

| Помилка | Безпечна дія |
| --- | --- |
| Marker створений не в тому місці | Перетягни тільки його межу до правильної bar/beat позиції. |
| Marker має неправильну назву | Перейменуй marker; audio не змінюється. |
| Незрозуміло, де закінчується приспів | Прослухай перехід кілька разів і постав межу на початок наступної музичної секції. Не вгадуй за текстом. |
| Хочеться повторно експортувати WAV | Не потрібно: markers самі по собі не змінюють audio. |

## Журнал змін

- 2026-07-26 — створено після успішного першого маршруту MainStage → CQ-12T. Це підготовча карта; спосіб loop/repeat у MainStage ще не обраний і не перевірений.
