const btn = document.getElementById('btn');
const fizz = document.getElementById('fizz');
const buzz = document.getElementById('buzz');
const table = document.getElementById('table');

//input名（fizz,buzz）とinput値を受け取るクラス
class FizzBuzz {
  constructor(f, name){
    this.figure = f;
    this.name = name;
  }
  //入力された数字の2倍で100以内の配列
  multiple(){
    let fbArray = [];
    let twiced = 0;
    for (let i=1; i<20; i++) {
      if (i===1){
        twiced = this.figure;
        console.log(twiced);
      } else {
        twiced = parseInt(twiced) + parseInt(this.figure);
        console.log(twiced);
      }
      if (twiced<100){
        fbArray[i-1] = [this.name,twiced];
      }
    }
    return fbArray;
  }
}

//配列を結合
function concat (fizz, buzz) {
  let concat = fizz.concat(buzz)
  return concat; 
}

//ソートされた配列と入力するタグ名を受け取り書き込む
//cはarray,tはテーブル
function wTable (concat, table) {
  this.table.innerText = "";
  let deplicateArray = [];
  for (let i=0; i<concat.length-1; i++){
    if (parseInt(concat[i][1])===parseInt(concat[i+1][1])){
      let tArray = concat[i];
      //console.log(aaa);
      //pushが効かない、どうも上書きされてりるが理由はわからない
      deplicateArray[i] = tArray;
      //this.dArray.push = aaa;
    }
  }       
  for (let i=0; i<concat.length;i++){
    //for (let j=0; j<deplicateArray.length; j++){
      if (deplicateArray[i]){
        //t.textContent += `FizzBuzz ${c[i][1]}`;
        let newElFizzBuzz = document.createElement("p");
        const newConFizzBuzz = document.createTextNode('FizzBuzz' + '\0' + concat[i][1]);
        newElFizzBuzz.appendChild(newConFizzBuzz);
        table.insertBefore(newElFizzBuzz, null);
        //table.innerHTML += '<p>' + 'FizzBuzz' + '\0' + concat[i][1] + '\n' + '</p>';
        
        i++;
      } else {
      //半角スペースをつけるのに四苦八苦
        let newElement = document.createElement("p");
        const newContent = document.createTextNode(concat[i][0] + '\0' + concat[i][1]);
        newElement.appendChild(newContent);
        table.insertBefore(newElement, null);
        //table.innerHTML += '<p>' + concat[i][0] + '\0' + concat[i][1] + '\n' + '</p>';
      // table.appendChild('p');
      }
    //}
  }
  return this.table;
  
}
//正規表現でインプット値を判定
function checkInput (inp) {
  //const pattern = /\d/*
  const re = new RegExp(/^[0-9]*$/);
  if (inp === ""){
    return false;
  } else if (inp.match(re)){
    console.log(typeof inp);
    console.log(`f=${inp}`);
    return true; 
  } else {
    return false;
  }
}
table.addEventListener('click', function(e){
  console.log(e);
});

btn.addEventListener('click', function(e){
  
  const fzFigure = new FizzBuzz(fizz.value, 'Fizz');
  const bzFigure = new FizzBuzz(buzz.value, 'Buzz');
  
  if (!checkInput(fizz.value)){
    table.style.width = '300px';
    table.textContent = '整数値を入力してください';
    return;
  }
  if (!checkInput(buzz.value)){
    table.style.width = '300px';
    table.textContent = '整数値を入力してください';
    return;
  }
  let fzFig = fzFigure.multiple();
  let bzFig = bzFigure.multiple();
 
  //配列を昇順に
  let concatArray = fzFig.concat(bzFig);
  concatArray.sort(function(a, b){
    return a[1] - b[1];
  });
  table.style.width = '50px';
  wTable(concatArray, table);
});