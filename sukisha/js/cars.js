"use strict";

/*
==================================================
 好き車9選 車種データ

 基本ルール
 ・1994年以降を中心に収録
 ・1993年以前でも人気の高い旧車は収録
 ・人気型式 / 人気グレードは独立候補
 ・細かすぎるグレード違いは作らない
 ・image: null の場合は NO IMAGE 表示
==================================================
*/

const CAR_DATA_VERSION = 4;


/*
==================================================
 車種データ
==================================================
*/

const cars = [

    /* ==================================================
       NISSAN
    ================================================== */


    /* ---------- セフィーロ ---------- */

    {
        id: "nissan-cefiro-a31",
        maker: "日産",
        name: "セフィーロ",
        generation: "A31",
        model: "A31",
        grade: null,
        image: null,
        enabled: true,
        order: 10010
    },


    /* ---------- ローレル ---------- */

    {
        id: "nissan-laurel-c33",
        maker: "日産",
        name: "ローレル",
        generation: "C33",
        model: "C33",
        grade: null,
        image: null,
        enabled: true,
        order: 10110
    },

    {
        id: "nissan-laurel-c34",
        maker: "日産",
        name: "ローレル",
        generation: "C34",
        model: "C34",
        grade: null,
        image: null,
        enabled: true,
        order: 10120
    },

    {
        id: "nissan-laurel-c35",
        maker: "日産",
        name: "ローレル",
        generation: "C35",
        model: "C35",
        grade: null,
        image: null,
        enabled: true,
        order: 10130
    },


    /* ---------- シルビア ---------- */

    {
        id: "nissan-silvia-s13",
        maker: "日産",
        name: "シルビア",
        generation: "S13",
        model: "S13",
        grade: null,
        image: null,
        enabled: true,
        order: 10210
    },

    {
        id: "nissan-silvia-s14",
        maker: "日産",
        name: "シルビア",
        generation: "S14",
        model: "S14",
        grade: null,
        image: null,
        enabled: true,
        order: 10220
    },

    {
        id: "nissan-silvia-s15-spec-r",
        maker: "日産",
        name: "シルビア",
        generation: "S15",
        model: "S15",
        grade: "spec-R",
        image: null,
        enabled: true,
        order: 10230
    },

    {
        id: "nissan-silvia-s15-spec-s",
        maker: "日産",
        name: "シルビア",
        generation: "S15",
        model: "S15",
        grade: "spec-S",
        image: null,
        enabled: true,
        order: 10240
    },


    /* ---------- 180SX ---------- */

    {
        id: "nissan-180sx-rps13",
        maker: "日産",
        name: "180SX",
        generation: "RPS13",
        model: "RPS13",
        grade: null,
        image: null,
        enabled: true,
        order: 10310
    },

    {
        id: "nissan-180sx-rps13-type-x",
        maker: "日産",
        name: "180SX",
        generation: "RPS13",
        model: "RPS13",
        grade: "TYPE X",
        image: null,
        enabled: true,
        order: 10320
    },


    /* ---------- スカイライン R32 ---------- */

    {
        id: "nissan-skyline-hcr32",
        maker: "日産",
        name: "スカイライン",
        generation: "R32",
        model: "HCR32",
        grade: "GTS-t系",
        image: null,
        enabled: true,
        order: 10410
    },

    {
        id: "nissan-skyline-bnr32",
        maker: "日産",
        name: "スカイラインGT-R",
        generation: "R32",
        model: "BNR32",
        grade: "GT-R",
        image: null,
        enabled: true,
        order: 10420
    },


    /* ---------- スカイライン R33 ---------- */

    {
        id: "nissan-skyline-ecr33",
        maker: "日産",
        name: "スカイライン",
        generation: "R33",
        model: "ECR33",
        grade: "GTS25t系",
        image: null,
        enabled: true,
        order: 10430
    },

    {
        id: "nissan-skyline-bcnr33",
        maker: "日産",
        name: "スカイラインGT-R",
        generation: "R33",
        model: "BCNR33",
        grade: "GT-R",
        image: null,
        enabled: true,
        order: 10440
    },


    /* ---------- スカイライン R34 ---------- */

    {
        id: "nissan-skyline-er34",
        maker: "日産",
        name: "スカイライン",
        generation: "R34",
        model: "ER34",
        grade: "25GT系",
        image: null,
        enabled: true,
        order: 10450
    },

    {
        id: "nissan-skyline-bnr34",
        maker: "日産",
        name: "スカイラインGT-R",
        generation: "R34",
        model: "BNR34",
        grade: "GT-R",
        image: null,
        enabled: true,
        order: 10460
    },


    /* ---------- スカイライン V系 ---------- */

    {
        id: "nissan-skyline-v35",
        maker: "日産",
        name: "スカイライン",
        generation: "V35",
        model: "V35",
        grade: null,
        image: null,
        enabled: true,
        order: 10470
    },

    {
        id: "nissan-skyline-v36",
        maker: "日産",
        name: "スカイライン",
        generation: "V36",
        model: "V36",
        grade: null,
        image: null,
        enabled: true,
        order: 10480
    },

    {
        id: "nissan-skyline-v37",
        maker: "日産",
        name: "スカイライン",
        generation: "V37",
        model: "V37",
        grade: null,
        image: null,
        enabled: true,
        order: 10490
    },


    /* ---------- GT-R ---------- */

    {
        id: "nissan-gtr-r35",
        maker: "日産",
        name: "GT-R",
        generation: "R35",
        model: "R35",
        grade: null,
        image: null,
        enabled: true,
        order: 10510
    },


    /* ---------- フェアレディZ ---------- */

    {
        id: "nissan-fairlady-z-z32",
        maker: "日産",
        name: "フェアレディZ",
        generation: "Z32",
        model: "Z32",
        grade: null,
        image: null,
        enabled: true,
        order: 10610
    },

    {
        id: "nissan-fairlady-z-z33",
        maker: "日産",
        name: "フェアレディZ",
        generation: "Z33",
        model: "Z33",
        grade: null,
        image: null,
        enabled: true,
        order: 10620
    },

    {
        id: "nissan-fairlady-z-z34",
        maker: "日産",
        name: "フェアレディZ",
        generation: "Z34",
        model: "Z34",
        grade: null,
        image: null,
        enabled: true,
        order: 10630
    },

    {
        id: "nissan-fairlady-z-rz34",
        maker: "日産",
        name: "フェアレディZ",
        generation: "RZ34",
        model: "RZ34",
        grade: null,
        image: null,
        enabled: true,
        order: 10640
    },


    /* ---------- ステージア ---------- */

    {
        id: "nissan-stagea-wc34",
        maker: "日産",
        name: "ステージア",
        generation: "WC34",
        model: "WC34",
        grade: null,
        image: null,
        enabled: true,
        order: 10710
    },

    {
        id: "nissan-stagea-wgnc34-260rs",
        maker: "日産",
        name: "ステージア",
        generation: "WC34",
        model: "WGNC34",
        grade: "260RS",
        image: null,
        enabled: true,
        order: 10720
    },

    {
        id: "nissan-stagea-m35",
        maker: "日産",
        name: "ステージア",
        generation: "M35",
        model: "M35",
        grade: null,
        image: null,
        enabled: true,
        order: 10730
    },


    /* ---------- シーマ ---------- */

    {
        id: "nissan-cima-y33",
        maker: "日産",
        name: "シーマ",
        generation: "Y33",
        model: "Y33",
        grade: null,
        image: null,
        enabled: true,
        order: 10810
    },

    {
        id: "nissan-cima-f50",
        maker: "日産",
        name: "シーマ",
        generation: "F50",
        model: "F50",
        grade: null,
        image: null,
        enabled: true,
        order: 10820
    },

    {
        id: "nissan-cima-y51",
        maker: "日産",
        name: "シーマ",
        generation: "Y51",
        model: "HGY51",
        grade: null,
        image: null,
        enabled: true,
        order: 10830
    },


    /* ---------- セドリック ---------- */

    {
        id: "nissan-cedric-y33",
        maker: "日産",
        name: "セドリック",
        generation: "Y33",
        model: "Y33",
        grade: null,
        image: null,
        enabled: true,
        order: 10910
    },

    {
        id: "nissan-cedric-y34",
        maker: "日産",
        name: "セドリック",
        generation: "Y34",
        model: "Y34",
        grade: null,
        image: null,
        enabled: true,
        order: 10920
    },


    /* ---------- グロリア ---------- */

    {
        id: "nissan-gloria-y33",
        maker: "日産",
        name: "グロリア",
        generation: "Y33",
        model: "Y33",
        grade: null,
        image: null,
        enabled: true,
        order: 11010
    },

    {
        id: "nissan-gloria-y34",
        maker: "日産",
        name: "グロリア",
        generation: "Y34",
        model: "Y34",
        grade: null,
        image: null,
        enabled: true,
        order: 11020
    },


    /* ---------- フーガ ---------- */

    {
        id: "nissan-fuga-y50",
        maker: "日産",
        name: "フーガ",
        generation: "Y50",
        model: "Y50",
        grade: null,
        image: null,
        enabled: true,
        order: 11110
    },

    {
        id: "nissan-fuga-y51",
        maker: "日産",
        name: "フーガ",
        generation: "Y51",
        model: "Y51",
        grade: null,
        image: null,
        enabled: true,
        order: 11120
    },


    /* ==================================================
       HONDA
       現在はテスト兼初期データ
    ================================================== */

    {
        id: "honda-civic-ef9",
        maker: "ホンダ",
        name: "シビック",
        generation: "EF",
        model: "EF9",
        grade: "SiR",
        image: null,
        enabled: true,
        order: 20010
    },

    {
        id: "honda-civic-eg6",
        maker: "ホンダ",
        name: "シビック",
        generation: "EG",
        model: "EG6",
        grade: "SiR",
        image: null,
        enabled: true,
        order: 20020
    },

    {
        id: "honda-civic-ek4",
        maker: "ホンダ",
        name: "シビック",
        generation: "EK",
        model: "EK4",
        grade: "SiR",
        image: null,
        enabled: true,
        order: 20030
    },

    {
        id: "honda-civic-ek9",
        maker: "ホンダ",
        name: "シビック Type R",
        generation: "EK",
        model: "EK9",
        grade: "Type R",
        image: null,
        enabled: true,
        order: 20040
    },

    {
        id: "honda-civic-ep3",
        maker: "ホンダ",
        name: "シビック Type R",
        generation: "EP",
        model: "EP3",
        grade: "Type R",
        image: null,
        enabled: true,
        order: 20050
    },

    {
        id: "honda-civic-fd2",
        maker: "ホンダ",
        name: "シビック Type R",
        generation: "FD",
        model: "FD2",
        grade: "Type R",
        image: null,
        enabled: true,
        order: 20060
    },


    /* ==================================================
       MAZDA
    ================================================== */

    {
        id: "mazda-roadster-na",
        maker: "マツダ",
        name: "ロードスター",
        generation: "NA",
        model: "NA",
        grade: null,
        image: null,
        enabled: true,
        order: 30010
    },

    {
        id: "mazda-roadster-nb",
        maker: "マツダ",
        name: "ロードスター",
        generation: "NB",
        model: "NB",
        grade: null,
        image: null,
        enabled: true,
        order: 30020
    },

    {
        id: "mazda-roadster-nc",
        maker: "マツダ",
        name: "ロードスター",
        generation: "NC",
        model: "NCEC",
        grade: null,
        image: null,
        enabled: true,
        order: 30030
    },

    {
        id: "mazda-roadster-nd",
        maker: "マツダ",
        name: "ロードスター",
        generation: "ND",
        model: "ND",
        grade: null,
        image: null,
        enabled: true,
        order: 30040
    },

    {
        id: "mazda-rx7-fc3s",
        maker: "マツダ",
        name: "RX-7",
        generation: "FC",
        model: "FC3S",
        grade: null,
        image: null,
        enabled: true,
        order: 30110
    },

    {
        id: "mazda-rx7-fd3s",
        maker: "マツダ",
        name: "RX-7",
        generation: "FD",
        model: "FD3S",
        grade: null,
        image: null,
        enabled: true,
        order: 30120
    },


    /* ==================================================
       TOYOTA
    ================================================== */

    {
        id: "toyota-chaser-jzx90-tourerv",
        maker: "トヨタ",
        name: "チェイサー",
        generation: "X90",
        model: "JZX90",
        grade: "ツアラーV",
        image: null,
        enabled: true,
        order: 40010
    },

    {
        id: "toyota-chaser-jzx100-tourerv",
        maker: "トヨタ",
        name: "チェイサー",
        generation: "X100",
        model: "JZX100",
        grade: "ツアラーV",
        image: null,
        enabled: true,
        order: 40020
    },

    {
        id: "toyota-mark2-jzx100-tourerv",
        maker: "トヨタ",
        name: "マークII",
        generation: "X100",
        model: "JZX100",
        grade: "ツアラーV",
        image: null,
        enabled: true,
        order: 40110
    },

    {
        id: "toyota-cresta-jzx100-roulantg",
        maker: "トヨタ",
        name: "クレスタ",
        generation: "X100",
        model: "JZX100",
        grade: "ルラーンG",
        image: null,
        enabled: true,
        order: 40210
    },

    {
        id: "toyota-sprinter-trueno-ae86",
        maker: "トヨタ",
        name: "スプリンタートレノ",
        generation: "AE86",
        model: "AE86",
        grade: null,
        image: null,
        enabled: true,
        order: 40310
    },

    {
        id: "toyota-86-zn6",
        maker: "トヨタ",
        name: "86",
        generation: "ZN6",
        model: "ZN6",
        grade: null,
        image: null,
        enabled: true,
        order: 40410
    }

    /* ==================================================
   TOYOTA 追加タグ
================================================== */


/* ---------- チェイサー ---------- */

,{
    id: "toyota-chaser-jzx90",
    maker: "トヨタ",
    name: "チェイサー",
    generation: "X90",
    model: "JZX90",
    grade: "その他",
    image: null,
    enabled: true,
    order: 40015
},

{
    id: "toyota-chaser-jzx100-tourers",
    maker: "トヨタ",
    name: "チェイサー",
    generation: "X100",
    model: "JZX100",
    grade: "ツアラーＳ",
    image: null,
    enabled: false,
    order: 40025
},

{
    id: "toyota-chaser-jzx100-other",
    maker: "トヨタ",
    name: "チェイサー",
    generation: "X100",
    model: "JZX100",
    grade: "その他",
    image: null,
    enabled: true,
    order: 40030
},


/* ---------- マークII ---------- */

{
    id: "toyota-mark2-jzx90-tourerv",
    maker: "トヨタ",
    name: "マークII",
    generation: "X90",
    model: "JZX90",
    grade: "ツアラーV",
    image: null,
    enabled: true,
    order: 40100
},

{
    id: "toyota-mark2-jzx90-other",
    maker: "トヨタ",
    name: "マークII",
    generation: "X90",
    model: "JZX90",
    grade: "その他",
    image: null,
    enabled: true,
    order: 40105
},

{
    id: "toyota-mark2-jzx100-other",
    maker: "トヨタ",
    name: "マークII",
    generation: "X100",
    model: "JZX100",
    grade: "その他",
    image: null,
    enabled: true,
    order: 40120
},

{
    id: "toyota-mark2-jzx110-irv",
    maker: "トヨタ",
    name: "マークII",
    generation: "X110",
    model: "JZX110",
    grade: "iR-V",
    image: null,
    enabled: true,
    order: 40130
},

{
    id: "toyota-mark2-jzx110-other",
    maker: "トヨタ",
    name: "マークII",
    generation: "X110",
    model: "JZX110",
    grade: "その他",
    image: null,
    enabled: true,
    order: 40140
},


/* ---------- クレスタ ---------- */

{
    id: "toyota-cresta-jzx90-tourerv",
    maker: "トヨタ",
    name: "クレスタ",
    generation: "X90",
    model: "JZX90",
    grade: "ツアラーV",
    image: null,
    enabled: true,
    order: 40200
},

{
    id: "toyota-cresta-jzx90-other",
    maker: "トヨタ",
    name: "クレスタ",
    generation: "X90",
    model: "JZX90",
    grade: "その他",
    image: null,
    enabled: true,
    order: 40205
},

{
    id: "toyota-cresta-jzx100-other",
    maker: "トヨタ",
    name: "クレスタ",
    generation: "X100",
    model: "JZX100",
    grade: "その他",
    image: null,
    enabled: true,
    order: 40220
},


/* ---------- AE86 ---------- */

{
    id: "toyota-corolla-levin-ae86",
    maker: "トヨタ",
    name: "カローラレビン",
    generation: "AE86",
    model: "AE86",
    grade: null,
    image: null,
    enabled: true,
    order: 40320
},


/* ---------- 86 / GR86 ---------- */

{
    id: "toyota-gr86-zn8",
    maker: "トヨタ",
    name: "GR86",
    generation: "ZN8",
    model: "ZN8",
    grade: null,
    image: null,
    enabled: true,
    order: 40420
},


/* ---------- スープラ ---------- */

{
    id: "toyota-supra-jza80",
    maker: "トヨタ",
    name: "スープラ",
    generation: "A80",
    model: "JZA80",
    grade: null,
    image: null,
    enabled: true,
    order: 40510
},

{
    id: "toyota-supra-dbz-a90",
    maker: "トヨタ",
    name: "GRスープラ",
    generation: "A90",
    model: "DB系",
    grade: null,
    image: null,
    enabled: true,
    order: 40520
},


/* ---------- セリカ ---------- */

{
    id: "toyota-celica-st185",
    maker: "トヨタ",
    name: "セリカ",
    generation: "T180",
    model: "ST185",
    grade: "GT-FOUR",
    image: null,
    enabled: true,
    order: 40610
},

{
    id: "toyota-celica-st205",
    maker: "トヨタ",
    name: "セリカ",
    generation: "T200",
    model: "ST205",
    grade: "GT-FOUR",
    image: null,
    enabled: true,
    order: 40620
},

{
    id: "toyota-celica-zzt231",
    maker: "トヨタ",
    name: "セリカ",
    generation: "T230",
    model: "ZZT231",
    grade: "SS-II",
    image: null,
    enabled: true,
    order: 40630
},


/* ---------- MR2 / MR-S ---------- */

{
    id: "toyota-mr2-sw20",
    maker: "トヨタ",
    name: "MR2",
    generation: "SW20",
    model: "SW20",
    grade: null,
    image: null,
    enabled: true,
    order: 40710
},

{
    id: "toyota-mrs-zzw30",
    maker: "トヨタ",
    name: "MR-S",
    generation: "ZZW30",
    model: "ZZW30",
    grade: null,
    image: null,
    enabled: true,
    order: 40720
},


/* ---------- アリスト ---------- */

{
    id: "toyota-aristo-jzs147",
    maker: "トヨタ",
    name: "アリスト",
    generation: "S140",
    model: "JZS147",
    grade: null,
    image: null,
    enabled: true,
    order: 40810
},

{
    id: "toyota-aristo-jzs161",
    maker: "トヨタ",
    name: "アリスト",
    generation: "S160",
    model: "JZS161",
    grade: "V300系",
    image: null,
    enabled: true,
    order: 40820
},


/* ---------- クラウン ---------- */

{
    id: "toyota-crown-jzs171-athletev",
    maker: "トヨタ",
    name: "クラウン",
    generation: "S170",
    model: "JZS171",
    grade: "アスリートV",
    image: null,
    enabled: true,
    order: 40910
},

{
    id: "toyota-crown-grs180",
    maker: "トヨタ",
    name: "クラウン",
    generation: "S180",
    model: "GRS18#",
    grade: "アスリート系",
    image: null,
    enabled: true,
    order: 40920
},

{
    id: "toyota-crown-grs200",
    maker: "トヨタ",
    name: "クラウン",
    generation: "S200",
    model: "GRS20#",
    grade: "アスリート系",
    image: null,
    enabled: true,
    order: 40930
},

{
    id: "toyota-crown-ars210",
    maker: "トヨタ",
    name: "クラウン",
    generation: "S210",
    model: "ARS210",
    grade: "アスリート系",
    image: null,
    enabled: true,
    order: 40940
},


/* ==================================================
   HONDA 追加
================================================== */


/* ---------- シビック ---------- */

{
    id: "honda-civic-fk7",
    maker: "ホンダ",
    name: "シビック",
    generation: "FK",
    model: "FK7",
    grade: "ハッチバック",
    image: null,
    enabled: true,
    order: 20070
},

{
    id: "honda-civic-fk8",
    maker: "ホンダ",
    name: "シビック Type R",
    generation: "FK",
    model: "FK8",
    grade: "Type R",
    image: null,
    enabled: true,
    order: 20080
},

{
    id: "honda-civic-fl1",
    maker: "ホンダ",
    name: "シビック",
    generation: "FL",
    model: "FL1",
    grade: null,
    image: null,
    enabled: true,
    order: 20090
},

{
    id: "honda-civic-fl5",
    maker: "ホンダ",
    name: "シビック Type R",
    generation: "FL",
    model: "FL5",
    grade: "Type R",
    image: null,
    enabled: true,
    order: 20100
},


/* ---------- インテグラ ---------- */

{
    id: "honda-integra-dc2",
    maker: "ホンダ",
    name: "インテグラ Type R",
    generation: "DC",
    model: "DC2",
    grade: "Type R",
    image: null,
    enabled: true,
    order: 20210
},

{
    id: "honda-integra-dc5",
    maker: "ホンダ",
    name: "インテグラ Type R",
    generation: "DC",
    model: "DC5",
    grade: "Type R",
    image: null,
    enabled: true,
    order: 20220
},


/* ---------- S2000 ---------- */

{
    id: "honda-s2000-ap1",
    maker: "ホンダ",
    name: "S2000",
    generation: "AP1",
    model: "AP1",
    grade: null,
    image: null,
    enabled: true,
    order: 20310
},

{
    id: "honda-s2000-ap2",
    maker: "ホンダ",
    name: "S2000",
    generation: "AP2",
    model: "AP2",
    grade: null,
    image: null,
    enabled: true,
    order: 20320
},


/* ---------- NSX ---------- */

{
    id: "honda-nsx-na1",
    maker: "ホンダ",
    name: "NSX",
    generation: "NA",
    model: "NA1",
    grade: null,
    image: null,
    enabled: true,
    order: 20410
},

{
    id: "honda-nsx-na2",
    maker: "ホンダ",
    name: "NSX",
    generation: "NA",
    model: "NA2",
    grade: null,
    image: null,
    enabled: true,
    order: 20420
},

{
    id: "honda-nsx-nc1",
    maker: "ホンダ",
    name: "NSX",
    generation: "NC",
    model: "NC1",
    grade: null,
    image: null,
    enabled: true,
    order: 20430
},


/* ---------- CR-X / CR-Z ---------- */

{
    id: "honda-crx-ef8",
    maker: "ホンダ",
    name: "CR-X",
    generation: "EF",
    model: "EF8",
    grade: "SiR",
    image: null,
    enabled: true,
    order: 20510
},

{
    id: "honda-crz-zf1",
    maker: "ホンダ",
    name: "CR-Z",
    generation: "ZF",
    model: "ZF1",
    grade: null,
    image: null,
    enabled: true,
    order: 20520
},


/* ==================================================
   MAZDA 追加
================================================== */


/* ---------- RX-8 ---------- */

{
    id: "mazda-rx8-se3p",
    maker: "マツダ",
    name: "RX-8",
    generation: "SE3P",
    model: "SE3P",
    grade: null,
    image: null,
    enabled: true,
    order: 30210
},


/* ---------- ロードスターRF ---------- */

{
    id: "mazda-roadster-rf-nderc",
    maker: "マツダ",
    name: "ロードスターRF",
    generation: "ND",
    model: "NDERC",
    grade: null,
    image: null,
    enabled: true,
    order: 30050
},


/* ---------- マツダスピードアクセラ ---------- */

{
    id: "mazda-mazdaspeed-axela-bk3p",
    maker: "マツダ",
    name: "マツダスピードアクセラ",
    generation: "BK",
    model: "BK3P",
    grade: null,
    image: null,
    enabled: true,
    order: 30310
},

{
    id: "mazda-mazdaspeed-axela-bl3fw",
    maker: "マツダ",
    name: "マツダスピードアクセラ",
    generation: "BL",
    model: "BL3FW",
    grade: null,
    image: null,
    enabled: true,
    order: 30320
},


/* ---------- マツダスピードアテンザ ---------- */

{
    id: "mazda-mazdaspeed-atenza-gg3p",
    maker: "マツダ",
    name: "マツダスピードアテンザ",
    generation: "GG",
    model: "GG3P",
    grade: null,
    image: null,
    enabled: true,
    order: 30410
},


/* ==================================================
   MITSUBISHI
================================================== */


/* ---------- ランサーエボリューション ---------- */

{
    id: "mitsubishi-lancer-evo2-ce9a",
    maker: "三菱",
    name: "ランサーエボリューションII",
    generation: "II",
    model: "CE9A",
    grade: null,
    image: null,
    enabled: true,
    order: 50010
},

{
    id: "mitsubishi-lancer-evo3-ce9a",
    maker: "三菱",
    name: "ランサーエボリューションIII",
    generation: "III",
    model: "CE9A",
    grade: null,
    image: null,
    enabled: true,
    order: 50020
},

{
    id: "mitsubishi-lancer-evo4-cn9a",
    maker: "三菱",
    name: "ランサーエボリューションIV",
    generation: "IV",
    model: "CN9A",
    grade: null,
    image: null,
    enabled: true,
    order: 50030
},

{
    id: "mitsubishi-lancer-evo5-cp9a",
    maker: "三菱",
    name: "ランサーエボリューションV",
    generation: "V",
    model: "CP9A",
    grade: null,
    image: null,
    enabled: true,
    order: 50040
},

{
    id: "mitsubishi-lancer-evo6-cp9a",
    maker: "三菱",
    name: "ランサーエボリューションVI",
    generation: "VI",
    model: "CP9A",
    grade: null,
    image: null,
    enabled: true,
    order: 50050
},

{
    id: "mitsubishi-lancer-evo7-ct9a",
    maker: "三菱",
    name: "ランサーエボリューションVII",
    generation: "VII",
    model: "CT9A",
    grade: null,
    image: null,
    enabled: true,
    order: 50060
},

{
    id: "mitsubishi-lancer-evo8-ct9a",
    maker: "三菱",
    name: "ランサーエボリューションVIII",
    generation: "VIII",
    model: "CT9A",
    grade: null,
    image: null,
    enabled: true,
    order: 50070
},

{
    id: "mitsubishi-lancer-evo9-ct9a",
    maker: "三菱",
    name: "ランサーエボリューションIX",
    generation: "IX",
    model: "CT9A",
    grade: null,
    image: null,
    enabled: true,
    order: 50080
},

{
    id: "mitsubishi-lancer-evox-cz4a",
    maker: "三菱",
    name: "ランサーエボリューションX",
    generation: "X",
    model: "CZ4A",
    grade: null,
    image: null,
    enabled: true,
    order: 50090
},


/* ---------- GTO ---------- */

{
    id: "mitsubishi-gto-z16a",
    maker: "三菱",
    name: "GTO",
    generation: "Z16A",
    model: "Z16A",
    grade: null,
    image: null,
    enabled: true,
    order: 50110
},


/* ---------- FTO ---------- */

{
    id: "mitsubishi-fto-de3a",
    maker: "三菱",
    name: "FTO",
    generation: "DE3A",
    model: "DE3A",
    grade: "GPX系",
    image: null,
    enabled: true,
    order: 50120
},


/* ---------- エクリプス ---------- */

{
    id: "mitsubishi-eclipse-d32a",
    maker: "三菱",
    name: "エクリプス",
    generation: "D30",
    model: "D32A",
    grade: null,
    image: null,
    enabled: true,
    order: 50130
},


/* ==================================================
   SUBARU
================================================== */


/* ---------- インプレッサ WRX ---------- */

{
    id: "subaru-impreza-gc8",
    maker: "スバル",
    name: "インプレッサ WRX",
    generation: "GC",
    model: "GC8",
    grade: null,
    image: null,
    enabled: true,
    order: 60010
},

{
    id: "subaru-impreza-gdb",
    maker: "スバル",
    name: "インプレッサ WRX STI",
    generation: "GD",
    model: "GDB",
    grade: null,
    image: null,
    enabled: true,
    order: 60020
},

{
    id: "subaru-impreza-grb",
    maker: "スバル",
    name: "インプレッサ WRX STI",
    generation: "GR",
    model: "GRB",
    grade: null,
    image: null,
    enabled: true,
    order: 60030
},

{
    id: "subaru-impreza-gvb",
    maker: "スバル",
    name: "インプレッサ WRX STI",
    generation: "GV",
    model: "GVB",
    grade: null,
    image: null,
    enabled: true,
    order: 60040
},


/* ---------- WRX ---------- */

{
    id: "subaru-wrx-sti-vab",
    maker: "スバル",
    name: "WRX STI",
    generation: "VA",
    model: "VAB",
    grade: "STI",
    image: null,
    enabled: true,
    order: 60110
},

{
    id: "subaru-wrx-s4-vag",
    maker: "スバル",
    name: "WRX S4",
    generation: "VA",
    model: "VAG",
    grade: null,
    image: null,
    enabled: true,
    order: 60120
},

{
    id: "subaru-wrx-s4-vbh",
    maker: "スバル",
    name: "WRX S4",
    generation: "VB",
    model: "VBH",
    grade: null,
    image: null,
    enabled: true,
    order: 60130
},


/* ---------- BRZ ---------- */

{
    id: "subaru-brz-zc6",
    maker: "スバル",
    name: "BRZ",
    generation: "ZC6",
    model: "ZC6",
    grade: null,
    image: null,
    enabled: true,
    order: 60210
},

{
    id: "subaru-brz-zd8",
    maker: "スバル",
    name: "BRZ",
    generation: "ZD8",
    model: "ZD8",
    grade: null,
    image: null,
    enabled: true,
    order: 60220
},


/* ---------- レガシィ ---------- */

{
    id: "subaru-legacy-bd5",
    maker: "スバル",
    name: "レガシィB4",
    generation: "BD",
    model: "BD5",
    grade: null,
    image: null,
    enabled: true,
    order: 60310
},

{
    id: "subaru-legacy-be5",
    maker: "スバル",
    name: "レガシィB4",
    generation: "BE",
    model: "BE5",
    grade: "RSK系",
    image: null,
    enabled: true,
    order: 60320
},

{
    id: "subaru-legacy-bl5",
    maker: "スバル",
    name: "レガシィB4",
    generation: "BL",
    model: "BL5",
    grade: "2.0GT系",
    image: null,
    enabled: true,
    order: 60330
},
/* ==================================================
   TOYOTA 追加
================================================== */


/* ---------- アルテッツァ ---------- */

{
    id: "toyota-altezza-sxe10",
    maker: "トヨタ",
    name: "アルテッツァ",
    generation: "XE10",
    model: "SXE10",
    grade: "RS200系",
    image: null,
    enabled: true,
    order: 41010
},


/* ---------- ソアラ ---------- */

{
    id: "toyota-soarer-jzz30",
    maker: "トヨタ",
    name: "ソアラ",
    generation: "Z30",
    model: "JZZ30",
    grade: null,
    image: null,
    enabled: true,
    order: 41110
},

{
    id: "toyota-soarer-uzz40",
    maker: "トヨタ",
    name: "ソアラ",
    generation: "Z40",
    model: "UZZ40",
    grade: null,
    image: null,
    enabled: true,
    order: 41120
},


/* ---------- マークX ---------- */

{
    id: "toyota-markx-grx120",
    maker: "トヨタ",
    name: "マークX",
    generation: "X120",
    model: "GRX12#",
    grade: null,
    image: null,
    enabled: true,
    order: 41210
},

{
    id: "toyota-markx-grx130",
    maker: "トヨタ",
    name: "マークX",
    generation: "X130",
    model: "GRX13#",
    grade: null,
    image: null,
    enabled: true,
    order: 41220
},

{
    id: "toyota-markx-grmn-grx133",
    maker: "トヨタ",
    name: "マークX",
    generation: "X130",
    model: "GRX133",
    grade: "GRMN",
    image: null,
    enabled: true,
    order: 41230
},


/* ---------- カローラスポーツ ---------- */

{
    id: "toyota-corolla-sport-nre210h",
    maker: "トヨタ",
    name: "カローラスポーツ",
    generation: "E210",
    model: "NRE210H",
    grade: null,
    image: null,
    enabled: true,
    order: 41310
},


/* ---------- GRヤリス ---------- */

{
    id: "toyota-gr-yaris-gxpa16",
    maker: "トヨタ",
    name: "GRヤリス",
    generation: "XP210",
    model: "GXPA16",
    grade: "RZ系",
    image: null,
    enabled: true,
    order: 41410
},


/* ---------- GRカローラ ---------- */

{
    id: "toyota-gr-corolla-gzea14h",
    maker: "トヨタ",
    name: "GRカローラ",
    generation: "E210",
    model: "GZEA14H",
    grade: null,
    image: null,
    enabled: true,
    order: 41420
},


/* ==================================================
   HONDA 追加
================================================== */


/* ---------- ビート ---------- */

{
    id: "honda-beat-pp1",
    maker: "ホンダ",
    name: "ビート",
    generation: "PP1",
    model: "PP1",
    grade: null,
    image: null,
    enabled: true,
    order: 20610
},


/* ---------- S660 ---------- */

{
    id: "honda-s660-jw5",
    maker: "ホンダ",
    name: "S660",
    generation: "JW5",
    model: "JW5",
    grade: null,
    image: null,
    enabled: true,
    order: 20620
},


/* ---------- プレリュード ---------- */

{
    id: "honda-prelude-bb4",
    maker: "ホンダ",
    name: "プレリュード",
    generation: "BB",
    model: "BB4",
    grade: "Si VTEC系",
    image: null,
    enabled: true,
    order: 20710
},

{
    id: "honda-prelude-bb6",
    maker: "ホンダ",
    name: "プレリュード",
    generation: "BB",
    model: "BB6",
    grade: "SiR系",
    image: null,
    enabled: true,
    order: 20720
},


/* ---------- アコード ---------- */

{
    id: "honda-accord-euro-r-cl1",
    maker: "ホンダ",
    name: "アコード",
    generation: "CF/CL",
    model: "CL1",
    grade: "Euro R",
    image: null,
    enabled: true,
    order: 20810
},

{
    id: "honda-accord-euro-r-cl7",
    maker: "ホンダ",
    name: "アコード",
    generation: "CL",
    model: "CL7",
    grade: "Euro R",
    image: null,
    enabled: true,
    order: 20820
},


/* ==================================================
   MAZDA 追加
================================================== */


/* ---------- RX-7 旧車枠 ---------- */

{
    id: "mazda-rx7-sa22c",
    maker: "マツダ",
    name: "RX-7",
    generation: "SA/FB",
    model: "SA22C",
    grade: null,
    image: null,
    enabled: true,
    order: 30100
},


/* ---------- AZ-1 ---------- */

{
    id: "mazda-az1-pg6sa",
    maker: "マツダ",
    name: "AZ-1",
    generation: "PG6SA",
    model: "PG6SA",
    grade: null,
    image: null,
    enabled: true,
    order: 30510
},


/* ---------- アテンザ ---------- */

{
    id: "mazda-atenza-gg",
    maker: "マツダ",
    name: "アテンザ",
    generation: "GG",
    model: "GG系",
    grade: null,
    image: null,
    enabled: true,
    order: 30610
},

{
    id: "mazda-atenza-gh",
    maker: "マツダ",
    name: "アテンザ",
    generation: "GH",
    model: "GH系",
    grade: null,
    image: null,
    enabled: true,
    order: 30620
},

{
    id: "mazda-atenza-gj",
    maker: "マツダ",
    name: "アテンザ",
    generation: "GJ",
    model: "GJ系",
    grade: null,
    image: null,
    enabled: true,
    order: 30630
},


/* ==================================================
   MITSUBISHI 追加
================================================== */


/* ---------- コルト ラリーアート ---------- */

{
    id: "mitsubishi-colt-ralliart-z27ag",
    maker: "三菱",
    name: "コルト",
    generation: "Z20",
    model: "Z27AG",
    grade: "ラリーアート Version-R",
    image: null,
    enabled: true,
    order: 50210
},


/* ---------- ギャランVR-4 ---------- */

{
    id: "mitsubishi-galant-vr4-ec5a",
    maker: "三菱",
    name: "ギャラン",
    generation: "EA/EC",
    model: "EC5A",
    grade: "VR-4",
    image: null,
    enabled: true,
    order: 50310
},


/* ---------- レグナムVR-4 ---------- */

{
    id: "mitsubishi-legnum-vr4-ec5w",
    maker: "三菱",
    name: "レグナム",
    generation: "EA/EC",
    model: "EC5W",
    grade: "VR-4",
    image: null,
    enabled: true,
    order: 50320
},


/* ==================================================
   SUBARU 追加
================================================== */


/* ---------- フォレスター ---------- */

{
    id: "subaru-forester-sf5",
    maker: "スバル",
    name: "フォレスター",
    generation: "SF",
    model: "SF5",
    grade: "ターボ系",
    image: null,
    enabled: true,
    order: 60410
},

{
    id: "subaru-forester-sg9",
    maker: "スバル",
    name: "フォレスター",
    generation: "SG",
    model: "SG9",
    grade: "STI Version",
    image: null,
    enabled: true,
    order: 60420
},


/* ---------- レヴォーグ ---------- */

{
    id: "subaru-levorg-vmg",
    maker: "スバル",
    name: "レヴォーグ",
    generation: "VM",
    model: "VMG",
    grade: "2.0GT系",
    image: null,
    enabled: true,
    order: 60510
},

{
    id: "subaru-levorg-vnh",
    maker: "スバル",
    name: "レヴォーグ",
    generation: "VN",
    model: "VNH",
    grade: "STI Sport R系",
    image: null,
    enabled: true,
    order: 60520
},


/* ==================================================
   SUZUKI
================================================== */


/* ---------- カプチーノ ---------- */

{
    id: "suzuki-cappuccino-ea11r",
    maker: "スズキ",
    name: "カプチーノ",
    generation: "EA11R",
    model: "EA11R",
    grade: null,
    image: null,
    enabled: true,
    order: 70010
},

{
    id: "suzuki-cappuccino-ea21r",
    maker: "スズキ",
    name: "カプチーノ",
    generation: "EA21R",
    model: "EA21R",
    grade: null,
    image: null,
    enabled: true,
    order: 70020
},


/* ---------- アルトワークス ---------- */

{
    id: "suzuki-alto-works-ha21s",
    maker: "スズキ",
    name: "アルトワークス",
    generation: "HA21S",
    model: "HA21S",
    grade: null,
    image: null,
    enabled: true,
    order: 70110
},

{
    id: "suzuki-alto-works-ha22s",
    maker: "スズキ",
    name: "アルトワークス",
    generation: "HA22S",
    model: "HA22S",
    grade: null,
    image: null,
    enabled: true,
    order: 70120
},

{
    id: "suzuki-alto-works-ha36s",
    maker: "スズキ",
    name: "アルトワークス",
    generation: "HA36S",
    model: "HA36S",
    grade: null,
    image: null,
    enabled: true,
    order: 70130
},


/* ---------- スイフトスポーツ ---------- */

{
    id: "suzuki-swift-sport-ht81s",
    maker: "スズキ",
    name: "スイフトスポーツ",
    generation: "HT",
    model: "HT81S",
    grade: null,
    image: null,
    enabled: true,
    order: 70210
},

{
    id: "suzuki-swift-sport-zc31s",
    maker: "スズキ",
    name: "スイフトスポーツ",
    generation: "ZC",
    model: "ZC31S",
    grade: null,
    image: null,
    enabled: true,
    order: 70220
},

{
    id: "suzuki-swift-sport-zc32s",
    maker: "スズキ",
    name: "スイフトスポーツ",
    generation: "ZC",
    model: "ZC32S",
    grade: null,
    image: null,
    enabled: true,
    order: 70230
},

{
    id: "suzuki-swift-sport-zc33s",
    maker: "スズキ",
    name: "スイフトスポーツ",
    generation: "ZC",
    model: "ZC33S",
    grade: null,
    image: null,
    enabled: true,
    order: 70240
},


/* ==================================================
   DAIHATSU
================================================== */


/* ---------- コペン ---------- */

{
    id: "daihatsu-copen-l880k",
    maker: "ダイハツ",
    name: "コペン",
    generation: "L880K",
    model: "L880K",
    grade: null,
    image: null,
    enabled: true,
    order: 80010
},

{
    id: "daihatsu-copen-la400k",
    maker: "ダイハツ",
    name: "コペン",
    generation: "LA400K",
    model: "LA400K",
    grade: null,
    image: null,
    enabled: true,
    order: 80020
},


/* ---------- ミラ ---------- */

{
    id: "daihatsu-mira-trxx-l502s",
    maker: "ダイハツ",
    name: "ミラ TR-XX",
    generation: "L500",
    model: "L502S",
    grade: "AVANZATO系",
    image: null,
    enabled: true,
    order: 80110
},


/* ---------- ストーリア ---------- */

{
    id: "daihatsu-storia-x4-m112s",
    maker: "ダイハツ",
    name: "ストーリア",
    generation: "M100",
    model: "M112S",
    grade: "X4",
    image: null,
    enabled: true,
    order: 80210
}
];


/*
==================================================
 有効な車だけ取得

 order順で並べる。
 app.js側で必要ならランダム化される。
==================================================
*/

function getEnabledCars() {

    return cars
        .filter(car => car.enabled)
        .sort(
            (a, b) =>
                a.order - b.order
        );
}


/*
==================================================
 IDから車を取得
==================================================
*/

function getCarById(id) {

    return cars.find(
        car => car.id === id
    );
}

/* ==================================================
   車画像
================================================== */

/*
   車IDから画像パスを自動生成

   例

   id:
   nissan-silvia-s15-spec-r

   ↓

   images/cars/nissan-silvia-s15-spec-r.webp
*/

function getCarImagePath(car) {

    if (!car) {
        return null;
    }


    /*
       image が明示されている場合は
       そちらを優先する

       特別な画像を使いたい車にも対応できる
    */

    if (car.image) {
        return car.image;
    }

     // 通常は車ID.webpを自動的に探す
    return `images/cars/${car.id}.webp`;
}