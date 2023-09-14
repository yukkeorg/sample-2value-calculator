/**
 * 算術演算子と関数の対応表
 */
const OPTBL = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "*": (a, b) => a * b,
  "/": (a, b) => a / b,
};

/**
 * 計算式のパース
 * 
 * @param String calcText 計算式文字列
 * @returns {Function, Number, Number} 計算式のパース結果
 */
const parse = (calcText) => {  
  const splitted = calcText.trim().split(/ +/);
  if(splitted.length != 3) { return null; }

  let [value1, op, value2] = splitted;
	
  try {
  	value1 = Number.parseInt(value1);
  	value2 = Number.parseInt(value2);
  } catch (e) {
  	return null;
  }  

	if(!(op in OPTBL)) { return null; } 
	
  return {
    opfunc: OPTBL[op],
    value1: value1,
    value2: value2
  };
};

/**
 * メイン関数 
 */
const main = () => {
	const resultBtn = document.getElementById("calculate");

  resultBtn.addEventListener("click", () => {
	  const calcText = document.getElementById("calcText");
  	const resultElm = document.getElementById("result");
    
    let parsed = parse(calcText.value);
    if (parsed) {
      resultElm.innerHTML = parsed.opfunc(parsed.value1, parsed.value2);
    } else {
    	resultElm.innerHTML = "計算式が不正です。";
    }
    return false;
  });
};

// HTML要素が全て読込まれたらmain()を実行します。
window.addEventListener("DOMContentLoaded", main);
