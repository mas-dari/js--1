// alert(11111);

// じゃんけんアプリ
// クリックすると開始

// グーを押した時
// cpの出した手を表示
$(".rock").on("click", function () {

    var cpchoice = Math.floor(Math.random() * 3);
    console.log(cpchoice,"対戦相手の手の箱")
    
    if (cpchoice === 0) {
        console.log("0"); 
        $(".cp").html('<img src="/Users/ryoma.masuda/Desktop/G/1021_js_課題/img/rock.png" alt="グーの画像">');
    }else if(cpchoice === 1){
        console.log("1");
        $(".cp").html('<img src="/Users/ryoma.masuda/Desktop/G/1021_js_課題/img/scissors.png" alt="チョキの画像">');
    }else if(cpchoice === 2){
        console.log("2");
        $(".cp").html('<img src="/Users/ryoma.masuda/Desktop/G/1021_js_課題/img/paper.png" alt="パーの画像">');
    }    
  
// グーを出した時の勝敗を表示
    if (cpchoice === 0) {
        console.log("0"); 
        $(".result").html('<img src="/Users/ryoma.masuda/Desktop/G/1021_js_課題/img/movie_couple.png" alt="あいこの画像">');
    }else if(cpchoice === 1){
        console.log("1");
        $(".result").html('<img src="/Users/ryoma.masuda/Desktop/G/1021_js_課題/img/pose_win_boy.png" alt="勝ちの画像">');
    }else if(cpchoice === 2){
        console.log("2");
        $(".result").html('<img src="/Users/ryoma.masuda/Desktop/G/1021_js_課題/img/pose_lose_boy.png" alt="負けの画像">');
    }    
});

// チョキを押した時
// cpの出した手を表示
$(".scissors").on("click", function () {

    var cpchoice = Math.floor(Math.random() * 3);
    console.log(cpchoice,"対戦相手の手の箱")
    
    if (cpchoice === 0) {
        console.log("0"); 
        $(".cp").html('<img src="/Users/ryoma.masuda/Desktop/G/1021_js_課題/img/rock.png" alt="グーの画像">');
    }else if(cpchoice === 1){
        console.log("1");
        $(".cp").html('<img src="/Users/ryoma.masuda/Desktop/G/1021_js_課題/img/scissors.png" alt="チョキの画像">');
    }else if(cpchoice === 2){
        console.log("2");
        $(".cp").html('<img src="/Users/ryoma.masuda/Desktop/G/1021_js_課題/img/paper.png" alt="パーの画像">');
    }    
  
// チョキを出した時の勝敗を表示
    if (cpchoice === 0) {
        console.log("0"); 
        $(".result").html('<img src="/Users/ryoma.masuda/Desktop/G/1021_js_課題/img/pose_lose_boy.png" alt="負けの画像">');
    }else if(cpchoice === 1){
        console.log("1");
        $(".result").html('<img src="/Users/ryoma.masuda/Desktop/G/1021_js_課題/img/movie_couple.png" alt="あいこの画像">');
    }else if(cpchoice === 2){
        console.log("2");
        $(".result").html('<img src="/Users/ryoma.masuda/Desktop/G/1021_js_課題/img/pose_win_boy.png" alt="勝ちの画像">');
    }    
});


// パーを押した時
// cpの出した手を表示
$(".paper").on("click", function () {

    var cpchoice = Math.floor(Math.random() * 3);
    console.log(cpchoice,"対戦相手の手の箱")
    
    if (cpchoice === 0) {
        console.log("0"); 
        $(".cp").html('<img src="/Users/ryoma.masuda/Desktop/G/1021_js_課題/img/rock.png" alt="グーの画像">');
    }else if(cpchoice === 1){
        console.log("1");
        $(".cp").html('<img src="/Users/ryoma.masuda/Desktop/G/1021_js_課題/img/scissors.png" alt="チョキの画像">');
    }else if(cpchoice === 2){
        console.log("2");
        $(".cp").html('<img src="/Users/ryoma.masuda/Desktop/G/1021_js_課題/img/paper.png" alt="パーの画像">');
    }    
  
// パーを出した時の勝敗を表示
    if (cpchoice === 0) {
        console.log("0"); 
        $(".result").html('<img src="/Users/ryoma.masuda/Desktop/G/1021_js_課題/img/pose_win_boy.png" alt="勝ちの画像">');
    }else if(cpchoice === 1){
        console.log("1");
        $(".result").html('<img src="/Users/ryoma.masuda/Desktop/G/1021_js_課題/img/pose_lose_boy.png" alt="負けの画像">');
    }else if(cpchoice === 2){
        console.log("2");
        $(".result").html('<img src="/Users/ryoma.masuda/Desktop/G/1021_js_課題/img/movie_couple.png" alt="あいこの画像">');
    }    
});


//   自分が出した手を表示

$(".rock").on("click", function () {
    $(".player").html('<img src="/Users/ryoma.masuda/Desktop/G/1021_js_課題/img/rock.png" alt="グーの画像">');
});

$(".scissors").on("click", function () {
    $(".player").html('<img src="/Users/ryoma.masuda/Desktop/G/1021_js_課題/img/scissors.png" alt="チョキの画像">');
});

$(".paper").on("click", function () {
    $(".player").html('<img src="/Users/ryoma.masuda/Desktop/G/1021_js_課題/img/paper.png" alt="パーの画像">');
});


