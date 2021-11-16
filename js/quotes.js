const wiseSayings = [
  {
    wiseSaying: "상황을 가장 잘 활용하는 사람이 가장 좋은 상황을 맞는다.",
    author: "존 우든",
  },
  {
    wiseSaying:
      "일반적인 것을 잃을 위험을 감수하지 않으면 평범한 것에 만족해야 한다.",
    author: "짐 론",
  },
  {
    wiseSaying: "기회는 일어나는 것이 아니라 만들어내는 것이다.",
    author: "크리스 그로서",
  },
  {
    wiseSaying:
      "성공한 사람이 되려고 노력하기보다 가치있는 사람이 되려고 노력하라.",
    author: "알버트 아인슈타인r",
  },
  {
    wiseSaying:
      "나는 실패한 게 아니다. 나는 잘 되지 않는 방법 1만 가지를 발견한 것이다.",
    author: "토마스 에디슨",
  },
  {
    wiseSaying:
      "남들이 당신에게 던진 벽돌들로 탄탄한 기반을 쌓을 수 있어야 성공한다.",
    author: "데이비드 브링클리",
  },
  {
    wiseSaying: "지옥을 겪고 있다면 계속 겪어 나가라.",
    author: "윈스턴 처칠",
  },
];

const wiseSaying = document.querySelector("#wiseSaying span:first-child");
const author = document.querySelector("#wiseSaying span:last-child");
const todaysWiseSaying =
  wiseSayings[Math.floor(Math.random() * wiseSayings.length)];

wiseSaying.innerText = todaysWiseSaying.wiseSaying;
author.innerText = todaysWiseSaying.author;
