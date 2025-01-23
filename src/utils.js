export async function wait(time, fail) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (fail) {
        rej("fail");
      } else {
        res("ok");
      }
    }, time);
  });
}
