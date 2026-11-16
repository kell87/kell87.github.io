/* ================= Data ================= */

/* Category icons: inline SVG (24x24, stroke = currentColor), unified stroke style.
   Redrawn from Flaticon references (www.flaticon.com):
   SSD           — https://cdn-icons-png.flaticon.com/512/2164/2164994.png
   Power Supply  — https://cdn-icons-png.flaticon.com/512/2123/2123973.png
   RAM           — https://cdn-icons-png.flaticon.com/512/3849/3849883.png
   PC Cases      — tower case reference image (Yandex Images)
   Motherboards  — https://cdn-icons-png.flaticon.com/512/12896/12896420.png
   GPUs          — https://cdn-icons-png.flaticon.com/512/1229/1229721.png
   TVs           — https://cdn-icons-png.flaticon.com/512/4588/4588218.png
   Routers       — https://cdn-icons-png.flaticon.com/512/4291/4291202.png
   Kept as-is:   Cooling Systems (snowflake), Monitors, Processors, Audio,
                 Keyboards/Mice, Memory Cards, HDD, Furniture, Appliances, Tools. */

// Cooling Systems — snowflake (Flaticon / Freepik) — unchanged
const ICON_COOLING = `
  <path d="M12 2v20"/>
  <path d="M3.5 7l17 10"/><path d="M20.5 7l-17 10"/>
  <path d="M9.2 3.6 12 6l2.8-2.4"/><path d="M9.2 20.4 12 18l2.8 2.4"/>
  <path d="m2.9 9.6 1.2-3.4 3.4-1.2"/><path d="m21.1 14.4-1.2 3.4-3.4 1.2"/>
  <path d="m21.1 9.6-1.2-3.4-3.4-1.2"/><path d="m2.9 14.4 1.2 3.4 3.4 1.2"/>`;

// TVs — wide flat TV on legs with antenna + screen detail (ref: flaticon 4588218)
const ICON_TV = `
  <rect x="2" y="6" width="20" height="13" rx="2"/>
  <path d="m8.5 3.5 3 2.5 3-2.5"/>
  <path d="M16 10.5a3 3 0 0 1 0 4"/>
  <path d="M6 10.5h4"/>
  <path d="m8 19-1.5 2.5M16 19l1.5 2.5"/>`;

// Audio Equipment — headphones with music note (custom) — unchanged
const ICON_AUDIO = `
  <path d="M3 15v-3a9 9 0 0 1 18 0v3"/>
  <rect x="2" y="14" width="5" height="7" rx="2.5"/>
  <rect x="17" y="14" width="5" height="7" rx="2.5"/>
  <path d="M13.5 8.5v5.2a1.8 1.6 0 1 1-1-1.4"/>
  <path d="M13.5 8.5c1 .3 1.9.6 2.5 1.4"/>`;

// Furniture — armchair (custom) — unchanged
const ICON_FURNITURE = `
  <path d="M5 11V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4"/>
  <path d="M5 11a2.5 2.5 0 0 0-2 2.4V17a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-3.6a2.5 2.5 0 0 0-2-2.4z"/>
  <path d="M7 19v2M17 19v2"/>`;

// Tools — wrench & screwdriver crossed (custom) — unchanged
const ICON_TOOLS = `
  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
  <path d="m4.5 3.5 3 3"/><path d="m6 8-2.5 2.5L5 12l-2.5 4.5L5 14l1.5 1.5L9 13l2.5-2.5"/>`;

// Guides — open book with bookmark ribbon
const ICON_GUIDES = `
  <path d="M2 4.5A2.5 2.5 0 0 1 4.5 2H11a2 2 0 0 1 2 2v15a1.5 1.5 0 0 0-1.5-1.5H4.5A2.5 2.5 0 0 1 2 15z"/>
  <path d="M22 4.5A2.5 2.5 0 0 0 19.5 2H13a2 2 0 0 0-2 2v15a1.5 1.5 0 0 1 1.5-1.5h7A2.5 2.5 0 0 0 22 15z"/>
  <path d="M16 2v7l2.5-2L21 9V2"/>`;

// SSD — 2.5" drive: platter circle, label lines, mounting screws (ref: flaticon 2164994)
const ICON_SSD = `
  <rect x="3" y="4" width="18" height="16" rx="2.5"/>
  <circle cx="9" cy="12" r="3.4"/>
  <circle cx="9" cy="12" r="0.6"/>
  <path d="M14.5 9.5H19M14.5 12.5H19M14.5 15.5H17.5"/>
  <path d="M6 6.2h.01M18 6.2h.01M6 17.8h.01M18 17.8h.01"/>`;

// Power Supply — PSU box with big fan grille and power plug/cable (ref: flaticon 2123973)
const ICON_POWER = `
  <rect x="2" y="9" width="13" height="11" rx="2"/>
  <circle cx="8.5" cy="14.5" r="3.2"/>
  <path d="M8.5 11.3v6.4M5.3 14.5h6.4"/>
  <path d="M5 9V7.5A2.5 2.5 0 0 1 7.5 5h2"/>
  <path d="M12 2.5v3M10.5 4h3"/>
  <rect x="17" y="4" width="5" height="4.5" rx="1"/>
  <path d="M18.5 4V2.5M20.5 4V2.5"/>`;

// RAM — memory module: notch at bottom, chips, contact pins (ref: flaticon 3849883)
const ICON_RAM = `
  <path d="M2 7h20a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-7.5v2h-5v-2H2a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1z"/>
  <rect x="4" y="9.5" width="3" height="4" rx="0.5"/>
  <rect x="8.5" y="9.5" width="3" height="4" rx="0.5"/>
  <rect x="13" y="9.5" width="3" height="4" rx="0.5"/>
  <rect x="17.5" y="9.5" width="2.5" height="4" rx="0.5"/>`;

// PC Cases — mid-tower: front mesh, power button, I/O ports (ref: tower case image)
const ICON_CASE = `
  <rect x="5" y="2.5" width="14" height="19" rx="2"/>
  <path d="M8 5.5h8"/>
  <circle cx="12" cy="9" r="1.4"/>
  <path d="M8.5 13h7M8.5 15.5h7M8.5 18h7"/>`;

const ICON_CPU = `
  <rect x="6" y="6" width="12" height="12" rx="1.5"/>
  <rect x="9.5" y="9.5" width="5" height="5" rx="0.5"/>
  <path d="M9 6V3M12 6V3M15 6V3M9 21v-3M12 21v-3M15 21v-3M6 9H3M6 12H3M6 15H3M21 9h-3M21 12h-3M21 15h-3"/>`;

// Motherboards — PCB board: CPU socket, RAM slots, chipset, traces (ref: flaticon 12896420)
const ICON_MBOARDS = `
  <rect x="3" y="3" width="18" height="18" rx="2"/>
  <rect x="6" y="6" width="5.5" height="5.5" rx="0.5"/>
  <path d="M14.5 6v5.5M17 6v5.5"/>
  <rect x="6" y="14.5" width="4" height="4" rx="0.5"/>
  <path d="M13 16.5h5M13 13.5h2"/>
  <circle cx="17.5" cy="13.5" r="0.8"/>`;

const ICON_GPU = `
  <rect x="2" y="8" width="17" height="9" rx="2"/>
  <circle cx="8.5" cy="12.5" r="2.6"/>
  <path d="M8.5 9.9v5.2M5.9 12.5h5.2"/>
  <path d="M19 10h3v5h-3"/>
  <path d="M5 17v3"/>`;

const ICON_MONITOR = `
  <rect x="2" y="4" width="20" height="13" rx="2"/>
  <path d="M9 21h6M12 17v4"/>
  <path d="M5.5 7.5c1.2 1 2.4 1 3.5 0s2.3-1 3.5 0 2.4 1 3.5 0"/>`;

// Routers — router body, LEDs, two antennas with Wi-Fi arcs (ref: flaticon 4291202)
const ICON_ROUTER = `
  <rect x="2" y="14" width="20" height="6" rx="2"/>
  <path d="M5.5 17h.01M8.5 17h.01M11.5 17h.01"/>
  <path d="M6.5 14V6M6.5 8.8a5.2 5.2 0 0 1 0-5.6M3.9 8a2.8 2.8 0 0 1 0-4"/>
  <path d="M17.5 14V6M17.5 8.8a5.2 5.2 0 0 0 0-5.6M20.1 8a2.8 2.8 0 0 0 0-4"/>`;

const ICON_INPUT = `
  <rect x="2" y="7" width="13" height="8" rx="1.5"/>
  <path d="M4 9.5h1.5M7 9.5h1.5M10 9.5h1.5M4 12h1.5M7 12h1.5M10 12h1.5M4.5 14h6"/>
  <path d="M18 8a3.5 3.5 0 0 1 3.5 3.5v2a3.5 3.5 0 0 1-7 0v-2A3.5 3.5 0 0 1 18 8z"/>
  <path d="M18 10.5v2"/>`;

const ICON_MEMORYCARD = `
  <path d="M8 3h10a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V7l4-4z"/>
  <path d="M10 3v4h4"/>
  <path d="M12 11v4M10 12.5v2.5M14 12.5v2.5"/>`;

const ICON_HDD = `
  <rect x="3" y="5" width="18" height="14" rx="2"/>
  <circle cx="10.5" cy="12" r="4.5"/>
  <circle cx="10.5" cy="12" r="1"/>
  <path d="m13.8 15.3 2.7-2.7"/>
  <path d="M17.5 8.5h.01M17.5 17h-4"/>`;

const ICON_APPLIANCE = `
  <rect x="4" y="3" width="16" height="18" rx="2"/>
  <path d="M4 8h16"/>
  <circle cx="12" cy="14.5" r="4.5"/>
  <circle cx="12" cy="14.5" r="1.6"/>
  <path d="M7 5.5h.01M10 5.5h.01"/>`;

// 18 categories, each with 3 reviews (RU/EN titles + href)
const CATEGORIES = [
  {
    icon: ICON_SSD,
    ru: "SSD-накопители",
    en: "SSD Drives",
    reviews: [
      { ru: "Smartbuy Helix Pro 256GB", en: "Smartbuy Helix Pro 256GB", href: "https://mysku.club/blog/russia-stores/102272.html"},
      { ru: "Kingston KC3000 2ТБ", en: "Kingston KC3000 2TB", href: "https://club.dns-shop.ru/review/t-477-ssd-nakopiteli-m-2/123399-obzor-i-testirovanie-2-tb-m-2-nvme-nakopitelya-kingston-kc3000-sk/" },
      { ru: "Сравнительное тестирование: AGI AI818 vs Silicon Power P34A80 vs Kingston KC2000", en: "Comparative testing: AGI AI818 vs Silicon Power P34A80 vs Kingston KC2000", href: "https://club.dns-shop.ru/review/t-101-ssd-nakopiteli-2-5/109628-sravnitelnoe-testirovanie-nvme-nakopitelei-agi-ai818-protiv-si/" },
      { ru: "AGI AI818 [AGI512G44AI818]", en: "AGI AI818 [AGI512G44AI818]", href: "https://club.dns-shop.ru/review/t-101-ssd-nakopiteli-2-5/100788-obzor-i-testirovanie-m-2-nvme-nakopitelya-agi-ai818-agi512g44ai8/" },
      { ru: "Neo Forza NFS12", en: "Neo Forza NFS12", href: "https://club.dns-shop.ru/review/t-101-ssd-nakopiteli-2-5/90698-obzor-i-testirovanie-2-5-sata-nakopitelya-neo-forza-nfs12-obem/" },
      { ru: "Patriot P300 1ТБ", en: "Patriot P300 1TB", href: "https://club.dns-shop.ru/review/t-101-ssd-nakopiteli-2-5/88319-obzor-i-testirovanie-m-2-nvme-nakopitelya-patriot-p300-obemom-1/" },
      { ru: "Netac NV7000 1ТБ", en: "Netac NV7000 1TB", href: "https://club.dns-shop.ru/review/t-101-ssd-nakopiteli-2-5/84357-obzor-i-testirovanie-m-2-nvme-nakopitelya-netac-nv7000-obemom-1/" },
      { ru: "Smartbuy Revival 240ГБ", en: "Smartbuy Revival 240GB", href: "https://club.dns-shop.ru/review/t-101-ssd-nakopiteli-2-5/64721-obzor-ssd-nakopitelya-smartbuy-revival-3-obemom-240-gb/" },
      { ru: "Transcend MTE220S 1ТБ", en: "Transcend MTE220S 1TB", href: "https://www.ixbt.com/live/data/obzor-tverdotelnogo-nakopitelya-transcend-mte220s-emkostyu-1-tb.html" },
      { ru: "Team Group Cardea Zero Z340 1ТБ", en: "Team Group Cardea Zero Z340 1TB", href: "https://club.dns-shop.ru/review/t-101-ssd-nakopiteli-2-5/59488-obzor-nvme-ssd-nakopitelya-team-group-cardea-zero-z340-obemom/" },
      { ru: "Внеший SSD Transcend ESD370C", en: "Portable SSD Transcend ESD370C", href: "https://www.ixbt.com/live/data/obzor-vneshnego-tverdotelnogo-nakopitelya-transcend-esd370c-obemom-250-gb.html" },
      { ru: "Kingston NV1", en: "Kingston NV1", href: "https://club.dns-shop.ru/review/t-101-ssd-nakopiteli-2-5/47885-obzor-i-testirovanie-ssd-nakopitelya-kingston-nv1-emkostu-1tb/" },
      { ru: "Kingston KC2500 1ТБ", en: "Kingston KC2500 1TB", href: "https://club.dns-shop.ru/review/t-101-ssd-nakopiteli-2-5/36925-obzor-i-testirovanie-ssd-nakopitelya-kingston-kc2500-emkostu-1tb/" },
      { ru: "Kingston KC2000 500ГБ", en: "Kingston KC2000 5000GB", href: "https://club.dns-shop.ru/review/t-101-ssd-nakopiteli-2-5/29092-obzor-i-testirovanie-ssd-nakopitelya-kingston-kc2000-emkostu-500/" },
      { ru: "Smartbuy Stream E13T 256ГБ", en: "Smartbuy Stream E13T 256GB", href: "https://club.dns-shop.ru/review/t-101-ssd-nakopiteli-2-5/24069-obzor-ssd-m-2-nakopitelya-smartbuy-stream-e13t-obemom-256-gb/" },
      { ru: "Silicon Power P34A80 512ГБ", en: "Silicon Power P34A80 512GB", href: "https://club.dns-shop.ru/review/t-101-ssd-nakopiteli-2-5/21791-obzor-ssd-m-2-nakopitelya-silicon-power-p34a80-obemom-512-gb/" },
      { ru: "Kingston UV500 SATA", en: "Kingston UV500 SATA", href: "https://club.dns-shop.ru/review/t-101-ssd-nakopiteli-2-5/18759-obzor-ssd-nakopitelya-form-faktora-sata-2-5-kingston-uv500-em/" },
      { ru: "Kingston UV500 mSATA", en: "Kingston UV500 mSATA", href: "https://club.dns-shop.ru/review/t-101-ssd-nakopiteli-2-5/18092-obzor-ssd-nakopitelya-form-faktora-msata-kingston-uv500-emkost/" },
      { ru: "KingSpec P3", en: "KingSpec P3", href: "https://club.dns-shop.ru/review/t-101-ssd-nakopiteli-2-5/17631-obzor-ssd-nakopitelya-kingspec-p3-obemom-512-gb-horosho-i-ne-dor/" }
    ]
  },
  {
    icon: ICON_COOLING,
    ru: "Системы охлаждения",
    en: "Cooling Systems",
    reviews: [
      { ru: "ID-COOLING FROZN A620 SLK", en: "ID-COOLING FROZN A620 SLK", href: "https://www.ixbt.com/live/power/obzor-kulera--id-cooling-frozn-a620-slk.html", year: 2026 },
      { ru: "DeepCool AG620 G2", en: "DeepCool AG620 G2", href: "https://www.ixbt.com/live/power/obzor-i-testirovanie-processornogo-kulera-deepcool-ag620-g2.html", year: 2026 },
      { ru: "ID-COOLING FX360 LCD PE", en: "ID-COOLING FX360 LCD PE", href: "https://www.ixbt.com/live/power/obzor-i-testirovanie-processornoy-szho-id-cooling-fx360-lcd-pe.html" },
      { ru: "ID-Cooling FROZN A410 TD", en: "ID-Cooling FROZN A410 TD", href: "https://www.ixbt.com/live/power/obzor-processornogo-kulera-id-cooling-frozn-a410-td-teper-i-s-ekranom.html" },
      { ru: "DeepCool AK400 DIGITAL SE", en: "DeepCool AK400 DIGITAL SE", href: "https://club.dns-shop.ru/review/t-105-kuleryi-dlya-protsessorov/155290-obzor-protsessornogo-kulera-deepcool-ak400-digital-se-wh/" },
      { ru: "DeepCool AG400 WH ARGB V2", en: "DeepCool AG400 WH ARGB V2", href: "https://www.ixbt.com/live/power/obzor-processornogo-kulera-deepcool-ag400-wh-argb-v2.html" },
      { ru: "Ocypus Iota A62 BK", en: "Ocypus Iota A62 BK", href: "https://www.ixbt.com/live/power/obzor-i-testirovanie-kulera-dlya-processora-ocypus-iota-a62-bk.html" },
      { ru: "ID-Cooling DX360", en: "ID-Cooling DX360", href: "https://www.ixbt.com/live/power/obzor-i-testirovanie-processornoy-szho-id-cooling-dx360-max.html" },
      { ru: "ID-Cooling FX240 INF", en: "ID-Cooling FX240 INF", href: "https://www.ixbt.com/live/power/obzor-processornoy-szho-id-cooling-fx240-inf.html" },
      { ru: "ID-Cooling SL360 и ID-Cooling SL360 XE", en: "ID-Cooling SL360 & ID-Cooling SL360 XE", href: "https://www.ixbt.com/live/power/obzor-sistem-zhidkostnogo-ohlazhdeniya-id-cooling-sl360-i-id-cooling-sl360-xe.html" },
      { ru: "ID-Cooling FROZN A720", en: "ID-Cooling FROZN A720 BLACK", href: "https://www.ixbt.com/live/power/obzor-processornogo-kulera-id-cooling-frozn-a720-black-luchshiy-sredi-frozn.html" },
      { ru: "ID-Cooling FROZN A610 ARGB", en: "ID-Cooling FROZN A610 ARGB White", href: "https://www.ixbt.com/live/power/obzor-kulera-id-cooling-frozn-a610-argb-white.html" },
      { ru: "ID-Cooling FROZN A410 ARGB", en: "ID-Cooling FROZN A410 ARGB", href: "https://www.ixbt.com/live/power/obzor-kulera-id-cooling-frozn-a410-argb-novoe-imya-v-byudzhetnom-segmente.html" },
      { ru: "ID-Cooling Dashflow 360 Basic", en: "ID-Cooling Dashflow 360 Basic Black", href: "https://www.ixbt.com/live/power/obzor-processornoy-szho-id-cooling-dashflow-360-basic-black.html" },
      { ru: "ID-Cooling SE-224-XTS MINI", en: "ID-Cooling SE-224-XTS MINI BLACK", href: "https://www.ixbt.com/live/power/obzor-processornogo-kulera-id-cooling-se-224-xts-mini-black-mal-da-udal.html" },
      { ru: "Arctic Cooling F12 PWM PST", en: "Arctic Cooling F12 PWM PST", href: "https://club.dns-shop.ru/review/t-109-ventilyatoryi-dlya-korpusa/101963-obzor-ventilyatora-arctic-cooling-f12-pwm-pst-acfan00200a-acfa/" },
      { ru: "Thermaltake TOUGHLIQUID 280 ARGB Sync AIO", en: "Thermaltake TOUGHLIQUID 280 ARGB Sync AIO", href: "https://club.dns-shop.ru/review/t-106-sistemyi-jidkostnogo-ohlajdeniya-sjo/86645-obzor-sistemyi-jidkostnogo-ohlajdeniya-thermaltake-toughliquid-280/" },
      { ru: "ID-Cooling Dashflow 240 Basic", en: "ID-Cooling Dashflow 240 Basic Black", href: "https://www.ixbt.com/live/power/obzor-sistemy-zhidkostnogo-ohlazhdeniya-id-cooling-dashflow-240-basic-black.html" },
      { ru: "ID-Cooling SE-206 XT", en: "ID-Cooling SE-206 XT", href: "https://www.ixbt.com/live/power/obzor-processornogo-bashennogo-kulera-id-cooling-se-206-xt.html" },
      { ru: "DeepCool AK620", en: "DeepCool AK620", href: "https://club.dns-shop.ru/review/t-105-kuleryi-dlya-protsessorov/70957-obzor-protsessornogo-kulera-deepcool-ak620-teper-i-s-podderjkoi/" },
      { ru: "ID-Cooling SE-207-XT", en: "ID-Cooling SE-207-XT Black", href: "https://www.ixbt.com/live/power/obzor-dvuhsekcionnogo-processornogo-kulera-id-cooling-se-207-xt-black.html" },
      { ru: "ID-Cooling Zoomflow 240XT", en: "ID-Cooling Zoomflow 240XT", href: "https://www.ixbt.com/live/power/obzor-i-testirovanie-sistemy-zhidkostnogo-ohlazhdeniya-id-cooling-zoomflow-240xt.html" },
      { ru: "ID-Cooling SE-234-ARGB", en: "ID-Cooling SE-234-ARGB", href: "https://club.dns-shop.ru/review/t-105-kuleryi-dlya-protsessorov/26707-obzor-protsessornogo-kulera-id-cooling-se-234-argb/" },
      { ru: "ID-Cooling AURAFLOW X 240", en: "ID-Cooling AURAFLOW X 240", href: "https://club.dns-shop.ru/review/t-106-sistemyi-jidkostnogo-ohlajdeniya-sjo/19664-obzor-protsessornoi-svo-id-cooling-auraflow-x-240-auraflow-po-ve/" },
      { ru: "ID-Cooling SE-224-RGB", en: "ID-Cooling SE-224-RGB", href: "https://club.dns-shop.ru/review/t-105-kuleryi-dlya-protsessorov/19705-obzor-i-testirovanie-kulera-id-cooling-se-224-rgb/" },
      { ru: "Zalman CNPS9X Optima", en: "Zalman CNPS9X Optima", href: "https://club.dns-shop.ru/review/t-105-kuleryi-dlya-protsessorov/18360-obzor-i-testirovanie-kulera-zalman-cnps9x-optima/" },
      { ru: "ID-Cooling FROSTFLOW+ 280", en: "ID-Cooling FROSTFLOW+ 280", href: "https://club.dns-shop.ru/review/t-106-sistemyi-jidkostnogo-ohlajdeniya-sjo/17892-obzor-protsessornoi-svo-id-cooling-frostflow-280-dostoinyii-nasl/" }
      //{ ru: "", en: "", href: "link" }
    ]
  },
  {
    icon: ICON_POWER,
    ru: "Блоки питания",
    en: "Power Supplies",
    reviews: [
      { ru: "ID-COOLING FP-1000 — первая платина", en: "ID-COOLING FP-1000 - the first platinum", href: "https://www.ixbt.com/live/power/obzor-bloka-pitaniya-id-cooling-fp-1000----pervaya-platina.html", year: 2026 },
      { ru: "GamerStorm PF600X", en: "GamerStorm PF600X", href: "https://www.ixbt.com/live/power/obzor-bloka-pitaniya-gamerstorm-pf600x-obnovlennyy-byudzhetnik-teper-i-s-bronzoy.html", year: 2026 },
      { ru: "Ocypus Delta P750", en: "Ocypus Delta P750", href: "https://www.ixbt.com/live/power/obzor-i-testirovanie-bloka-pitaniya-ocypus-delta-p750.html" },
      { ru: "Ocypus Iota P850", en: "Ocypus Iota P850", href: "https://www.ixbt.com/live/power/obzor-i-testirovanie-bloka-pitaniya-ocypus-iota-p850.html" },
      { ru: "GamerStorm PN750M WH", en: "GamerStorm PN750M WH", href: "https://club.dns-shop.ru/review/t-104-bloki-pitaniya/143226-obzor-i-testirovanie-bloka-pitaniya-gamerstorm-pn750m-wh/" },
      { ru: "DeepCool PN850M", en: "DeepCool PN850M", href: "https://club.dns-shop.ru/review/t-104-bloki-pitaniya/123669-obzor-i-testirovanie-bloka-pitaniya-deepcool-pn850m-atx3-1-v-ma/" },
      { ru: "Thermaltake Smart BM3 850W", en: "Thermaltake Smart BM3 850W", href: "https://club.dns-shop.ru/review/t-104-bloki-pitaniya/116439-obzor-bloka-pitaniya-thermaltake-smart-bm3-850w-tt-premium-edit/" },
      { ru: "Montech TITAN GOLD 850", en: "Montech TITAN GOLD 850", href: "https://club.dns-shop.ru/review/t-104-bloki-pitaniya/99535-obzor-bloka-pitaniya-montech-titan-gold-850-tis0124/" },
      { ru: "Corsair CX650M", en: "Corsair CX650M", href: "https://club.dns-shop.ru/review/t-104-bloki-pitaniya/70686-obzor-bloka-pitaniya-corsair-cx650m-cp-9020221-eu-moschnostu-650/" },
      { ru: "High Power SP-1050GD (HP1-H1050GD-F14C)", en: "High Power SP-1050GD (HP1-H1050GD-F14C)", href: "https://www.ixbt.com/live/power/obzor-bloka-pitaniya-high-power-sp-1050gd-hp1-h1050gd-f14c-moschnostyu-1050-vt.html" },
      { ru: "High Power SP-750GD (HP1-F750GD-F14C)", en: "High Power SP-750GD (HP1-F750GD-F14C)", href: "https://www.ixbt.com/live/power/obzor-bloka-pitaniya-high-power-sp-750gd-hp1-f750gd-f14c-moschnostyu-750-vt.html" },
      { ru: "DeepCool DQ650-M-V2L", en: "DeepCool DQ650-M-V2L", href: "https://club.dns-shop.ru/review/t-104-bloki-pitaniya/31130-obzor-bloka-pitaniya-moschnostu-650-vt-deepcool-dq650-m-v2l/" },
      { ru: "Seasonic Focus Plus Gold 650W", en: "Seasonic Focus Plus Gold 650W", href: "https://club.dns-shop.ru/review/t-104-bloki-pitaniya/21500-obzor-i-testirovanie-bloka-pitaniya-seasonic-focus-plus-gold-650w/" },
      { ru: "Thermaltake Smart BX1 RGB 650W", en: "Thermaltake Smart BX1 RGB 650W", href: "https://club.dns-shop.ru/review/t-104-bloki-pitaniya/21134-obzor-i-testirovanie-bloka-pitaniya-thermaltake-smart-bx1-rgb-650/" },
      { ru: "Thermaltake Smart BX1 550W", en: "Thermaltake Smart BX1 550W", href: "https://club.dns-shop.ru/review/t-104-bloki-pitaniya/19129-obzor-bloka-pitaniya-thermaltake-smart-bx1-550w/" },
      { ru: "Thermaltake Smart DPS G 650 W", en: "Thermaltake Smart DPS G 650 W", href: "https://club.dns-shop.ru/review/t-104-bloki-pitaniya/17474-obzor-bloka-pitaniya-thermaltake-smart-dps-g-650-w-moda-byit-umn/" }
    ]
  },
  {
    icon: ICON_RAM,
    ru: "Оперативная память",
    en: "RAM / Memory",
    reviews: [
       { ru: "Patriot Viper Steel DDR4 16ГБ (2 x 8ГБ) 3600МГц", en: "Patriot Viper Steel DDR4 16GB (2 x 8GB) 3600MHz", href: "https://club.dns-shop.ru/review/t-103-operativnaya-pamyat/93579-obzor-komplekta-operativnoi-patriot-viper-steel-ddr4-16gb-2-x-8/" },
      { ru: "Gloway Tiance DDR4 16ГБ", en: "Gloway Tiance DDR4 16GB", href: "https://www.ixbt.com/live/platform/obzor-operativnoy-pamyati-ddr4-gloway-tiance-16gb-3200mgc.html" },
      { ru: "Patriot Viper Elite II [PVE2416G360C0K] 16 ГБ", en: "Patriot Viper Elite II [PVE2416G360C0K] 16 GB", href: "https://club.dns-shop.ru/review/t-103-operativnaya-pamyat/65784-obzor-komplekta-operativnoi-pamyati-patriot-viper-elite-ii-pve24/" },
      { ru: "Kingston FURY Renegade [KF436C16RB1K2/32] 32ГБ", en: "Kingston FURY Renegade [KF436C16RB1K2/32] 32GB", href: "https://club.dns-shop.ru/review/t-103-operativnaya-pamyat/60433-obzor-komplekta-operativnoi-pamyati-kingston-fury-renegade-kf436/" },
      { ru: "Patriot Viper 4 Steel [PVS432G320C6K] 32ГБ", en: "Patriot Viper 4 Steel [PVS432G320C6K] 32GB", href: "https://club.dns-shop.ru/review/t-103-operativnaya-pamyat/38943-obzor-komplekta-operativnoi-pamyati-patriot-viper-4-steel-pvs432/" },
      { ru: "A-Data XPG Gammix D10 [AX4U300038G16A-DB10] 16 ГБ", en: "A-Data XPG Gammix D10 [AX4U300038G16A-DB10] 16 GB", href: "https://club.dns-shop.ru/review/t-103-operativnaya-pamyat/30237-obzor-komplekta-operativnoi-pamyati-a-data-xpg-gammix-d10-ax4u30/" },
      { ru: "Kingston HyperX FURY RGB [HX430C15FB3AK2/16] 16 ГБ", en: "Kingston HyperX FURY RGB [HX430C15FB3AK2/16] 16 GB", href: "https://club.dns-shop.ru/review/t-103-operativnaya-pamyat/24559-obzor-operativnoi-pamyati-kingston-hyperx-fury-rgb-hx430c15fb3ak/" },
      { ru: "Crucial Ballistix Sport LT 16 ГБ", en: "Crucial Ballistix Sport LT 16 GB", href: "https://club.dns-shop.ru/review/t-103-operativnaya-pamyat/23007-obzor-i-testirovanie-modulei-operativnoi-pamyati-ddr4-16gb-crucia/" }
      //{ ru: "", en: "", href: "link" }
    ]
  },
  {
    icon: ICON_CASE,
    ru: "Компьютерные корпуса",
    en: "PC Cases",
    reviews: [
      { ru: "ID-COOLING FLOW 500 AIR", en: "ID-COOLING FLOW 500 AIR", href: "https://www.ixbt.com/live/power/obzor-kompyuternogo-korpusa-id-cooling-flow-500-air.html", year: 2026 },
      { ru: "ID-COOLING WARE 310", en: "ID-COOLING WARE 310", href: "https://www.ixbt.com/live/power/obzor-kompyuternogo-korpusa-id-cooling-ware-310.html", year: 2026 },
      { ru: "ID-COOLING VIEW 510 ARGB", en: "ID-COOLING VIEW 510 ARGB", href: "https://www.ixbt.com/live/power/obzor-korpusa-id-cooling-view-510-argb.html", year: 2026 },
      { ru: "Montech SKY 3", en: "Montech SKY 3", href: "https://club.dns-shop.ru/review/t-108-korpusa/176342-obzor-komputernogo-korpusa-montech-sky-3/", year: 2026 },
      { ru: "Montech KING 45 PRO", en: "Montech KING 45 PRO", href: "https://club.dns-shop.ru/review/t-108-korpusa/163064-obzor-korpusa-montech-king-45-pro/", year: 2026 },
      { ru: "Montech HS02 PRO", en: "Montech HS02 PRO White", href: "https://club.dns-shop.ru/review/t-108-korpusa/155919-obzor-komputernogo-korpusa-montech-hs02-pro-hs02-pro-w" },
      { ru: "4FAN XZ Gigabit", en: "4FAN XZ Gigabit", href: "https://www.ixbt.com/live/power/obzor-kompyuternogo-korpusa-4fan-xz-gigabit-wfans.html" },
      { ru: "Ocypus Gamma C70 BK ARGB", en: "Ocypus Gamma C70 BK ARGB", href: "https://www.ixbt.com/live/power/obzor-korpusa-dlya-pk-ocypus-gamma-c70-bk-argb.html" },
      { ru: "Thermaltake View 300 MX", en: "Thermaltake View 300 MX", href: "https://club.dns-shop.ru/review/t-108-korpusa/94985-obzor-korpusa-thermaltake-view-300-mx-ca-1p6-00m1wn-00/" },
      { ru: "Ginzzu V400", en: "Ginzzu V400 White", href: "https://club.dns-shop.ru/review/t-108-korpusa/109269-obzor-komputernogo-korpusa-ginzzu-v400/" },
      { ru: "CORSAIR 4000D", en: "CORSAIR 4000D", href: "https://club.dns-shop.ru/review/t-108-korpusa/44279-obzor-atx-korpusa-corsair-4000d/" },
      { ru: "Corsair 275R Airflow", en: "Corsair 275R Airflow", href: "https://club.dns-shop.ru/review/t-108-korpusa/28656-obzor-korpusa-corsair-275r-airflow/" },
      { ru: "Zet Rare M1", en: "Zet Rare M1", href: "https://club.dns-shop.ru/review/t-108-korpusa/17268-obzor-korpusa-zet-rare-m1/" },
      { ru: "Thermaltake Urban R31 Window", en: "Thermaltake Urban R31 Window", href: "https://club.dns-shop.ru/review/t-108-korpusa/15822-obzor-korpusa-thermaltake-urban-r31-window/" }
    ]
  },
  {
    icon: ICON_CPU,
    ru: "Процессоры",
    en: "Processors",
    reviews: [
      { ru: "Intel Core i7-12700K", en: "Intel Core i7-12700K", href: "https://club.dns-shop.ru/review/t-100-protsessoryi/82865-obzor-protsessora-intel-core-i7-12700k/" },
      { ru: "Intel Core i5-12400F", en: "Intel Core i5-12400F", href: "https://club.dns-shop.ru/review/t-100-protsessoryi/76047-obzor-protsessora-intel-core-i5-12400f/" }
    ]
  },
  {
    icon: ICON_MBOARDS,
    ru: "Материнские платы",
    en: "Motherboards",
    reviews: [
      { ru: "MSI PRO B660M-A DDR4", en: "MSI PRO B660M-A DDR4", href: "https://club.dns-shop.ru/review/t-102-materinskie-platyi/75903-obzor-materinskoi-platyi-msi-pro-b660m-a-ddr4/" }

    ]
  },
  {
    icon: ICON_GPU,
    ru: "Видеокарты",
    en: "Graphics Cards",
    reviews: [
      { ru: "MSI GeForce RTX 3070 Ti VENTUS 3X OC", en: "MSI GeForce RTX 3070 Ti VENTUS 3X OC", href: "https://club.dns-shop.ru/review/t-99-videokartyi/56018-kratkii-obzor-videokartyi-msi-geforce-rtx-3070-ti-ventus-3x-oc/" }
    ]
  },
  //{
    //icon: ICON_MONITOR,
    //ru: "Мониторы",
    //en: "Monitors",
    //reviews: [
    //  { ru: "LG UltraGear 27GR93U: OLED-скорость по IPS-цене", en: "LG UltraGear 27GR93U: OLED speed at IPS price", href: "#mon-lg-27gr93u", year: 2026 },
    //  { ru: "Samsung Odyssey G9 — изогнутый гигант 49 дюймов", en: "Samsung Odyssey G9 — a curved 49-inch giant", href: "#mon-samsung-g9" },
    //  { ru: "Dell U2723QE: рабочий монитор с USB-C хабом", en: "Dell U2723QE: a work monitor with a USB-C hub", href: "#mon-dell-u2723qe" }
    //]
  //},
  //{
    //icon: ICON_TV,
    //ru: "Телевизоры",
    //en: "TVs",
    //reviews: [
      //{ ru: "OLED evo против QLED: LG C4 vs Samsung QN90D", en: "OLED evo vs QLED: LG C4 vs Samsung QN90D", href: "#tv-lg-c4-vs-samsung-qn90d", year: 2026 },
      //{ ru: "Sony 55X95K: флагман Mini-LED на Android TV", en: "Sony 55X95K: Mini-LED flagship on Android TV", href: "#tv-sony-x95k" },
      //{ ru: "Бюджетный Hisense U6K — что умеет Dolby Vision за копейки", en: "Budget Hisense U6K — Dolby Vision for pennies", href: "#tv-hisense-u6k" }
    //]
  //},
  {
    icon: ICON_AUDIO,
    ru: "Аудиотехника",
    en: "Audio Equipment",
    reviews: [
      { ru: "Беспроводная/проводная гарнитура Haylou S40", en: "Wireless headphones Haylou S40", href: "https://mysku.club/blog/aliexpress/105086.html" },
      { ru: "Беспроводные/проводные наушники Baseus Bowie H1s", en: "Wireless headphones Baseus Bowie H1s", href: "https://club.dns-shop.ru/review/t-156-naushniki-i-garnituryi/136695-obzor-besprovodnyih-naushnikov-baseus-bowie-h1s/" },
      { ru: "Наушники AKG K52", en: "Headphones AKG K52", href: "https://club.dns-shop.ru/review/t-156-naushniki-i-garnituryi/57220-obzor-naushnikov-zakryitogo-tipa-akg-k52/" },
      { ru: "Гарнитура CORSAIR HS35", en: "Gaming headset CORSAIR HS35", href: "https://club.dns-shop.ru/review/t-73-igrovyie-naushniki/21582-obzor-igrovoi-garnituryi-corsair-hs35/" },
      { ru: "TWS-наушники Elari NanoPods", en: "TWS-headphones Elari NanoPods", href: "https://club.dns-shop.ru/review/t-156-naushniki-i-garnituryi/19405-obzor-bluetooth-tws-naushnikov-elari-nanopods-v-ushah-kak-doma-i/" },
      { ru: "Беспроводные наушники SOUL Pure Wireless Plus", en: "SOUL Pure Wireless Plus", href: "https://club.dns-shop.ru/review/t-156-naushniki-i-garnituryi/19375-obzor-bluetooth-naushnikov-soul-pure-wireless-plus/" },
      { ru: "Гарнитура OMEN by HP Headset 800", en: "OMEN by HP Headset 800", href: "https://club.dns-shop.ru/review/t-73-igrovyie-naushniki/17459-obzor-igrovoi-garnituryi-omen-by-hp-headset-800/" },
      { ru: "Наушники RHA MA350", en: "Headphones RHA MA350", href: "https://club.dns-shop.ru/review/t-156-naushniki-i-garnituryi/16358-obzor-naushnikov-rha-ma350/" }
    ]
  },
  {
    icon: ICON_ROUTER,
    ru: "Маршрутизаторы",
    en: "Routers",
    reviews: [
      { ru: "Tenda TX2 Pro", en: "Tenda TX2 Pro", href: "https://club.dns-shop.ru/review/t-280-marshrutizatoryi/135157-obzor-i-testirovanie-wi-fi-routera-tenda-tx2-pro/" },
      { ru: "Tenda AC23", en: "Tenda AC23", href: "https://club.dns-shop.ru/review/t-280-marshrutizatoryi/51406-obzor-wi-fi-marshrutizatora-tenda-ac23/" },
      { ru: "Tenda AC19", en: "Tenda AC19", href: "https://club.dns-shop.ru/review/t-280-marshrutizatoryi/50397-obzor-marshrutizatora-tenda-ac19/" },
      { ru: "Tenda AC7 и USB-адаптер Tenda U9", en: "Tenda AC7 & Tenda U9", href: "https://club.dns-shop.ru/review/t-280-marshrutizatoryi/19233-obzor-i-testirovanie-marshrutizatora-tenda-ac7-i-usb-adaptera-ten/" },
      { ru: "Tenda AC10U и Wi-Fi повторитель Tenda A18", en: "Tenda AC10U & Tenda A18", href: "https://club.dns-shop.ru/review/t-280-marshrutizatoryi/18477-obzor-i-testirovanie-marshrutizatora-tenda-ac10u-i-wi-fi-povtorit/" }
    ]
  },
  {
    icon: ICON_INPUT,
    ru: "Клавиатуры / мыши / геймпады",
    en: "Keyboards / Mice / Gamepads",
    reviews: [
      { ru: "Геймпад PB Tails Crush 550", en: "Gamepad PB Tails Crush 550", href: "https://club.dns-shop.ru/review/t-68-kontrolleryi-geimpadyi-ruli/180030-obzor-geimpada-pb-tails-crush-550-universalnyii-igrovoi-kontro/", year: 2026 },
      { ru: "Игровая мышь Corsair Scimitar RGB Elite", en: "Gaming mouse Corsair Scimitar RGB Elite", href: "Игровая мышь Corsair Scimitar RGB Elite" },
      { ru: "Игровая клавиатура ZET Blade Kailh Red", en: "Gaming keyboard ZET Blade Kailh Red", href: "https://club.dns-shop.ru/review/t-69-igrovyie-klaviaturyi/19562-obzor-mehanicheskoi-klaviaturyi-zet-blade-kailh-red-rabota-nad-osh/" },
      { ru: "Игровая мышь Tt eSPORTS NEMESIS SWITCH Optical RGB", en: "Gaming mouse Tt eSPORTS NEMESIS SWITCH Optical RGB", href: "https://club.dns-shop.ru/review/t-70-igrovyie-myishi/18663-obzor-igrovoi-myishi-tt-esports-nemesis-switch-optical-rgb/" }
    ]
  },
  {
    icon: ICON_MEMORYCARD,
    ru: "Карты памяти и USB-накопители",
    en: "Memory Cards & USB Drives",
    reviews: [
      { ru: "Тестирование четырех microSDXC 64ГБ карт памяти", en: "Testing four 64GB microSDXC memory cards", href: "https://mysku.club/blog/aliexpress/105863.html", year: 2026 },
      { ru: "Флешки USB 2.0 Smartbuy Berry 8 и 16 ГБ", en: "Smartbuy Berry 8 и 16 GB flash drive", href: "https://mysku.club/blog/russia-stores/102183.html" },
      { ru: "Карта памяти microSDXC Transcend 300S 128ГБ", en: "microSDXC Transcend 300S 128GB", href: "https://club.dns-shop.ru/review/t-127-kartyi-pamyati/58315-obzor-microsdxc-kartyi-pamyati-transcend-300s-obemom-128-gb/"}
    ]
  },
  {
    icon: ICON_HDD,
    ru: "Жесткие диски",
    en: "Hard Disk Drives",
    reviews: [
      { ru: "WD Blue [WD20EZAZ]", en: "WD Blue [WD20EZAZ]", href: "https://www.ixbt.com/live/data/beglyy-obzor-zhestkogo-diska-wd-blue-wd20ezaz-emkost-2tb.html" }
    ]
  },
  {
    icon: ICON_FURNITURE,
    ru: "Мебель",
    en: "Furniture",
    reviews: [
      { ru: "Игровое кресло DRIFT DR100", en: "Chair DRIFT DR100", href: "https://club.dns-shop.ru/review/t-72-igrovyie-kresla/60904-obzor-igrovogo-kresla-drift-dr100/" },
      { ru: "Игровое кресло ZET Chaos guard 200K", en: "Chair ZET Chaos guard 200K", href: "https://club.dns-shop.ru/review/t-72-igrovyie-kresla/18149-obzor-igrovogo-kresla-zet-chaos-guard-200k-est-li-jizn-v-budj/" }
    ]
  },
  {
    icon: ICON_APPLIANCE,
    ru: "Бытовая техника",
    en: "Home Appliances",
    reviews: [
      { ru: "Электрическая мясорубка Timberk T-MG45M02", en: "Electric meat grinder Timberk T-MG45M02", href: "https://club.dns-shop.ru/review/t-192-myasorubki/126193-obzor-elektricheskoi-myasorubki-timberk-t-mg45m02/" },
      { ru: "Вертикальный пылесос Deerma DX888", en: "", href: "https://club.dns-shop.ru/review/t-440-pyilesosyi-vertikalnyie-i-ruchnyie/125786-obzor-budjetnogo-provodnogo-vertikalnogo-pyilesosa-deerma-dx888/" },
      { ru: "Электрический чайник Xiaomi Mi Smart Kettle Pro", en: "Xiaomi Mi Smart Kettle Pro", href: "https://club.dns-shop.ru/review/t-208-elektrochainiki/43913-obzor-elektricheskogo-chainika-xiaomi-mi-smart-kettle-pro/" },
      { ru: "Электрическая мясорубка Sinbo SHB 3165", en: "Electric meat grinder Sinbo SHB 3165", href: "https://club.dns-shop.ru/review/t-192-myasorubki/27631-obzor-myasorubki-sinbo-shb-3165/" },
      { ru: "Сетевой фильтр Harper UCH-530", en: "Power strip with charger Harper UCH-530", href: "https://club.dns-shop.ru/review/t-322-setevyie-filtryi-i-rozetki/25205-obzor-setevogo-filtra-harper-uch-530/" },
      { ru: "Электрический чайник Xiaomi Mi Smart Electric Kettle", en: "Xiaomi Mi Smart Electric Kettle", href: "https://club.dns-shop.ru/review/t-208-elektrochainiki/17971-obzor-elektricheskogo-chainika-xiaomi-mi-smart-electric-kettle-pr/" }
    ]
  },
  {
    icon: ICON_TOOLS,
    ru: "Инструменты",
    en: "Tools",
    reviews: [
      { ru: "Торцовочная пила CAT DX5200", en: "Miter saw CAT DX5200", href: "https://club.dns-shop.ru/review/t-359-tortsovochnyie-pilyi/187494-obzor-tortsovochnoi-pilyi-cat-dx5200/", year: 2026 },
      { ru: "Бензопила FinePower SPS4516", en: "Chainsaw FinePower SPS4516", href: "https://club.dns-shop.ru/review/t-245-tsepnyie-pilyi/150427-obzor-benzopilyi-finepower-sps4516/" },
      { ru: "Бензопила FinePower SPS5018", en: "Chainsaw FinePower SPS5018", href: "https://club.dns-shop.ru/review/t-245-tsepnyie-pilyi/149579-obzor-benzopilyi-finepower-sps5018/" },
      { ru: "Бензиновый триммер FinePower GTP252", en: "Brush cutter FinePower GTP252", href: "https://club.dns-shop.ru/review/t-487-trimmeryi-benzinovyie/146659-obzor-benzinovogo-trimmera-finepower-gtp252/" },
      { ru: "Гайковерт FinePower OneBase CIWBL400 OneBase20", en: "Impact wrench FinePower OneBase CIWBL400 OneBase20", href: "https://club.dns-shop.ru/review/t-433-gaikovertyi/130443-obzor-akkumulyatornogo-gaikoverta-finepower-onebase-ciwbl400-oneb/" },
      { ru: "Заточной станок Вихрь СЗЦ-10", en: "Sharpening machine Вихрь СЗЦ-10", href: "https://club.dns-shop.ru/review/t-436-zatochnyie-stanki-tochila/119230-obzor-stanka-dlya-zatochki-pilnyih-tsepei-vihr-szts-10/" },
      { ru: "УШМ Зубр УШМ-125-805", en: "Angle grinder Зубр УШМ-125-805", href: "https://club.dns-shop.ru/review/t-243-uglovyie-shlifovalnyie-mashinyi/102403-obzor-ugloshlifovalnoi-mashinyi-zubr-ushm-125-805/" },
      { ru: "Шуруповерт DEKO Banger 12V", en: "Screwdriver DEKO Banger 12V", href: "https://club.dns-shop.ru/review/t-239-shurupovertyi/83142-obzor-akkumulyatornogo-shurupoverta-deko-banger-12v/" },
      { ru: "Заточной станок DEKO DKGM150-150", en: "Sharpening machine DEKO DKGM150-150", href: "https://club.dns-shop.ru/review/t-367-stanki/81597-obzor-zatochnogo-stanka-deko-dkgm150-150/" },
      { ru: "Сабельная пила BORT BRS-21LI-FD", en: "Reciprocating saw BORT BRS-21LI-FD", href: "https://club.dns-shop.ru/review/t-360-sabelnyie-pilyi/77946-obzor-sabelnoi-pilyi-bort-brs-21li-fd/" },
      { ru: "Рубанок Ресанта Р-82СТ", en: "Plane Ресанта Р-82СТ", href: "https://club.dns-shop.ru/review/t-256-drugie-instrumentyi/71358-obzor-elektrorubanka-resanta-r-82st/" },
      { ru: "Шуруповерт DEKO DKCD12FU-Li", en: "Screwdriver DEKO DKCD12FU-Li", href: "https://club.dns-shop.ru/review/t-239-shurupovertyi/67132-obzor-akkumulyatornogo-shurupoverta-deko-dkcd12fu-li/" },
      { ru: "Дисковая пила Ресанта ДП-190/1800", en: "Buzz saw Ресанта ДП-190/1800", href: "https://club.dns-shop.ru/review/t-246-diskovyie-pilyi/60089-obzor-diskovoi-pilyi-resanta-dp-190-1800/" },
      { ru: "Цепная пила Bosch UniversalChain 35", en: "Chainsaw Bosch UniversalChain 35", href: "https://club.dns-shop.ru/review/t-245-tsepnyie-pilyi/51849-obzor-tsepnoi-pilyi-bosch-universalchain-35/" },
      { ru: "Бензопила Fubag FPS 37", en: "Chainsaw Fubag FPS 37", href: "https://club.dns-shop.ru/review/t-245-tsepnyie-pilyi/19636-obzor-i-testirovanie-benzopilyi-fubag-fps-37/" },
      { ru: "Подкатной домкрат Вихрь ДМК-2К", en: "Lift jack Вихрь ДМК-2К", href: "https://club.dns-shop.ru/review/t-268-domkratyi/41681-obzor-podkatnogo-gidravlicheskogo-domkrata-vihr-dmk-2k/" },
      { ru: "Мультиметр RGK DM-20", en: "Multimeter RGK DM-20", href: "https://club.dns-shop.ru/review/t-256-drugie-instrumentyi/40838-obzor-multimetra-rgk-dm-20/" },
      { ru: "Шуруповерт Ресанта ДА-18-2ЛК", en: "Screwdriver Ресанта ДА-18-2ЛК", href: "https://club.dns-shop.ru/review/t-239-shurupovertyi/34727-obzor-akkumulyatornoi-dreli-shurupoverta-resanta-da-18-2lk/" }
    ]
  },
  {
    icon: ICON_GUIDES,
    ru: "Гайды", en: "Guides",
    reviews: [
      { ru: "Шпаргалка, как по версии прошивки опознать производителя контроллера SSD", en: "A cheat sheet on how to identify the SSD controller manufacturer based on the firmware version.", href: "https://club.dns-shop.ru/post/165137/", year: 2026 },
      { ru: "Небольшая записка о зависимости производительности СЖО от скорости вращения помпы, на примере ID-COOLING DX360 MAX", en: "A brief note on the relationship between the performance of an AIO cooler and the pump speed, using the ID‑COOLING DX360 MAX as an example.", href: "https://club.dns-shop.ru/post/142308/", year: 2025 },
      { ru: "Экскурсия в музей вычислительной техники Дмитрия Бачило в Новосибирске", en: "A tour of the Dmitry Bachilo Museum of Computing Technology in Novosibirsk.", href: "https://club.dns-shop.ru/blog/t-65-igrovyie-konsoli/113255-ekskursiya-v-muzei-vyichislitelnoi-tehniki-dmitriya-bachilo-v-novosi/", year: 2022 }
    ]
  }
];

// Fill in publication years for reviews without an explicit one
(function () {
  const EARLY = [2021, 2022, 2023, 2024];
  let i = 0;
  CATEGORIES.forEach((cat) => cat.reviews.forEach((r) => {
    if (!r.year) r.year = EARLY[i++ % EARLY.length];
  }));
})();

const CURRENT_YEAR = 2026;

function reviewsThisYear() {
  return CATEGORIES.reduce((sum, c) =>
    sum + c.reviews.filter((r) => r.year === CURRENT_YEAR).length, 0);
}

/* ================= i18n (static texts) ================= */

const I18N = {
  ru: {
    pageTitle: "kell — Обзоры техники и электроники",
    siteTitle: "Обзоры техники и электроники",
    siteSubtitle: "Честные и подробные обзоры: от SSD до телевизоров",
    reviewCountLabel: "обзоров опубликовано",
    yearCountLabel: "обзоров в этом году",
    authorHeading: "Об авторе",
    authorAvatar: "kell",
    authorName: "Александр 'kell' Нечаев",
    authorRole: "Технический обозреватель",
    authorBio: "Более 10 лет занимаюсь тестированием компьютерного железа и бытовой электроники. Моя цель — помочь людям сделать правильный выбор, предоставляя честные и подробные обзоры. Специализируюсь на компьютерных комплектующих, периферии, бытовой технике и инструментах",
    statYearsLabel: "лет опыта",
    statTestsLabel: "материалов написано",
    statSubsLabel: "площадок с публикациями",
    latestHeading: "Последние обзоры",
    latestBadge: "Новинка",
    latestLinkText: "Читать обзор →",
    catalogHeading: "Каталог обзоров",
    catalogHint: "Выберите категорию, чтобы раскрыть список обзоров",
    buttonsHeading: "Быстрые ссылки на площадки с моими обзорами",
    mailBtnText: "Написать на почту",
    footerText: "© 2026. Все обзоры — личный опыт автора.",
    langLabel: "EN",
    reviewsWord: "обзора" // badge text: "3 обзора"
  },
  en: {
    pageTitle: "kell — Tech & Electronics Reviews",
    siteTitle: "Tech & Electronics Reviews",
    siteSubtitle: "Honest, detailed reviews: from SSDs to TVs",
    reviewCountLabel: "reviews published",
    yearCountLabel: "reviews this year",
    authorHeading: "About the Author",
    authorAvatar: "kell",
    authorName: "Aleksandr 'kell' Nechaev",
    authorRole: "Tech reviewer",
    authorBio: "For over 10 years I have been testing computer hardware and consumer electronics. My goal is to help people make the right choice by providing honest and detailed reviews. I specialize in computer components, peripherals, consumer appliances, and tools.",
    statYearsLabel: "years of experience",
    statTestsLabel: "reviews published",
    statSubsLabel: "platforms with publications",
    catalogHeading: "Review Catalog",
    catalogHint: "Select a category to expand the list of reviews",
    latestHeading: "Latest Reviews",
    latestBadge: "New",
    latestLinkText: "Read review →",
    buttonsHeading: "Quick links to platforms with my reviews",
    mailBtnText: "Send an email",
    footerText: "© 2026. All reviews are the author's personal experience.",
    langLabel: "РУС",
    reviewsWord: "reviews"
  }
};

let currentLang = localStorage.getItem("lang") || "ru";

/* ================= Helpers ================= */

function totalReviews() {
  return CATEGORIES.reduce((sum, c) => sum + c.reviews.length, 0);
}

// Animated counter
function animateCounter(el, target, duration) {
  const start = performance.now();
  function tick(now) {
    const p = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - p, 3); // ease-out cubic
    el.textContent = Math.round(target * eased);
    if (p < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

/* ================= Build catalog ================= */

function buildCatalog() {
  const catalog = document.getElementById("catalog");
  catalog.innerHTML = "";

  CATEGORIES.forEach((cat, idx) => {
    const catEl = document.createElement("div");
    catEl.className = "category";

    // Level 1: category header (dropdown toggle)
    const header = document.createElement("button");
    header.type = "button";
    header.className = "category-header";
    header.setAttribute("aria-expanded", "false");

    // SVG icon (24x24 stroke paths stored in cat.icon)
    const icon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    icon.setAttribute("class", "category-icon");
    icon.setAttribute("viewBox", "0 0 24 24");
    icon.setAttribute("width", "24");
    icon.setAttribute("height", "24");
    icon.setAttribute("fill", "none");
    icon.setAttribute("stroke", "currentColor");
    icon.setAttribute("stroke-width", "1.8");
    icon.setAttribute("stroke-linecap", "round");
    icon.setAttribute("stroke-linejoin", "round");
    icon.setAttribute("aria-hidden", "true");
    icon.innerHTML = cat.icon;

    const name = document.createElement("span");
    name.className = "category-name";
    name.dataset.index = idx;

    const count = document.createElement("span");
    count.className = "category-count";
    count.dataset.index = idx;

    const chevron = document.createElement("span");
    chevron.className = "chevron";

    header.append(icon, name, count, chevron);

    // Level 2: list of review links
    const list = document.createElement("div");
    list.className = "review-list";

    cat.reviews.forEach((rev, rIdx) => {
      const a = document.createElement("a");
      a.href = rev.href;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      a.dataset.catIndex = idx;
      a.dataset.revIndex = rIdx;
      list.appendChild(a);
    });

    header.addEventListener("click", () => {
      const isOpen = catEl.classList.toggle("open");
      header.setAttribute("aria-expanded", String(isOpen));
    });

    catEl.append(header, list);
    catalog.appendChild(catEl);
  });
}

/* ================= Build latest review cards ================= */

// Three most recent reviews (year 2026, taken in data order) rendered
// as cards right before the "About the Author" section.
function getLatestReviews(n) {
  const out = [];
  for (const cat of CATEGORIES) {
    for (let i = 0; i < cat.reviews.length && out.length < n; i++) {
      const rev = cat.reviews[i];
      if (rev.year === CURRENT_YEAR) out.push({ cat, rev });
    }
    if (out.length >= n) break;
  }
  return out.slice(0, n);
}

function buildLatestCards() {
  const wrap = document.getElementById("latestCards");
  wrap.innerHTML = "";

  getLatestReviews(3).forEach(({ cat, rev }) => {
    const card = document.createElement("article");
    card.className = "latest-card";

    const badge = document.createElement("span");
    badge.className = "latest-badge";
    badge.dataset.role = "badge";

    const category = document.createElement("div");
    category.className = "latest-category";
    category.dataset.catIndex = CATEGORIES.indexOf(cat);

    const title = document.createElement("h3");
    title.className = "latest-title";
    title.dataset.catIndex = CATEGORIES.indexOf(cat);
    title.dataset.revIndex = cat.reviews.indexOf(rev);

    const link = document.createElement("a");
    link.className = "latest-link";
    link.href = rev.href;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.dataset.role = "link";

    card.append(badge, category, title, link);
    wrap.appendChild(card);
  });
}

/* ================= Apply language ================= */

function applyLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("lang", lang);
  const t = I18N[lang];

  document.documentElement.lang = lang === "ru" ? "ru" : "en";
  document.title = t.pageTitle;

  const setText = (id, text) => {
    const el = document.getElementById(id);
    if (el) el.textContent = text;
  };

  setText("siteTitle", t.siteTitle);
  setText("siteSubtitle", t.siteSubtitle);
  setText("reviewCountLabel", t.reviewCountLabel);
  setText("reviewCountYearLabel", t.yearCountLabel);
  setText("authorHeading", t.authorHeading);
  setText("authorAvatar", t.authorAvatar);
  setText("authorName", t.authorName);
  setText("authorRole", t.authorRole);
  setText("authorBio", t.authorBio);
  setText("statYearsLabel", t.statYearsLabel);
  setText("statTestsLabel", t.statTestsLabel);
  setText("statSubsLabel", t.statSubsLabel);
  setText("catalogHeading", t.catalogHeading);
  setText("catalogHint", t.catalogHint);
  setText("latestHeading", t.latestHeading);
  setText("buttonsHeading", t.buttonsHeading);
  setText("mailBtnText", t.mailBtnText);
  setText("footerText", t.footerText);
  setText("langLabel", t.langLabel);

  // Update category names, badges and review links
  document.querySelectorAll(".category-name").forEach((el) => {
    const cat = CATEGORIES[+el.dataset.index];
    el.textContent = cat[lang];
  });
  document.querySelectorAll(".category-count").forEach((el) => {
    const cat = CATEGORIES[+el.dataset.index];
    el.textContent = cat.reviews.length + " " + t.reviewsWord;
  });
  document.querySelectorAll(".review-list a").forEach((a) => {
    const cat = CATEGORIES[+a.dataset.catIndex];
    a.textContent = cat.reviews[+a.dataset.revIndex][lang];
  });

  // Update latest review cards
  document.querySelectorAll(".latest-card").forEach((card) => {
    const cat = CATEGORIES[+card.querySelector(".latest-category").dataset.catIndex];
    const titleEl = card.querySelector(".latest-title");
    card.querySelector(".latest-badge").textContent = t.latestBadge;
    card.querySelector(".latest-category").textContent = cat[lang];
    titleEl.textContent = cat.reviews[+titleEl.dataset.revIndex][lang];
    card.querySelector(".latest-link").textContent = t.latestLinkText;
  });
}

/* ================= Init ================= */

document.addEventListener("DOMContentLoaded", () => {
  buildCatalog();
  buildLatestCards();
  applyLanguage(currentLang);

  // Animated review counters
  animateCounter(document.getElementById("reviewCount"), totalReviews(), 1500);
  setTimeout(() => animateCounter(document.getElementById("reviewCountYear"), reviewsThisYear(), 1200), 250);

  // Language toggle button
  document.getElementById("langToggle").addEventListener("click", () => {
    applyLanguage(currentLang === "ru" ? "en" : "ru");
  });
});
