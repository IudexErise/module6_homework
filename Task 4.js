// Task 6.4

function inter(a, b) {
  let c = a;
  let intervalId = setInterval(function() {
      console.log(c);
      if (c == b) {
          clearInterval (intervalId);
      }
      c++;
  }, 1000);
}
inter(5, 15);