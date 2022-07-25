// console.log("Wassup")
//  Sends command after 3 seconds
// setTimeout(function(){ console.log("3 seconds have passed")
// }, 3000);

//  loops command after 2 seconds
/* let time = 0
setInterval(function(){
    time += 2; 
    console.log
    (time + " seconds have passed")
}, 2000);
*/

// clear interval
/* let time = 0
let timer = setInterval(function(){ 
    time += 3
    console.log(time + " seconds have passed");
if(time > 9){
    clearInterval(timer)
}
}, 3000);
*/
//  directory name
// console.log(__dirname)
//  file name
// console.log(__filename)

function addition(num1, num2) {
  return num1 + num2;
}

module.exports = addition;
