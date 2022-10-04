/* DOM이 로드된 후에 클릭이벤트 연결*/
//DOM이 로드가 되면 반복문을 이용하여 [0,0,0,0,0,0,0,0,1]로 초기화
let num = [];
document.addEventListener("DOMContentLoaded", () => {
  for (let i = 0; i < 8; i++) {
    num.push(0);
  }
  num.push(1);
});

//폭탄이 섞였는지 체크하는 flag변수
let shuffleFlag = false;

//폭탄섞기 함수
const boxShuffle = () => {
  num.sort(() => Math.random() - 0.5);
  document.getElementById("bt1").style.display = "none";
  shuffleFlag = true;
  init();
  console.log(num);
};

// 메시지 출력함수
const msgShow = (m) => {
  const msg = document.getElementById("msg");
  msg.innerHTML = m;
};

// 초기화 함수
const init = () => {
  //메시지 지우기
  msgShow("");

  // 그림 지우기
  for (let n = 1; n <= 9; n++) {
    document.getElementById(`box${n}`).innerHTML = "";
  }
  selNum = [];
};

//박스를 선택한 순서를 기록하는 배열
let selNum = [];
const show = (i) => {
  if (shuffleFlag == false) {
    msgShow("폭탄을 섞어 주세요.");
    return;
  }

  let imgSrc = null;

  if (num[i - 1] == 1) {
    imgSrc = "boom";
  } else {
    imgSrc = "hart";
  }
  document.getElementById(
    `box${i}`
  ).innerHTML = `"<img src=./images/${imgSrc}.png>"`;

  if (!selNum.includes(i)) selNum.push(i);

  //성공체크
  if (selNum.length == 8) {
    let fn = [1, 2, 3, 4, 5, 6, 7, 8, 9].filter((i) => !selNum.includes(i));
    console.log(fn[0]);
    document.getElementById(`box${fn[0]}`).innerHTML =
      "<img src=./images/hart.png>";
    shuffleFlag = false;
    msgShow("성공");
    document.getElementById("bt1").style.display = "block";
  }

  //실패체크
  if (imgSrc == "boom") {
    shuffleFlag = false;
    msgShow("실패");
    document.getElementById("bt1").style.display = "block";
  }
};
