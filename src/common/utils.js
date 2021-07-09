export function debounce(func, delay) {
    //func是传递进来的函数，time是要等待多久 func是我们要消除抖动的函数
    let timer = null;
    //记录有没有定时器
    return function (...args) {
      //...表示不止传入一个参数
      //返回一个函数，
      if (timer) {
        timer = clearTimeout();
      } else {
        timer = setTimeout(() => {
          func.apply(this, args);
        }, delay);
      }
    };
  }
  //时间转换函数
  export function formatDate(date, fmt) {
    if (/(y+)/.test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
    }
    let o = {
      'M+': date.getMonth() + 1,
      'd+': date.getDate(),
      'h+': date.getHours(),
      'm+': date.getMinutes(),
      's+': date.getSeconds()
    };
    for (let k in o) {
      if (new RegExp(`(${k})`).test(fmt)) {
        let str = o[k] + '';
        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
      }
    }
    return fmt;
  }
  function padLeftZero(str) {
    return ('00' + str).substr(str.length);  //用0补齐位数 
  }
  
  