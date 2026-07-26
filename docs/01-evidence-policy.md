# Правила джерел і доказовості

## Обов’язкова перевірка перед написанням { #evidence-check }

Перед тим як додати **будь-який** технічний крок у документацію:

1. Виконай `brave-search` MCP-запит, сформульований для конкретного факту або процедури.
2. Відкрий або отримай зміст прямого офіційного джерела Apple / виробника та переконайся, що воно справді підтримує твердження.
3. Запиши це посилання й дату перевірки поруч із кроком у розділі `Офіційні джерела`.
4. Якщо потрібен приклад реального виконавця — зроби окремий Brave-запит для практичних прикладів і познач джерело як неофіційне.
5. Для програмістських бібліотек, SDK, API, framework або CLI додатково використовуй `context7` MCP. Для MainStage, Logic Pro і фізичного концертного обладнання Context7 не заміняє офіційні посібники виробника.

Якщо будь-який із цих пунктів неможливо виконати, не пиши процедуру як перевірену. Замість неї сформулюй питання для виробника або безпечний домашній тест, чітко позначений як `Офіційно не підтверджено`.

## Ієрархія джерел

1. Офіційний User Guide, Operation Manual, release notes або support article виробника — обов’язковий для всіх кроків, параметрів, сумісності та підключень.
2. Офіційна сторінка продукту — допустима для загальних характеристик, але не замінює інструкцію з підключення.
3. Реальний досвід виконавців, освітні статті й форуми — лише як приклад практики. Не створює технічного правила.

Кожне джерело в робочій документації має містити пряме посилання, назву, виробника/автора, версію (якщо є) і дату перевірки. Не цитуй сторінку, яку не відкривав у поточній роботі.

## Перевірені стартові офіційні джерела

| Тема | Джерело | Для чого використовувати |
| --- | --- | --- |
| MainStage | [Apple MainStage Support](https://support.apple.com/mainstage) | Точка входу до актуального User Guide і підтримки |
| MainStage 4.3 | [Apple MainStage release notes](https://support.apple.com/101568) | Відмінності та виправлення саме 4.3 |
| Logic Pro export | [Export tracks as audio files in Logic Pro](https://support.apple.com/guide/logicpro/export-tracks-as-audio-files-lgcpb27f70f9/mac) | Експорт окремих треків, якщо він знадобиться в розширеній фазі |
| CQ-12T resources | [Allen & Heath CQ-12T Resources](https://www.allen-heath.com/hardware/cq/cq-12t/resources/) | Актуальний CQ User Guide, firmware, сумісність і застосунок |
| CQ-12T I/O | [Allen & Heath CQ-12T](https://www.allen-heath.com/hardware/cq/cq-12t/) | Підтвердження USB-аудіо та фізичних входів/виходів |
| Zoom AMS-24 | [Zoom AMS-24 Operation Manual](https://zoomcorp.com/manuals/ams-24-en/) | Підключення, режими, levels, phantom power і troubleshooting |
| Bose S1 Pro+ | [Bose S1 Pro+ Owner’s Guide (PDF)](https://assets.bose.com/content/dam/Bose_DAM/Web/consumer_electronics/global/products/speakers/S1PROP-SPEAKERWIRELESS/pdf/872237_og_bose-s1-pro_plus_en.pdf) | Mono/stereo входи й безпечне підключення |
| TC-Helicon | [VoiceTone Harmony-G XT Quick Start Guide](https://mediadl.musictribe.com/media/PLM/data/docs/P0CMT/VOICETONE%20HARMONY-G%20XT_QSG_EN.pdf) | Початкове офіційне джерело; перед детальними кроками знайти чинний повний офіційний manual |

## Що ще треба офіційно підтвердити перед написанням відповідної процедури

- Документацію Xsonic AIRSTEP Lite щодо Bluetooth MIDI і режимів пристрою. Не використовувати неофіційні копії manual як єдине технічне джерело.
- Повний офіційний посібник TC-Helicon VoiceTone Harmony-G XT: роз’єми, routing, рівні та параметри. Quick Start Guide не є достатнім для складної схеми.
- Точні сторінки MainStage 4.3 про Playback plug-in, markers, cycling/loop, set/patch level, MIDI mapping і вибір audio device. Стара сторінка Apple може пояснювати функцію, але версію слід звіряти з MainStage 4.3 User Guide.
- Актуальна сумісність CQ-12T із macOS Tahoe 26 на день налаштування.

## Робота з прикладами артистів

Приклади слугують для порівняння практичних підходів, а не як інструкція. Кожен приклад повинен мати окремі поля:

```text
Практика інших виконавців
Джерело: [назва](посилання), автор, дата публікації; перевірено: YYYY-MM-DD.
Що саме робить виконавець:
Що з цього переносимо в цей проєкт:
Обмеження / чому це не є офіційною гарантією:
```

Для стартового порівняння можна дослідити [опис live playback tracks від Eric Barfield](https://www.ericwbarfield.com/blog/2013/12/10/mainstage-mondays-live-playback-tracks-in-mainstage) та інші релевантні кейси. Їхні твердження завжди мають бути відділені від офіційної специфікації Apple.
