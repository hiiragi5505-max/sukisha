"use strict";


/* ==================================================
   設定
================================================== */

const SETTINGS = {

    firstSelectionSize: 9,

    qualifierSkipAt: 16,

    qualifierSize: 4,

    qualifierPick: 2,

    resultCount: 9

};


const STORAGE_KEY =
    "sukisha-save-v2";



/* ==================================================
   状態
================================================== */

const state = {

    stage:
        "first",


    /* 一次選考 */

    selectionPage:
        0,

    selectionCars:
        [],

    selectedCars:
        new Set(),


    /* 予選 */

    qualifierPhase:
        "main",

    qualifierRound:
        1,

    qualifierPool:
        [],

    qualifierNextPool:
        [],

    qualifierLoserPool:
        [],

    qualifierCurrentGroup:
        [],

    qualifierGroupIndex:
        0,

    qualifierSelected:
        new Set(),


    /* 順位決め */

    finalCandidates:
        [],

    finalRanking:
        [],

    finalCurrentCar:
        null,

    finalCompareIndex:
        0,

    finalComparisonCount:
        0,


    /* 結果 */

    resultCars:
        []

};



/* ==================================================
   DOM
================================================== */

const selectionScreen =
    document.getElementById(
        "selection-screen"
    );


const selectionCompleteScreen =
    document.getElementById(
        "selection-complete-screen"
    );


const qualifierScreen =
    document.getElementById(
        "qualifier-screen"
    );


const finalScreen =
    document.getElementById(
        "final-screen"
    );


const resultScreen =
    document.getElementById(
        "result-screen"
    );


const stageDescription =
    document.getElementById(
        "stage-description"
    );



/* ---------- 一次選考 ---------- */

const selectionGrid =
    document.getElementById(
        "selection-grid"
    );


const selectedCount =
    document.getElementById(
        "selected-count"
    );


const selectionPage =
    document.getElementById(
        "selection-page"
    );


const selectionProgressBar =
    document.getElementById(
        "selection-progress-bar"
    );


const previousButton =
    document.getElementById(
        "previous-button"
    );


const nextButton =
    document.getElementById(
        "next-button"
    );


const showSelectedButton =
    document.getElementById(
        "show-selected-button"
    );



/* ---------- 一次選考完了 ---------- */

const completeSelectedCount =
    document.getElementById(
        "complete-selected-count"
    );


const nextStageMessage =
    document.getElementById(
        "next-stage-message"
    );


const backSelectionButton =
    document.getElementById(
        "back-selection-button"
    );


const startNextStageButton =
    document.getElementById(
        "start-next-stage-button"
    );



/* ---------- 選択中一覧 ---------- */

const selectedModal =
    document.getElementById(
        "selected-modal"
    );


const selectedList =
    document.getElementById(
        "selected-list"
    );


const modalSelectedCount =
    document.getElementById(
        "modal-selected-count"
    );


const closeSelectedModalButton =
    document.getElementById(
        "close-selected-modal"
    );


const closeSelectedModalBottom =
    document.getElementById(
        "close-selected-modal-bottom"
    );



/* ---------- 予選 ---------- */

const qualifierGrid =
    document.getElementById(
        "qualifier-grid"
    );


const qualifierProgress =
    document.getElementById(
        "qualifier-progress"
    );


const qualifierProgressBar =
    document.getElementById(
        "qualifier-progress-bar"
    );


const qualifierSelectedCount =
    document.getElementById(
        "qualifier-selected-count"
    );


const qualifierConfirmButton =
    document.getElementById(
        "qualifier-confirm-button"
    );



/* ---------- 順位決め ---------- */

const finalProgress =
    document.getElementById(
        "final-progress"
    );


const finalProgressBar =
    document.getElementById(
        "final-progress-bar"
    );


const finalCarLeft =
    document.getElementById(
        "final-car-left"
    );


const finalCarRight =
    document.getElementById(
        "final-car-right"
    );



/* ---------- 結果 ---------- */

const resultGrid =
    document.getElementById(
        "result-grid"
    );


const restartButton =
    document.getElementById(
        "restart-button"
    );



/* ---------- 再開 ---------- */

const resumeModal =
    document.getElementById(
        "resume-modal"
    );


const newGameButton =
    document.getElementById(
        "new-game-button"
    );


const resumeButton =
    document.getElementById(
        "resume-button"
    );



/* ---------- SNS保存 ---------- */

const openSaveModalButton =
    document.getElementById(
        "open-save-modal-button"
    );


const saveResultModal =
    document.getElementById(
        "save-result-modal"
    );


const closeSaveResultModalButton =
    document.getElementById(
        "close-save-result-modal"
    );


const cancelSaveResultButton =
    document.getElementById(
        "cancel-save-result-button"
    );


const saveSquareButton =
    document.getElementById(
        "save-square-button"
    );


const saveInstagramButton =
    document.getElementById(
        "save-instagram-button"
    );



/* ==================================================
   共通
================================================== */

function getCar(id) {

    return getCarById(id);

}


function shuffle(array) {

    const copy =
        [...array];


    for (
        let i =
            copy.length - 1;

        i > 0;

        i--
    ) {

        const j =

            Math.floor(

                Math.random() *
                (i + 1)

            );


        [
            copy[i],
            copy[j]

        ] = [

            copy[j],
            copy[i]

        ];

    }


    return copy;

}


function uniqueIds(ids) {

    return [

        ...new Set(ids)

    ].filter(

        id =>
            getCar(id)

    );

}



/* ==================================================
   ステージ名
================================================== */

function updateStageDescription() {

    if (
        !stageDescription
    ) {

        return;

    }


    const labels = {

        first:
            "一次選考",

        firstComplete:
            "一次選考完了",

        qualifier:
            "予選",

        final:
            "順位決め",

        result:
            "結果"

    };


    stageDescription.textContent =

        labels[state.stage] ||
        "";

}



/* ==================================================
   画面切替
================================================== */

function showScreen(target) {

    [

        selectionScreen,
        selectionCompleteScreen,
        qualifierScreen,
        finalScreen,
        resultScreen

    ].forEach(

        screen =>

            screen?.classList.add(
                "hidden"
            )

    );


    target?.classList.remove(
        "hidden"
    );


    updateStageDescription();

}



/* ==================================================
   NO IMAGE
================================================== */

function createNoImage() {

    const noImage =

        document.createElement(
            "div"
        );


    noImage.className =
        "no-image";


    noImage.innerHTML = `

        <div class="no-image-icon">
            🚗
        </div>

        <div class="no-image-text">
            NO IMAGE
        </div>

    `;


    return noImage;

}



/* ==================================================
   画像エリア
================================================== */

function createCarImageArea(car) {

    const area =

        document.createElement(
            "div"
        );


    area.className =
        "car-image-area";


    const path =

        typeof getCarImagePath ===
        "function"

            ? getCarImagePath(car)

            : car.image;


    if (
        !path
    ) {

        area.appendChild(
            createNoImage()
        );


        return area;

    }


    const image =

        document.createElement(
            "img"
        );


    image.className =
        "car-image";


    image.src =
        path;


    image.alt =

        `${car.name} ${

            car.model ||
            ""

        }`.trim();


    image.loading =
        "lazy";


    image.onerror =
        () => {


            image.remove();


            if (

                !area.querySelector(
                    ".no-image"
                )

            ) {

                area.appendChild(
                    createNoImage()
                );

            }

        };


    area.appendChild(
        image
    );


    return area;

}



/* ==================================================
   車情報
================================================== */

function createCarInfo(
    car,
    className = "car-info"
) {

    const info =

        document.createElement(
            "div"
        );


    info.className =
        className;


    const maker =

        document.createElement(
            "p"
        );


    maker.className =
        "car-maker";


    maker.textContent =
        car.maker ||
        "";


    const name =

        document.createElement(
            "h3"
        );


    name.className =
        "car-name";


    name.textContent =
        car.name ||
        "";


    const model =

        document.createElement(
            "p"
        );


    model.className =
        "car-model";


    model.textContent =
        car.model ||
        "";


    info.append(

        maker,
        name,
        model

    );


    if (
        car.grade
    ) {

        const grade =

            document.createElement(
                "p"
            );


        grade.className =
            "car-grade";


        grade.textContent =
            car.grade;


        info.appendChild(
            grade
        );

    }


    return info;

}



/* ==================================================
   車カード
================================================== */

function createCarCard(
    car,
    selected = false,
    clickHandler = null
) {

    const card =

        document.createElement(
            "button"
        );


    card.type =
        "button";


    card.className =
        "car-card";


    if (
        selected
    ) {

        card.classList.add(
            "selected"
        );

    }


    const imageArea =
        createCarImageArea(
            car
        );


    const check =

        document.createElement(
            "div"
        );


    check.className =
        "selection-check";


    check.textContent =
        "✓";


    imageArea.appendChild(
        check
    );


    card.append(

        imageArea,

        createCarInfo(
            car
        )

    );


    if (
        clickHandler
    ) {

        card.addEventListener(

            "click",

            clickHandler

        );

    }


    return card;

}



/* ==================================================
   SAVE
================================================== */

function saveState() {

    if (
        !state.selectionCars.length
    ) {

        return;

    }


    const data = {

        dataVersion:
            CAR_DATA_VERSION,

        stage:
            state.stage,


        selectionPage:
            state.selectionPage,

        selectionCars:

            state.selectionCars.map(

                car =>
                    car.id

            ),

        selectedCars:
            [...state.selectedCars],


        qualifierPhase:
            state.qualifierPhase,

        qualifierRound:
            state.qualifierRound,

        qualifierPool:
            [...state.qualifierPool],

        qualifierNextPool:
            [...state.qualifierNextPool],

        qualifierLoserPool:
            [...state.qualifierLoserPool],

        qualifierCurrentGroup:
            [...state.qualifierCurrentGroup],

        qualifierGroupIndex:
            state.qualifierGroupIndex,

        qualifierSelected:
            [...state.qualifierSelected],


        finalCandidates:
            [...state.finalCandidates],

        finalRanking:
            [...state.finalRanking],

        finalCurrentCar:
            state.finalCurrentCar,

        finalCompareIndex:
            state.finalCompareIndex,

        finalComparisonCount:
            state.finalComparisonCount,


        resultCars:
            [...state.resultCars]

    };


    localStorage.setItem(

        STORAGE_KEY,

        JSON.stringify(
            data
        )

    );

}



/* ==================================================
   保存データ取得
================================================== */

function getSavedData() {

    const raw =

        localStorage.getItem(
            STORAGE_KEY
        );


    if (
        !raw
    ) {

        return null;

    }


    try {

        const data =
            JSON.parse(
                raw
            );


        if (

            data.dataVersion !==
            CAR_DATA_VERSION

        ) {

            localStorage.removeItem(
                STORAGE_KEY
            );


            return null;

        }


        return data;


    } catch (error) {


        console.error(

            "保存データの読み込みに失敗:",

            error

        );


        localStorage.removeItem(
            STORAGE_KEY
        );


        return null;

    }

}



/* ==================================================
   保存データ復元
================================================== */

function loadState(data) {

    state.stage =

        data.stage ||
        "first";


    state.selectionPage =

        Number.isInteger(
            data.selectionPage
        )

            ? data.selectionPage

            : 0;


    state.selectionCars =

        (
            data.selectionCars ||
            []
        )

            .map(
                getCar
            )

            .filter(
                Boolean
            );


    state.selectedCars =

        new Set(

            data.selectedCars ||
            []

        );


    state.qualifierPhase =

        data.qualifierPhase ||
        "main";


    state.qualifierRound =

        data.qualifierRound ||
        1;


    state.qualifierPool =

        data.qualifierPool ||
        [];


    state.qualifierNextPool =

        data.qualifierNextPool ||
        [];


    state.qualifierLoserPool =

        data.qualifierLoserPool ||
        [];


    state.qualifierCurrentGroup =

        data.qualifierCurrentGroup ||
        [];


    state.qualifierGroupIndex =

        data.qualifierGroupIndex ||
        0;


    state.qualifierSelected =

        new Set(

            data.qualifierSelected ||
            []

        );


    state.finalCandidates =

        data.finalCandidates ||
        [];


    state.finalRanking =

        data.finalRanking ||
        [];


    state.finalCurrentCar =

        data.finalCurrentCar ||
        null;


    state.finalCompareIndex =

        Number.isInteger(
            data.finalCompareIndex
        )

            ? data.finalCompareIndex

            : 0;


    state.finalComparisonCount =

        data.finalComparisonCount ||
        0;


    state.resultCars =

        data.resultCars ||
        [];


    resumeStage();

}



/* ==================================================
   予選状態初期化
================================================== */

function resetQualifierState() {

    state.qualifierPhase =
        "main";


    state.qualifierRound =
        1;


    state.qualifierPool =
        [];


    state.qualifierNextPool =
        [];


    state.qualifierLoserPool =
        [];


    state.qualifierCurrentGroup =
        [];


    state.qualifierGroupIndex =
        0;


    state.qualifierSelected =
        new Set();

}



/* ==================================================
   新規開始
================================================== */

function startNewGame() {

    state.stage =
        "first";


    state.selectionPage =
        0;


    state.selectionCars =

        shuffle(

            getEnabledCars()

        );


    state.selectedCars =
        new Set();


    resetQualifierState();


    state.finalCandidates =
        [];


    state.finalRanking =
        [];


    state.finalCurrentCar =
        null;


    state.finalCompareIndex =
        0;


    state.finalComparisonCount =
        0;


    state.resultCars =
        [];


    localStorage.removeItem(
        STORAGE_KEY
    );


    localStorage.removeItem(
        "sukisha-save-v1"
    );


    showScreen(
        selectionScreen
    );


    renderSelectionPage();


    updateSelectedCount();


    saveState();

}



/* ==================================================
   一次選考
================================================== */

function getTotalSelectionPages() {

    return Math.max(

        1,

        Math.ceil(

            state.selectionCars.length /

            SETTINGS.firstSelectionSize

        )

    );

}



/* ==================================================
   一次選考表示
================================================== */

function renderSelectionPage() {

    selectionGrid.innerHTML =
        "";


    const start =

        state.selectionPage *

        SETTINGS.firstSelectionSize;


    const pageCars =

        state.selectionCars.slice(

            start,

            start +
            SETTINGS.firstSelectionSize

        );


    pageCars.forEach(

        car => {


            selectionGrid.appendChild(

                createCarCard(

                    car,

                    state.selectedCars.has(
                        car.id
                    ),

                    () =>

                        toggleFirstSelection(
                            car.id
                        )

                )

            );

        }

    );


    while (

        selectionGrid.children.length <

        SETTINGS.firstSelectionSize

    ) {

        const empty =

            document.createElement(
                "div"
            );


        empty.className =
            "empty-car-slot";


        selectionGrid.appendChild(
            empty
        );

    }


    updateSelectionNavigation();

}



/* ==================================================
   一次選考 選択
================================================== */

function toggleFirstSelection(id) {

    if (

        state.selectedCars.has(
            id
        )

    ) {

        state.selectedCars.delete(
            id
        );

    } else {

        state.selectedCars.add(
            id
        );

    }


    updateSelectedCount();


    renderSelectionPage();


    saveState();

}



/* ==================================================
   選択台数
================================================== */

function updateSelectedCount() {

    const count =
        state.selectedCars.size;


    selectedCount.textContent =
        count;


    modalSelectedCount.textContent =
        count;

}



/* ==================================================
   ページ表示
================================================== */

function updateSelectionNavigation() {

    const total =
        getTotalSelectionPages();


    const current =
        state.selectionPage + 1;


    selectionPage.textContent =

        `${current} / ${total}`;


    selectionProgressBar.style.width =

        `${

            (
                current /
                total
            ) * 100

        }%`;


    previousButton.disabled =

        state.selectionPage ===
        0;


    nextButton.textContent =

        state.selectionPage ===
        total - 1

            ? "選考終了"

            : "次へ →";

}



/* ==================================================
   戻る
================================================== */

previousButton.addEventListener(

    "click",

    () => {


        if (

            state.selectionPage ===
            0

        ) {

            return;

        }


        state.selectionPage--;


        renderSelectionPage();


        saveState();

    }

);



/* ==================================================
   次へ
================================================== */

nextButton.addEventListener(

    "click",

    () => {


        const total =
            getTotalSelectionPages();


        if (

            state.selectionPage <
            total - 1

        ) {

            state.selectionPage++;


            renderSelectionPage();


            saveState();


            return;

        }


        finishFirstSelection();

    }

);



/* ==================================================
   一次選考終了
================================================== */

function finishFirstSelection() {

    const count =
        state.selectedCars.size;


    if (
        !count
    ) {

        alert(
            "好きな車を1台以上選んでください。"
        );


        return;

    }


    state.stage =
        "firstComplete";


    completeSelectedCount.textContent =
        count;


    nextStageMessage.textContent =

        count <=
        SETTINGS.qualifierSkipAt

            ? "予選をスキップして、2択の順位決めへ進みます。"

            : "通常予選と敗者復活で、16台以下まで絞ります。";


    showScreen(
        selectionCompleteScreen
    );


    saveState();

}



/* ==================================================
   選び直す
================================================== */

backSelectionButton.addEventListener(

    "click",

    () => {


        state.stage =
            "first";


        showScreen(
            selectionScreen
        );


        renderSelectionPage();


        saveState();

    }

);



/* ==================================================
   次ステージ
================================================== */

startNextStageButton.addEventListener(

    "click",

    () => {


        const ids =
            [...state.selectedCars];


        if (

            ids.length <=
            SETTINGS.qualifierSkipAt

        ) {

            startFinal(
                ids
            );

        } else {

            startQualifier(
                ids
            );

        }

    }

);



/* ==================================================
   選択中一覧
================================================== */

function renderSelectedList() {

    selectedList.innerHTML =
        "";


    updateSelectedCount();


    const selected =

        state.selectionCars.filter(

            car =>

                state.selectedCars.has(
                    car.id
                )

        );


    if (
        !selected.length
    ) {

        const message =

            document.createElement(
                "p"
            );


        message.textContent =
            "まだ車を選択していません。";


        selectedList.appendChild(
            message
        );


        return;

    }


    selected.forEach(

        car => {


            const item =

                document.createElement(
                    "div"
                );


            item.className =
                "selected-list-item";


            const name =

                document.createElement(
                    "div"
                );


            name.className =
                "selected-list-name";


            name.textContent =

                [

                    car.name,
                    car.model,
                    car.grade

                ]

                    .filter(
                        Boolean
                    )

                    .join(
                        " "
                    );


            const remove =

                document.createElement(
                    "button"
                );


            remove.type =
                "button";


            remove.className =
                "remove-selected-button";


            remove.textContent =
                "選択解除";


            remove.addEventListener(

                "click",

                () => {


                    state.selectedCars.delete(
                        car.id
                    );


                    renderSelectedList();


                    renderSelectionPage();


                    updateSelectedCount();


                    saveState();

                }

            );


            item.append(

                name,
                remove

            );


            selectedList.appendChild(
                item
            );

        }

    );

}



/* ==================================================
   選択中モーダル
================================================== */

function hideSelectedModal() {

    selectedModal.classList.add(
        "hidden"
    );

}


showSelectedButton.addEventListener(

    "click",

    () => {


        renderSelectedList();


        selectedModal.classList.remove(
            "hidden"
        );

    }

);


closeSelectedModalButton.addEventListener(

    "click",

    hideSelectedModal

);


closeSelectedModalBottom.addEventListener(

    "click",

    hideSelectedModal

);


selectedModal

    .querySelector(
        ".modal-background"
    )

    ?.addEventListener(

        "click",

        hideSelectedModal

    );



/* ==================================================
   予選開始
================================================== */

function startQualifier(ids) {

    resetQualifierState();


    state.stage =
        "qualifier";


    state.qualifierPool =

        shuffle(

            uniqueIds(
                ids
            )

        );


    showScreen(
        qualifierScreen
    );


    prepareQualifierGroup();


    saveState();

}



/* ==================================================
   予選名
================================================== */

function getQualifierPhaseLabel() {

    return

        state.qualifierPhase ===
        "revival"

            ? "敗者復活"

            : "通常予選";

}



/* ==================================================
   予選グループ
================================================== */

function prepareQualifierGroup() {

    const remaining =

        state.qualifierPool.length -

        state.qualifierGroupIndex;


    if (

        remaining >=
        SETTINGS.qualifierSize

    ) {

        state.qualifierCurrentGroup =

            state.qualifierPool.slice(

                state.qualifierGroupIndex,

                state.qualifierGroupIndex +

                SETTINGS.qualifierSize

            );


        state.qualifierSelected =
            new Set();


        renderQualifier();


        saveState();


        return;

    }


    /*
       1～3台余った場合は
       不戦通過
    */

    if (
        remaining > 0
    ) {

        const leftovers =

            state.qualifierPool.slice(

                state.qualifierGroupIndex

            );


        state.qualifierNextPool.push(

            ...leftovers

        );


        state.qualifierGroupIndex =

            state.qualifierPool.length;

    }


    finishQualifierPhase();

}



/* ==================================================
   通常予選 / 敗者復活終了
================================================== */

function finishQualifierPhase() {

    /*
       通常予選
       ↓
       敗者復活
    */

    if (

        state.qualifierPhase ===
        "main"

    ) {

        if (

            !state.qualifierLoserPool.length

        ) {

            finishQualifierRound();


            return;

        }


        state.qualifierPhase =
            "revival";


        state.qualifierPool =

            shuffle(

                uniqueIds(

                    state.qualifierLoserPool

                )

            );


        state.qualifierLoserPool =
            [];


        state.qualifierCurrentGroup =
            [];


        state.qualifierGroupIndex =
            0;


        state.qualifierSelected =
            new Set();


        prepareQualifierGroup();


        return;

    }


    /*
       敗者復活終了
    */

    finishQualifierRound();

}



/* ==================================================
   予選ラウンド終了
================================================== */

function finishQualifierRound() {

    const survivors =

        uniqueIds(

            state.qualifierNextPool

        );


    if (

        survivors.length <=
        SETTINGS.qualifierSkipAt

    ) {

        startFinal(
            survivors
        );


        return;

    }


    /*
       まだ17台以上
       ↓
       次ラウンド
    */

    state.qualifierRound++;


    state.qualifierPhase =
        "main";


    state.qualifierPool =

        shuffle(
            survivors
        );


    state.qualifierNextPool =
        [];


    state.qualifierLoserPool =
        [];


    state.qualifierCurrentGroup =
        [];


    state.qualifierGroupIndex =
        0;


    state.qualifierSelected =
        new Set();


    prepareQualifierGroup();

}



/* ==================================================
   予選表示
================================================== */

function renderQualifier() {

    qualifierGrid.innerHTML =
        "";


    state.qualifierCurrentGroup

        .forEach(

            id => {


                const car =
                    getCar(
                        id
                    );


                if (
                    !car
                ) {

                    return;

                }


                qualifierGrid.appendChild(

                    createCarCard(

                        car,

                        state.qualifierSelected.has(
                            id
                        ),

                        () =>

                            toggleQualifier(
                                id
                            )

                    )

                );

            }

        );


    qualifierSelectedCount.textContent =

        state.qualifierSelected.size;


    qualifierConfirmButton.disabled =

        state.qualifierSelected.size !==
        SETTINGS.qualifierPick;


    const fullGroups =

        Math.max(

            1,

            Math.floor(

                state.qualifierPool.length /

                SETTINGS.qualifierSize

            )

        );


    const currentGroup =

        Math.min(

            fullGroups,

            Math.floor(

                state.qualifierGroupIndex /

                SETTINGS.qualifierSize

            ) + 1

        );


    qualifierProgress.textContent =

        `第${state.qualifierRound}R ${

            getQualifierPhaseLabel()

        } ${currentGroup} / ${fullGroups}`;


    qualifierProgressBar.style.width =

        `${

            Math.min(

                (
                    currentGroup /
                    fullGroups
                ) * 100,

                100

            )

        }%`;

}



/* ==================================================
   予選選択
================================================== */

function toggleQualifier(id) {

    if (

        state.qualifierSelected.has(
            id
        )

    ) {

        state.qualifierSelected.delete(
            id
        );

    } else {


        if (

            state.qualifierSelected.size >=
            SETTINGS.qualifierPick

        ) {

            return;

        }


        state.qualifierSelected.add(
            id
        );

    }


    renderQualifier();


    saveState();

}



/* ==================================================
   予選確定
================================================== */

qualifierConfirmButton.addEventListener(

    "click",

    () => {


        if (

            state.qualifierSelected.size !==
            SETTINGS.qualifierPick

        ) {

            return;

        }


        const selectedIds =

            [...state.qualifierSelected];


        const notSelectedIds =

            state.qualifierCurrentGroup.filter(

                id =>

                    !state.qualifierSelected.has(
                        id
                    )

            );


        state.qualifierNextPool.push(

            ...selectedIds

        );


        /*
           通常予選で落ちた車だけ
           敗者復活へ
        */

        if (

            state.qualifierPhase ===
            "main"

        ) {

            state.qualifierLoserPool.push(

                ...notSelectedIds

            );

        }


        state.qualifierGroupIndex +=

            SETTINGS.qualifierSize;


        state.qualifierCurrentGroup =
            [];


        state.qualifierSelected =
            new Set();


        prepareQualifierGroup();


        saveState();

    }

);



/* ==================================================
   順位決め開始
================================================== */

function startFinal(ids) {

    const unique =
        uniqueIds(
            ids
        );


    if (

        unique.length <=
        1

    ) {

        finishResult(
            unique
        );


        return;

    }


    state.stage =
        "final";


    state.finalCandidates =

        shuffle(
            unique
        );


    state.finalRanking = [

        state.finalCandidates[0]

    ];


    state.finalCurrentCar =

        state.finalCandidates[1];


    state.finalCompareIndex =
        0;


    state.finalComparisonCount =
        0;


    showScreen(
        finalScreen
    );


    renderFinalComparison();


    saveState();

}



/* ==================================================
   順位決めカード
================================================== */

function fillFinalButton(
    button,
    car
) {

    button.innerHTML =
        "";


    button.append(

        createCarImageArea(
            car
        ),

        createCarInfo(
            car
        )

    );

}



/* ==================================================
   順位決め表示
================================================== */

function renderFinalComparison() {

    if (

        !state.finalCurrentCar

    ) {

        finishResult(

            state.finalRanking

        );


        return;

    }


    const current =

        getCar(

            state.finalCurrentCar

        );


    const compareId =

        state.finalRanking[

            state.finalCompareIndex

        ];


    const compare =

        getCar(
            compareId
        );


    if (

        !current ||
        !compare

    ) {

        advanceFinalCandidate();


        return;

    }


    fillFinalButton(

        finalCarLeft,

        current

    );


    fillFinalButton(

        finalCarRight,

        compare

    );


    finalCarLeft.onclick =

        () =>

            handleFinalChoice(
                "current"
            );


    finalCarRight.onclick =

        () =>

            handleFinalChoice(
                "ranking"
            );


    const ranked =
        state.finalRanking.length;


    const total =
        state.finalCandidates.length;


    finalProgress.textContent =

        `${

            Math.min(

                ranked + 1,

                total

            )

        } / ${total}`;


    finalProgressBar.style.width =

        `${

            Math.min(

                (

                    (
                        ranked + 1
                    ) /

                    total

                ) * 100,

                100

            )

        }%`;

}



/* ==================================================
   順位決め
================================================== */

function handleFinalChoice(choice) {

    state.finalComparisonCount++;


    /*
       左側
       新しい車が勝ち
    */

    if (

        choice ===
        "current"

    ) {

        if (

            state.finalCompareIndex >
            0

        ) {

            state.finalCompareIndex--;


            renderFinalComparison();


            saveState();


            return;

        }


        state.finalRanking.unshift(

            state.finalCurrentCar

        );


        advanceFinalCandidate();


        return;

    }


    /*
       右側の暫定順位車が勝ち
       ↓
       その直後に挿入
    */

    state.finalRanking.splice(

        state.finalCompareIndex + 1,

        0,

        state.finalCurrentCar

    );


    advanceFinalCandidate();

}



/* ==================================================
   次候補
================================================== */

function advanceFinalCandidate() {

    const ranked =
        state.finalRanking.length;


    if (

        ranked >=
        state.finalCandidates.length

    ) {

        state.finalCurrentCar =
            null;


        finishResult(

            state.finalRanking

        );


        return;

    }


    state.finalCurrentCar =

        state.finalCandidates[
            ranked
        ];


    state.finalCompareIndex =

        state.finalRanking.length -
        1;


    renderFinalComparison();


    saveState();

}



/* ==================================================
   結果
================================================== */

function finishResult(ids) {

    state.stage =
        "result";


    state.resultCars =

        uniqueIds(
            ids
        )

            .slice(

                0,

                SETTINGS.resultCount

            );


    renderResult();


    showScreen(
        resultScreen
    );


    saveState();

}



/* ==================================================
   結果表示
================================================== */

function renderResult() {

    resultGrid.innerHTML =
        "";


    state.resultCars

        .forEach(

            (
                id,
                index
            ) => {


                const car =
                    getCar(
                        id
                    );


                if (
                    !car
                ) {

                    return;

                }


                const card =

                    document.createElement(
                        "div"
                    );


                card.className =
                    "result-card";


                const info =

                    document.createElement(
                        "div"
                    );


                info.className =
                    "result-info";


                const rank =

                    document.createElement(
                        "div"
                    );


                rank.className =
                    "result-rank";


                rank.textContent =

                    `${index + 1}位`;


                const name =

                    document.createElement(
                        "div"
                    );


                name.textContent =

                    [

                        car.name,
                        car.model,
                        car.grade

                    ]

                        .filter(
                            Boolean
                        )

                        .join(
                            " "
                        );


                info.append(

                    rank,
                    name

                );


                card.append(

                    createCarImageArea(
                        car
                    ),

                    info

                );


                resultGrid.appendChild(
                    card
                );

            }

        );


    /*
       9台未満でも
       3×3維持
    */

    while (

        resultGrid.children.length <
        SETTINGS.resultCount

    ) {

        const empty =

            document.createElement(
                "div"
            );


        empty.className =
            "empty-result-slot";


        resultGrid.appendChild(
            empty
        );

    }


    const title =

        resultScreen.querySelector(
            ".result-header h2"
        );


    if (
        title
    ) {

        title.textContent =

            `あなたの好き車${

                state.resultCars.length

            }選`;

    }

}



/* ==================================================
   最初から
================================================== */

restartButton.addEventListener(

    "click",

    () => {


        const ok =

            confirm(

                "選考結果を削除して最初からやり直しますか？"

            );


        if (
            ok
        ) {

            startNewGame();

        }

    }

);



/* ==================================================
   SNS保存モーダル
================================================== */

function openSaveResultModal() {

    saveResultModal.classList.remove(
        "hidden"
    );

}


function closeSaveResultModal() {

    saveResultModal.classList.add(
        "hidden"
    );

}


openSaveModalButton.addEventListener(

    "click",

    openSaveResultModal

);


closeSaveResultModalButton.addEventListener(

    "click",

    closeSaveResultModal

);


cancelSaveResultButton.addEventListener(

    "click",

    closeSaveResultModal

);


saveResultModal

    .querySelector(
        ".modal-background"
    )

    ?.addEventListener(

        "click",

        closeSaveResultModal

    );



/* ==================================================
   Canvas用画像読み込み
================================================== */

function loadCanvasImage(car) {

    return new Promise(

        resolve => {


            if (
                !car
            ) {

                resolve(
                    null
                );


                return;

            }


            const path =

                typeof getCarImagePath ===
                "function"

                    ? getCarImagePath(
                        car
                    )

                    : car.image;


            if (
                !path
            ) {

                resolve(
                    null
                );


                return;

            }


            const image =
                new Image();


            image.onload =
                () =>

                    resolve(
                        image
                    );


            image.onerror =
                () =>

                    resolve(
                        null
                    );


            image.src =
                path;

        }

    );

}



/* ==================================================
   Canvas角丸
================================================== */

function drawRoundedRect(
    ctx,
    x,
    y,
    width,
    height,
    radius
) {

    const r =

        Math.min(

            radius,

            width / 2,

            height / 2

        );


    ctx.beginPath();


    ctx.moveTo(
        x + r,
        y
    );


    ctx.lineTo(
        x + width - r,
        y
    );


    ctx.quadraticCurveTo(

        x + width,
        y,

        x + width,
        y + r

    );


    ctx.lineTo(

        x + width,
        y + height - r

    );


    ctx.quadraticCurveTo(

        x + width,
        y + height,

        x + width - r,
        y + height

    );


    ctx.lineTo(

        x + r,
        y + height

    );


    ctx.quadraticCurveTo(

        x,
        y + height,

        x,
        y + height - r

    );


    ctx.lineTo(
        x,
        y + r
    );


    ctx.quadraticCurveTo(

        x,
        y,

        x + r,
        y

    );


    ctx.closePath();

}



/* ==================================================
   画像を枠いっぱいに表示
================================================== */

function drawImageCover(
    ctx,
    image,
    x,
    y,
    width,
    height
) {

    const imageRatio =

        image.width /
        image.height;


    const boxRatio =

        width /
        height;


    let sx =
        0;

    let sy =
        0;

    let sw =
        image.width;

    let sh =
        image.height;


    if (

        imageRatio >
        boxRatio

    ) {

        sw =

            image.height *
            boxRatio;


        sx =

            (
                image.width -
                sw
            ) / 2;

    } else {

        sh =

            image.width /
            boxRatio;


        sy =

            (
                image.height -
                sh
            ) / 2;

    }


    ctx.drawImage(

        image,

        sx,
        sy,
        sw,
        sh,

        x,
        y,
        width,
        height

    );

}



/* ==================================================
   長い文字省略
================================================== */

function fitCanvasText(
    ctx,
    text,
    maxWidth
) {

    let result =
        text ||
        "";


    if (

        ctx.measureText(
            result
        ).width <=
        maxWidth

    ) {

        return result;

    }


    while (

        result.length >
        1

    ) {

        result =

            result.slice(
                0,
                -1
            );


        const check =

            `${result}…`;


        if (

            ctx.measureText(
                check
            ).width <=
            maxWidth

        ) {

            return check;

        }

    }


    return "…";

}



/* ==================================================
   1台分描画
================================================== */

function drawResultCar(
    ctx,
    car,
    image,
    rank,
    x,
    y,
    width,
    height
) {

    const radius =
        18;


    const imageHeight =

        Math.floor(

            height *
            0.66

        );


    const infoY =

        y +
        imageHeight;


    ctx.save();


    drawRoundedRect(

        ctx,

        x,
        y,

        width,
        height,

        radius

    );


    ctx.clip();


    ctx.fillStyle =
        "#17191e";


    ctx.fillRect(

        x,
        y,

        width,
        height

    );


    if (
        image
    ) {

        drawImageCover(

            ctx,

            image,

            x,
            y,

            width,
            imageHeight

        );

    } else {

        ctx.fillStyle =
            "#252830";


        ctx.fillRect(

            x,
            y,

            width,
            imageHeight

        );


        ctx.fillStyle =
            "#707681";


        ctx.font =
            "700 22px sans-serif";


        ctx.textAlign =
            "center";


        ctx.textBaseline =
            "middle";


        ctx.fillText(

            "NO IMAGE",

            x +
            width / 2,

            y +
            imageHeight / 2

        );

    }


    ctx.fillStyle =
        "#17191e";


    ctx.fillRect(

        x,
        infoY,

        width,
        height -
        imageHeight

    );


    ctx.textAlign =
        "left";


    ctx.textBaseline =
        "top";


    ctx.fillStyle =
        "#60a5fa";


    ctx.font =
        "800 24px sans-serif";


    ctx.fillText(

        `${rank}位`,

        x + 14,

        infoY + 10

    );


    ctx.fillStyle =
        "#ffffff";


    ctx.font =
        "800 26px sans-serif";


    ctx.fillText(

        fitCanvasText(

            ctx,

            car.name,

            width - 28

        ),

        x + 14,

        infoY + 42

    );


    ctx.fillStyle =
        "#9ca3af";


    ctx.font =
        "600 18px sans-serif";


    const detail =

        [

            car.model,
            car.grade

        ]

            .filter(
                Boolean
            )

            .join(
                " "
            );


    ctx.fillText(

        fitCanvasText(

            ctx,

            detail,

            width - 28

        ),

        x + 14,

        infoY + 76

    );


    ctx.restore();


    ctx.strokeStyle =
        "#333740";


    ctx.lineWidth =
        2;


    drawRoundedRect(

        ctx,

        x,
        y,

        width,
        height,

        radius

    );


    ctx.stroke();

}



/* ==================================================
   Canvas → Blob
================================================== */

function canvasToBlob(
    canvas
) {

    return new Promise(

        (
            resolve,
            reject
        ) => {


            canvas.toBlob(

                blob => {


                    if (
                        blob
                    ) {

                        resolve(
                            blob
                        );

                    } else {

                        reject(

                            new Error(
                                "PNGの作成に失敗しました"
                            )

                        );

                    }

                },

                "image/png"

            );

        }

    );

}



/* ==================================================
   SNS画像作成
================================================== */

async function saveResultImage(
    canvasWidth,
    canvasHeight,
    fileLabel,
    button
) {

    if (

        !state.resultCars.length

    ) {

        return;

    }


    const originalText =
        button.textContent;


    button.disabled =
        true;


    button.textContent =
        "作成中...";


    try {


        const canvas =

            document.createElement(
                "canvas"
            );


        canvas.width =
            canvasWidth;


        canvas.height =
            canvasHeight;


        const ctx =

            canvas.getContext(
                "2d"
            );


        /*
           背景
        */

        ctx.fillStyle =
            "#0c0d10";


        ctx.fillRect(

            0,
            0,

            canvas.width,
            canvas.height

        );


        const count =
            state.resultCars.length;


        /*
           タイトル
        */

        ctx.textAlign =
            "center";


        ctx.textBaseline =
            "middle";


        ctx.fillStyle =
            "#ffffff";


        ctx.font =
            "900 50px sans-serif";


        ctx.fillText(

            `好き車${count}選`,

            canvas.width / 2,

            65

        );


        ctx.fillStyle =
            "#8e949f";


        ctx.font =
            "600 18px sans-serif";


        ctx.fillText(

            "MY FAVORITE CARS",

            canvas.width / 2,

            105

        );


        /*
           3×3
        */

        const gap =
            14;


        const marginX =
            38;


        const top =
            135;


        const bottom =
            35;


        const cardWidth =

            (

                canvas.width -

                marginX * 2 -

                gap * 2

            ) / 3;


        const cardHeight =

            (

                canvas.height -

                top -

                bottom -

                gap * 2

            ) / 3;


        const cars =

            state.resultCars.map(

                id =>
                    getCar(
                        id
                    )

            );


        const images =

            await Promise.all(

                cars.map(

                    car =>

                        loadCanvasImage(
                            car
                        )

                )

            );


        for (

            let index = 0;

            index < 9;

            index++

        ) {

            const row =

                Math.floor(
                    index / 3
                );


            const column =

                index %
                3;


            const x =

                marginX +

                column *

                (
                    cardWidth +
                    gap
                );


            const y =

                top +

                row *

                (
                    cardHeight +
                    gap
                );


            const car =
                cars[index];


            /*
               9台未満
            */

            if (
                !car
            ) {

                ctx.strokeStyle =
                    "#24272e";


                ctx.lineWidth =
                    2;


                ctx.setLineDash(
                    [8, 8]
                );


                drawRoundedRect(

                    ctx,

                    x,
                    y,

                    cardWidth,
                    cardHeight,

                    18

                );


                ctx.stroke();


                ctx.setLineDash(
                    []
                );


                continue;

            }


            drawResultCar(

                ctx,

                car,

                images[index],

                index + 1,

                x,
                y,

                cardWidth,
                cardHeight

            );

        }


        const blob =

            await canvasToBlob(
                canvas
            );


        const url =

            URL.createObjectURL(
                blob
            );


        const link =

            document.createElement(
                "a"
            );


        link.href =
            url;


        link.download =

            `好き車${count}選_${fileLabel}.png`;


        document.body.appendChild(
            link
        );


        link.click();


        link.remove();


        setTimeout(

            () =>

                URL.revokeObjectURL(
                    url
                ),

            1000

        );


    } catch (error) {


        console.error(
            error
        );


        alert(
            "結果画像の作成に失敗しました。"
        );


    } finally {


        button.disabled =
            false;


        button.textContent =
            originalText;

    }

}



/* ==================================================
   X・共用
================================================== */

saveSquareButton.addEventListener(

    "click",

    async () => {


        closeSaveResultModal();


        await saveResultImage(

            1080,

            1080,

            "SNS_1080x1080",

            saveSquareButton

        );

    }

);



/* ==================================================
   Instagram 4:5
================================================== */

saveInstagramButton.addEventListener(

    "click",

    async () => {


        closeSaveResultModal();


        await saveResultImage(

            1080,

            1350,

            "Instagram_1080x1350",

            saveInstagramButton

        );

    }

);



/* ==================================================
   再開
================================================== */

function resumeStage() {

    updateSelectedCount();


    switch (
        state.stage
    ) {


        case "first":


            showScreen(
                selectionScreen
            );


            renderSelectionPage();


            break;



        case "firstComplete":


            completeSelectedCount.textContent =

                state.selectedCars.size;


            nextStageMessage.textContent =

                state.selectedCars.size <=
                SETTINGS.qualifierSkipAt

                    ? "予選をスキップして、2択の順位決めへ進みます。"

                    : "通常予選と敗者復活で、16台以下まで絞ります。";


            showScreen(
                selectionCompleteScreen
            );


            break;



        case "qualifier":


            showScreen(
                qualifierScreen
            );


            if (

                state.qualifierCurrentGroup.length

            ) {

                renderQualifier();

            } else {

                prepareQualifierGroup();

            }


            break;



        case "final":


            showScreen(
                finalScreen
            );


            renderFinalComparison();


            break;



        case "result":


            renderResult();


            showScreen(
                resultScreen
            );


            break;



        default:


            startNewGame();

    }

}



/* ==================================================
   押した時の動き
================================================== */

document.addEventListener(

    "pointerdown",

    event => {


        const card =

            event.target.closest(

                ".car-card, .final-car"

            );


        if (
            card
        ) {

            card.classList.add(
                "pressing"
            );

        }

    }

);


function clearPressing() {

    document

        .querySelectorAll(
            ".pressing"
        )

        .forEach(

            element => {


                element.classList.remove(
                    "pressing"
                );

            }

        );

}


document.addEventListener(

    "pointerup",

    clearPressing

);


document.addEventListener(

    "pointercancel",

    clearPressing

);



/* ==================================================
   ESC
================================================== */

document.addEventListener(

    "keydown",

    event => {


        if (

            event.key !==
            "Escape"

        ) {

            return;

        }


        if (

            !selectedModal
                .classList
                .contains(
                    "hidden"
                )

        ) {

            hideSelectedModal();

        }


        if (

            !saveResultModal
                .classList
                .contains(
                    "hidden"
                )

        ) {

            closeSaveResultModal();

        }

    }

);



/* ==================================================
   起動
================================================== */

function init() {

    const saved =
        getSavedData();


    if (
        saved
    ) {

        resumeModal.classList.remove(
            "hidden"
        );


        resumeButton.onclick =

            () => {


                resumeModal.classList.add(
                    "hidden"
                );


                loadState(
                    saved
                );

            };


        newGameButton.onclick =

            () => {


                resumeModal.classList.add(
                    "hidden"
                );


                startNewGame();

            };


        return;

    }


    startNewGame();

}


init();
