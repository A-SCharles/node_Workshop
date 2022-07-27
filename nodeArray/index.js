names = ["Delo", "Patrick", "Samuel", "David", "Pierrot"];
cnt = -1
let pos = setInterval(() => {
    cnt ++
    if (cnt >= names.length -1){
        clearInterval(pos)
    }
  console.log(names[cnt]);
}, 500);

