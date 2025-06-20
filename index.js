//! 완성 . 모든 기능 다 됨. 절대 건들지 말 것.

const button = document.getElementsByClassName("button"); 
const 창 = document.getElementById("창");
const per = document.getElementById("per");
const operator = document.getElementsByClassName("operator");
const number = document.getElementsByClassName("number");
const del = document.getElementById("delete");
const sosu = document.getElementById("sosu");
const zero = document.getElementById("zero");
const 는 = document.getElementById("는");
const plusMinus = document.getElementById("plusMinus");



let 선택된수 = [];

//C 전체 삭제 & 전체 콘솔 출력하기
for ( let btn of button) {
    btn.addEventListener( "click", () => {
        //console.log(btn.textContent);
        if ( btn.textContent === "c") {
            선택된수 = []; 
            창.textContent = "0";
        }
    });
}


//뒤로가기
del.addEventListener("click", () => {
    선택된수.pop();
    if ( 선택된수.length === 0 ) {
        창.textContent = "0";
    } else {
        창.textContent = 선택된수.join(''); //배열을 문자열 형태로 바꿔줌
    }
})

// . 중복 예방
sosu.addEventListener("click", () => {
    if( !선택된수.includes(".")) {
    창.textContent += ".";
    선택된수.push(".");
    }
});



// 연산기호를 누르면 디스플레이에 있는 숫자를 firstOperand로 저장하기
/*
1) 연산기호를 누르면 화면에 적힌 숫자 firstOperand로 저장, 연산기호 기억
2) 새 숫자를 누를 경우, 기존 화면에 있던 숫자는 비우고 새 숫자 입력
3) =을 누를 경우, 화면에 적힌 숫자 secondOperand로 저장
4) firstOperand와 secondOperand 연산
5) 는 누른 후에 숫자를 누르면 화면 지우고 다시 시작, 연산기호 누르면 기억
*/



let firstOperand = "";
let secondOperand = "";
let oper = "";
let isOpered = false;
let pe = "";
let isPer = false;


//연산자
for( let op of operator ) {
    op.addEventListener( "click", () => {
        firstOperand = Number(창.textContent);
        console.log(`firstOperand: ${firstOperand}`);
        oper = op.textContent;
        console.log(`oper: ${oper}`);
        isOpered = true;    //연산됐는가? 네
        선택된수 = [];  //이거 없으면 초기화안돼서 소수점이 두 개 이상 안들어감
        
    });
}


per.addEventListener("click", () => {
        firstOperand = Number(창.textContent);
        console.log(`firstOperand: ${firstOperand}`);
        pe = per.textContent;
        console.log(`function: ${pe}`);
        isPer = true;   //true면 창 초기화함
        선택된수 = [];
    })

//숫자 창에 출력하기 (연산 직후(true)일 때는 창 초기화하고 다시 시작, 0만 있을 때는 숫자로 대치하고 아닐 땐 그냥 추가)
for (let btn of number) {
    btn.addEventListener("click", () => {
        const 숫자 = btn.textContent;
        if (isOpered || isPer) {
            창.textContent = "";
            isOpered = false;
            isPer = false;
        }
        
        if (창.textContent === "0") {
            창.textContent = 숫자;
            선택된수 = [숫자];
        } else {
            창.textContent += 숫자;
            선택된수.push(숫자);
        }
    });
}

//는
는.addEventListener( "click", () => {
    let 결과 = "";
    if ( 창.textContent === "") {
        secondOperand = null;
    } else {
        secondOperand = Number(창.textContent);
    }
    console.log(`secondOperand: ${secondOperand}`)
        switch (oper) {
            case "+":
                결과 = firstOperand + secondOperand;
                창.textContent = 결과;
                console.log(`결과: ${결과}`);
                break;

            case "-":
                결과 = firstOperand - secondOperand;
                창.textContent = 결과;
                console.log(`결과: ${결과}`);
                break;

            case "*":
                결과 = firstOperand * secondOperand;
                창.textContent = 결과;
                console.log(`결과: ${결과}`);
                break;
                    
            case "/":
                결과 = secondOperand !== 0 ? firstOperand / secondOperand : "오류";
                창.textContent = 결과;
                console.log(`결과: ${결과}`);
                break;
                }

        if (pe === "%") {
                if (secondOperand === firstOperand ) {
                    결과 = firstOperand * 0.01;
                    창.textContent = 결과;
                    선택된수.push(결과);
                    console.log(`결과: ${결과}`);
                } else {
                    결과 = firstOperand % secondOperand;
                    창.textContent = 결과;
                    선택된수.push(결과);
                    console.log(`결과: ${결과}`);
                }
                pe = "", isPer = false;
                return;
        }

        
    });
plusMinus.addEventListener("click", () => {
            결과 = 창.textContent * -1;
            창.textContent = 결과;
            선택된수.push(결과);
            console.log(`음양변환" ${결과}`);
        });

    /*------------광택 이동-----------*/


const baOne =document.getElementById("baOne");
const baTwo =document.getElementById("baTwo")
let x1 = 0;
let x2 = 1000;

function moving1 () {
    x1 += 10;
    const screenWidth = window.innerWidth;
    const baOneWidth = baOne.offsetWidth;

    if ( x1 > screenWidth ) {
        x1 = -1000;
    }
    baOne.style.transform =  `translateX(${x1}px) rotate(-25deg)`;
}

function moving2 () {
    x2 += 10;
    const screenWidth = window.innerWidth;
    const baTwoWidth = baTwo.offsetWidth;

    if ( x2 > screenWidth ) {
        x2 = -1000;
    }
    baTwo.style.transform =  `translateX(${x2}px) rotate(-25deg)`;
}

setInterval(moving1, 30);
setInterval(moving2, 30);




// -----------깜빡깜빡------------
let oneVisible = true;
let twoVisible = true;

setInterval(() => {
    baOne.style.opacity = oneVisible ? "0.5" : "0.8";
    oneVisible = !oneVisible;

    baTwo.style.opacity = twoVisible ? "0.8" : "0.5";
    twoVisible = !twoVisible;
}, 1000);