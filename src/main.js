let html = document.querySelector("#html"); //该API作用：通过css选择器找到demo元素。
let style = document.querySelector("#style");
let string = `/*嘿，我是林克
*我现在要为你演示我的言出法随，请看：
*首先我要将文字变为粉色
*/
body{
  color: pink;
}
/*
*我要一个div
*/
#div1{
  border: 1px solid red;
  width: 200px;
  height: 200px;
  
}
/*
*接下来我把 div 变成一个八卦图
*注意看
*首先，div变圆
*/
#div1{
  border-radius: 50%;
  box-shadow: 0 0 3px rgba(0,0,0,0.5);
  border: none;
}
/*
*八卦是阴阳形成
*一黑一白
*/
#div1{
background: 
linear-gradient(90deg, rgba(255,255,255,1) 0%, 
rgba(255,255,255,1) 50%, 
rgba(0,0,0,1) 50%,
rgba(0,0,0,1) 100%);
}
/*加阴阳鱼*/
#div1::before{
  width: 100px;
  height: 100px;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  background: #000;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(255,255,255,1) 0%, 
  rgba(255,255,255,1) 25%, 
  rgba(0,0,0,1) 25%, 
  rgba(0,0,0,1) 100%);
}
#div1::after{
  width: 100px;
  height: 100px;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  background: #fff;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(0,0,0,1) 0%,
  rgba(0,0,0,1) 25%, 
  rgba(255,255,255,1) 25%, 
  rgba(255,255,255,1) 100%);
}
`;
let string2 = "";
let n = 0;

let step = () => {
  //声明一个函数 step：描述我们每一步要做什么
  setTimeout(() => {
    if (string[n] === "\n") {
      string2 += "<br>";
    } else if (string[n] === " ") {
      string2 += "&nbsp;"; // &nbsp;是html的空格。
    }
    string2 += string[n];
    // string2 += string[n] === "\n" ? "<br>" : string[n];
    // string[n] === "\n" ? (string2 += "<br>") : (string2 += string[n]);
    //如果是回车，就不照搬
    //如果不是回车就照搬
    html.innerHTML = string2;
    style.innerHTML = string.substring(0, n);
    //让html的内容同时编辑到css里面
    window.scrollTo(0, 99999);
    html.scrollTo(0, 99999);
    if (n < string.length - 1) {
      // 如果n不是最后一个，就继续
      n += 1;
      step(); //重复调用step
    }
  }, 50);
};

step(); //调用step
