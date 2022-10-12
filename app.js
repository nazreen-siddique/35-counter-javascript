function getElement(selection) {
  const element = document.querySelector(selection);
  if (element) {
    return element;
  }
  throw new Error(`please check ${selection} selector,no such element exist`);
}
function Counter(element, value) {
  this.element = element;
  this.value = value;
  this.resetBtn = element.querySelector(".reset");
  this.increaseBtn = element.querySelector(".increase");
  this.decreaseBtn = element.querySelector(".decrease");
  this.valueDom = element.querySelector(".value");

  this.valueDom.textContent = this.value;
  
//   pointing function to counter
this.increase = this.increase.bind(this);
this.decrease = this.decrease.bind(this);
this.reset = this.reset.bind(this);
// event listener
this.increaseBtn.addEventListener("click" , this.increase);
this.decreaseBtn.addEventListener("click" , this.decrease);
this.resetBtn.addEventListener("click" , this.reset);
}

Counter.prototype.increase = function(){
    // console.log(this);
    this.value++;
    this.valueDom.textContent = this.value;
}
Counter.prototype.decrease = function(){
    this.value--;
    this.valueDom.textContent = this.value;
}
Counter.prototype.reset = function(){
    this.value=0;
    this.valueDom.textContent = this.value;
}
const firstCounter = new Counter(getElement(".first-counter"), 100);
const secondCounter = new Counter(getElement(".second-counter"), 200);