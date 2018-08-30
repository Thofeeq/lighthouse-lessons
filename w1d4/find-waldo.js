i = 0
function findWaldo(arr, found){
   arr.forEach(element => {
       {
       var a = element.indexOf("Waldo")
       if (a === 0){
           c = i
           found()
       }
   } i++
});

}
function actionWhenFound() {
   console.log('"Found Waldo at index ' + c + '!"' );
 }

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);