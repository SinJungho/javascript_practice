const rawInput = prompt('태어난 날을 입력하세요.', "");
const year = Number(rawInput);
const e = year % 12;

let result

switch (e) {
    case 0:
        result = "원숭이"
        alert(`${year}년에 태어났다면 ${result}띠 입니다`);
        break;

    case 1:
        result = "닭"
        alert(`${year}년에 태어났다면 ${result}띠 입니다`);
        break;

    case 2:
        result = "개"
        alert(`${year}년에 태어났다면 ${result}띠 입니다`);
        break;

    case 3:
        result = "돼지"
        alert(`${year}년에 태어났다면 ${result}띠 입니다`);
        break;

    case 4:
        result = "쥐"
        alert(`${year}년에 태어났다면 ${result}띠 입니다`);
        break;

    case 5:
        result = "소"
        alert(`${year}년에 태어났다면 ${result}띠 입니다`);
        break;

    case 6:
        result = "호랑이"
        alert(`${year}년에 태어났다면 ${result}띠 입니다`);
        break;

    case 7:
        result = "토끼"
        alert(`${year}년에 태어났다면 ${result}띠 입니다`);
        break;

    case 8:
        result = "용"
        alert(`${year}년에 태어났다면 ${result}띠 입니다`);
        break;

    case 9:
        result = "뱀"
        alert(`${year}년에 태어났다면 ${result}띠 입니다`); 
        break;

    case 10:
        result = "말"
        alert(`${year}년에 태어났다면 ${result}띠 입니다`); 
        break;

    case 11:
        result = "양" 
        alert(`${year}년에 태어났다면 ${result}띠 입니다`);
        break;       

    default:
        alert(`${year} 잘못된 범위의 숫자입니다. 다시 입력하세요.`);
        break;
}