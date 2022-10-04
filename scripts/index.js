
//폭탄이 있는 위치를 나타내는 배열
//DOM이 로드가 되면 반복문을 이용하여 [0,0,0,0,0,0,0,0,1]로 초기화
let num = [];

//박스를 선택한 순서를 기록하는 배열
let selNum = [];

//박스를 선택한 개수를 기록하는 변수
let cnt = 0 ;

//폭탄이 섞였는지 체크하는 flag변수
let shuffleFlag = false;


// // 눌러진 번호판 번호를 배열에 추가


// 숫자박스가 선택된 경우

// 메시지 출력함수
const msgShow = (m) => {
    const msg = document.getElementById("msg");
    msg.innerHTML = m;
}
const show = (i) => {
    if (shuffleFlag == false) {
        msgShow("폭탄을 섞어 주세요.")
        return
    }

    let imgSrc = null;

    if (num[i - 1] == 1) { imgSrc = "boom";
    } else {imgSrc = "hart"; }
    document.getElementById(`box${i}`).innerHTML = `"<img src=./images/${imgSrc}.png>"`;
    // console.log(i);
    
    if (!selNum.includes(i)) selNum.push(i);

    //성공체크
    if (selNum.length == 8){
        let fn = [1, 2, 3, 4, 5, 6, 7, 8, 9].filter((i) => !selNum.includes(i));
        console.log(fn[0]);
        document.getElementById(`box${fn[0]}`).innerHTML = "<img src=./images/hart.png>";
        shuffleFlag = false;
        msgShow('성공');
    }

    //실패체크
    if (imgSrc == "boom") 
    {shuffleFlag = false ;
    msgShow('실패');}

}
// 초기화 함수
const init = () => {
    //메시지 지우기
    msgShow('');

    // 그림 지우기
    for (let n = 1; n <= 9; n++){
        document.getElementById(`box${n}`).innerHTML = "";
    }
    selNum = [];
}

//폭탄섞기 함수
const boxShuffle = () => {
    num.sort(() => Math.random() - 0.5);
    shuffleFlag = true;
    init();
    console.log(num);
}


/* DOM이 로드된 후에 클릭이벤트 연결*/
document.addEventListener("DOMContentLoaded", ()=>{
    // let num = [0,0,0,0,0,0,0,0,1];
    for (let i = 0; i < 8; i++) {
        num.push(0);
    }
    num.push(1);   
   
   
});