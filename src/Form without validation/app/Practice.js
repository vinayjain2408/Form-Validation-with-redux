console.log('first')

async function handleCheck(){
    console.log('forth')
    await sendMessage()
    console.log('third')
}

function sendMessage(text) {
    return new Promise(resolve => {
      setTimeout(()=>{
        console.log('second')
        resolve()
        console.log('fifth')
      }, 2000);
    });
  }
  
  handleCheck()
// function sendMessage(text) {
//     return new Promise((  resolve , reject) => {
//        setTimeout(() =>{
//         if(resolve){
//             console.log('')
//             resolve()
//         }
//         if(reject){
//             console.log(reject)
//         }
//     }, 1000);
//     });
//   }





