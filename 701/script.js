// 残りの数字は初期値701を表示
var remainingNum = 701;
ShowNumber.textContent = remainingNum;
// ダーツ投擲数
var dartCounter = 0;
// ラウンド数
var roundCounter = 1;
// 1回の投擲の得点
var hitNum;
// ラウンドの得点
var roundScore = 0;
// 自動チェンジの時間
var changeTimer = 7000;
// inBullの本数カウント
var inBullCounter = 0;
// outBullの本数カウント
var outBullCounter = 0;

// SEのインスタンス作成
const SE_GameOn = new Audio("SE/GameOn.mp3");
SE_GameOn.preload = "auto";
const SE_Single = new Audio("SE/Single.mp3");
SE_Single.preload = "auto";
const SE_Double = new Audio("SE/Double.mp3");
SE_Double.preload = "auto";
const SE_Triple = new Audio("SE/Triple.mp3");
SE_Triple.preload = "auto";
const SE_InBull = new Audio("SE/InBull.mp3");
SE_InBull.preload = "auto";
const SE_OutBull = new Audio("SE/OutBull.mp3");
SE_OutBull.preload = "auto";
const SE_Hattrick = new Audio("SE/Hattrick.mp3");
SE_Hattrick.preload = "auto";
const SE_ThreeInTheBlack = new Audio("SE/ThreeInTheBlack.mp3");
SE_ThreeInTheBlack.preload = "auto";
const SE_Ton80 = new Audio("SE/Ton80.mp3");
SE_Ton80.preload = "auto";
const SE_Change = new Audio("SE/Change.mp3");
SE_Change.preload = "auto";
const SE_Finish = new Audio("SE/Finish.mp3");
SE_Finish.preload = "auto";

function Scroll() {
    var scrollBox = document.getElementById("ScrollBox");
    scrollBox.scrollTop = scrollBox.scrollHeight;
}

function GameOnSE() {
    SE_GameOn.currentTime = 0;
    SE_GameOn.play();
}

// 全てリセットする関数の定義
function AllReset() {
    hitNum = 0;
    remainingNum = 701;
    roundScore = 0;
    dartCounter = 0;
    roundCounter = 1;
    inBullCounter = 0;
    outBullCounter = 0;
    Dart_1.textContent = "";
    Dart_2.textContent = "";
    Dart_3.textContent = "";
    Round_1.textContent = "";
    Round_2.textContent = "";
    Round_3.textContent = "";
    Round_4.textContent = "";
    Round_5.textContent = "";
    Round_6.textContent = "";
    Round_7.textContent = "";
    Round_8.textContent = "";
    Round_9.textContent = "";
    Round_10.textContent = "";
    Round_11.textContent = "";
    Round_12.textContent = "";
    Round_13.textContent = "";
    Round_14.textContent = "";
    Round_15.textContent = "";
}

const RoundChange = () => {
    // burstして残りの数字がマイナスならラウンド初期値に戻す
    if (remainingNum < 0) {
        // burst SEを流す
        ShowNumber.textContent = startOfTheRoundNum;
        remainingNum = startOfTheRoundNum;
    }
    dartCounter = 0;
    Dart_1.textContent = "";
    Dart_2.textContent = "";
    Dart_3.textContent = "";
    roundScore = 0;
    inBullCounter = 0;
    outBullCounter = 0;
    roundCounter++;
};

// アラート表示解除でチェンジする関数の定義
function AutoRoundChange() {
    // ダイアログの表示
    RoundChangeDialog.showModal();
    let AutoOrSkip = setTimeout(() => {
        SE_Change.currentTime = 0;
        SE_Change.play();
        RoundChangeDialog.close();
        RoundChange();
    },changeTimer);

    // ダイアログ内のボタンクリックでスキップ
    SkipButton.addEventListener("click",() => {
        clearTimeout(AutoOrSkip);
        SE_Change.currentTime = 0;
        SE_Change.play();
        RoundChangeDialog.close();
        RoundChange();
    });
}
  
// 残りの数字を計算して表示 & input内の文字をクリアする関数の定義
function AllscoreShow_InputClear() {
    remainingNum = Number(remainingNum) - Number(hitNum);
    // 合計を表示
    ShowNumber.textContent = remainingNum;
    // 合計が0になったらFinishのSE
    if (remainingNum === 0) {
        SE_Finish.currentTime = 0;
        SE_Finish.play();
    }
    // input枠内の文字をクリア
    HitNumber.value = "";
}

// ラウンド得点を表示する関数の定義
function RoundscoreShow() {
    if (hitNum === "-") {
        roundScore += 0;
    } else {
        roundScore += hitNum;
    }

    switch (roundCounter) {
        case 1:
            if (remainingNum < 0) {
                Round_1.textContent = "burst";
            } else {
                Round_1.textContent = roundScore;
            }
            break;
        case 2:
            if (remainingNum < 0) {
                Round_2.textContent = "burst";
            } else {
                Round_2.textContent = roundScore;
            }
            break;
        case 3:
            if (remainingNum < 0) {
                Round_3.textContent = "burst";
            } else {
                Round_3.textContent = roundScore;
            }
            break;
        case 4:
            if (remainingNum < 0) {
                Round_4.textContent = "burst";
            } else {
                Round_4.textContent = roundScore;
            }
            break;
        case 5:
            if (remainingNum < 0) {
                Round_5.textContent = "burst";
            } else {
                Round_5.textContent = roundScore;
            }
            break;
        case 6:
            Scroll();
            if (remainingNum < 0) {
                Round_6.textContent = "burst";
            } else {
                Round_6.textContent = roundScore;
            }
            break;
        case 7:
            Scroll();
            if (remainingNum < 0) {
                Round_7.textContent = "burst";
            } else {
                Round_7.textContent = roundScore;
            }
            break;
        case 8:
            Scroll();
            if (remainingNum < 0) {
                Round_8.textContent = "burst";
            } else {
                Round_8.textContent = roundScore;
            }
            break;
        case 9:
            Scroll();
            if (remainingNum < 0) {
                Round_9.textContent = "burst";
            } else {
                Round_9.textContent = roundScore;
            }
            break;
        case 10:
            Scroll();
            if (remainingNum < 0) {
                Round_10.textContent = "burst";
            } else {
                Round_10.textContent = roundScore;
            }
            break;
        case 11:
            Scroll();
            if (remainingNum < 0) {
                Round_11.textContent = "burst";
            } else {
                Round_11.textContent = roundScore;
            }
            break;
        case 12:
            Scroll();
            if (remainingNum < 0) {
                Round_12.textContent = "burst";
            } else {
                Round_12.textContent = roundScore;
            }
            break;
        case 13:
            Scroll();
            if (remainingNum < 0) {
                Round_13.textContent = "burst";
            } else {
                Round_13.textContent = roundScore;
            }
            break;
        case 14:
            Scroll();
            if (remainingNum < 0) {
                Round_14.textContent = "burst";
            } else {
                Round_14.textContent = roundScore;
            }
            break;
        case 15:
            Scroll();
            if (remainingNum < 0) {
                Round_15.textContent = "burst";
            } else {
                Round_15.textContent = roundScore;
            }
            break;
        default:
            break;
    }
}

// 1回の投擲の得点表示 & ラウンド得点表示 & ラウンドチェンジする関数の定義
function ThreeDartsResult() {
    // 投擲数を1増加
    dartCounter++;
    // 投げる毎に各投擲の得点表示とラウンド得点の表示
    switch (dartCounter) {
        case 1:
            Dart_1.textContent = hitNum;
            // バーストしていたらラウンドチェンジ
            if (remainingNum < 0) {
                AutoRoundChange();
            }
            break;
        case 2:
            Dart_2.textContent = hitNum;
            // バーストしていたらラウンドチェンジ
            if (remainingNum < 0) {
                AutoRoundChange();
            }
            break;
        case 3:
            Dart_3.textContent = hitNum;
            // Ton80 サウンド
            if (Number(roundScore) === 180) {
                SE_Ton80.currentTime = 0;
                SE_Ton80.play();
            // ThreeInTheBlack サウンド
            } else if (inBullCounter === 3) {
                SE_ThreeInTheBlack.currentTime = 0;
                SE_ThreeInTheBlack.play();
            // Hattrick サウンド
            } else if (outBullCounter + inBullCounter === 3) {
                SE_Hattrick.currentTime = 0;
                SE_Hattrick.play();
            }
            AutoRoundChange();
            break;
        default:
            break;
    }
}

// ページのロード後に初めてのクリックでリセットされる
document.addEventListener("click", function(){
    AllReset();
    GameOnSE();
}, {once: true}
);

// inputに文字を入力すると動く
HitNumber.oninput = function() {
    // 15ラウンドを超えて or 残りの数字が0で 続投したらリセットしてから表示
    if (roundCounter > 15 || remainingNum === 0) {
        AllReset();
    }
    
    // ラウンドの開始時の残り数字を記憶(バーストした際にこの数字に戻す)
    if (dartCounter === 0) {
        startOfTheRoundNum = remainingNum;
    }

    // 入力された文字から数字を算出
    var HitNumber = document.getElementById("HitNumber");
    switch (HitNumber.value) {
        case "0-": // 『0-』キーでCOUNT-UPに変更
            window.open("../COUNT-UP/dartsGame-CU.html");
            window.close();
        case "00":  // 『0』キー2回でリセット
            AllReset();
            GameOnSE();
            AllscoreShow_InputClear();
            break;
        case "-":  // 『-』キーでアウトボード
            HitNumber.value = "";  // input枠内の文字をクリア
            hitNum = "-";
            RoundscoreShow();
            ThreeDartsResult();
            break;
        case "ib":
            SE_InBull.currentTime = 0;
            SE_InBull.play();
            hitNum = 50;
            inBullCounter++;
            AllscoreShow_InputClear();
            RoundscoreShow();
            ThreeDartsResult();
            break;
        case "ob":
            SE_OutBull.currentTime = 0;
            SE_OutBull.play();
            hitNum = 50;
            outBullCounter++;
            AllscoreShow_InputClear();
            RoundscoreShow();
            ThreeDartsResult();
            break;
        default:
            // 数字と場所を示す文字列を分解して処理  「12s」 -> 「12」「s」
            let num = HitNumber.value.replace(/[^0-9]/g, "");
            let pos = HitNumber.value.replace(/[^a-z]/g, "");
            switch (pos) {
                case "s":
                    SE_Single.currentTime = 0;
                    SE_Single.play();
                    hitNum = Number(num);
                    AllscoreShow_InputClear();
                    RoundscoreShow();
                    ThreeDartsResult();
                    break;
                case "d":
                    SE_Double.currentTime = 0;
                    SE_Double.play();
                    hitNum = num * 2;
                    AllscoreShow_InputClear();
                    RoundscoreShow();
                    ThreeDartsResult();
                    break;
                case "t":
                    SE_Triple.currentTime = 0;
                    SE_Triple.play();
                    hitNum = num * 3;
                    AllscoreShow_InputClear();
                    RoundscoreShow();
                    ThreeDartsResult();
                    break;
                default:
                    hitNum = 0;
                    break;
            }
            break;
    }
}