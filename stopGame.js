//スタートしたら現在の時刻から何秒経過したかで時間を計測する
let startTime;
startTime = Date.now();
//再起的にするため
var timeId;

var d = 0;
var start = document.getElementById('start');
var stop = document.getElementById('stop');
var reset = document.getElementById('reset');
var result = document.getElementById('result');

function timer(){
    d = new Date(Date.now() - startTime);
    const s = ("00" + d.getSeconds()).slice(-2);
    //const ms = ("000" + d.getMilliseconds()).slice(-3);
    //const t = s + "." + ms;
    const t = s;
    document.getElementById('time').textContent = t ;
   
}

function countUp(){
    timeId = setTimeout(() => {
        timer();
        countUp(); 
    },10);
}

//スタートボタン押したらスタート
start.addEventListener('click',() =>{
    startTime = Date.now();
    countUp();
    //３秒後に隠す
    setTimeout(function(){
        $('#time').fadeOut();
    },3000);

});

//ストップボタンを押してピッタリじゃなければアウト、ピッタリであればクリアの表示をさせる
stop.addEventListener('click',() =>{
    $('#time').show();
    clearTimeout(timeId);
    if( 9999 <d && d < 11000 ){
      result.textContent="成功！！";
    }else{
        result.textContent="残念！！";
      
    }   
    
});

reset.addEventListener('click', () => {


  clearTimeout(timeId);
  
  document.getElementById('time').textContent = '00:00.000';
  result.textContent= null;

})
