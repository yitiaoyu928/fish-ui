export const Debounce = (fn: Function, interval: 500) => {
  let timer: any = null;
  return function () {
    console.log(timer);
    clearTimeout(timer);
    timer = null;
    timer = setTimeout(() => {
      fn && fn();
      clearTimeout(timer);
      timer = null;
    }, interval);
  };
};
