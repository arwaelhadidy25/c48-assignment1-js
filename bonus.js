var createCounter = function(init) {
    let currentValue=init;
    
        function increment(){
           
           return ++currentValue
        }
         function decrement(){
           return --currentValue
        }
         function reset(){
           currentValue =init
           return currentValue
        }
        return {increment,reset,decrement}
    }
;
const counter = createCounter(5);
console.log(counter.increment()); //6
console.log(counter.reset());     //5
console.log(counter.decrement()); //4