

var i1 = new Income(1, 'Salary', 250000);
var i2 = new Income(2, 'Bet awards', 25000000);



incomes.push(i1);
incomes.push(i2);

console.log(incomes)







// 1.ДЭЛГЭЦТЭЙ АЖИЛЛАХ КОНТРОЛЛЕР
var uiController = (function(){
  // DOM class variables
  var DOMstrings = {
    inputType: ".add__type",
    inputDescription: ".add__description",
    inputValue: ".add__value",
    addBtn: ".add__btn"
  }

  return {
    getInput: function() {
      return {
        type: document.querySelector(DOMstrings.inputType).value,
        description: document.querySelector(DOMstrings.inputDescription).value,
        value: document.querySelector(DOMstrings.inputValue).value
      };
    },
    getDomStrings: function(){
      return DOMstrings;
    }
  }
})();

// 2.САНХҮҮГИЙН КОНТРОЛЛЕР
var financeController = (function(){
  var Income = function(id, description, value){
    this.id = id;
    this.description = description;
    this.value = value;
  };
  
  var Expense = function(id, description, value){
    this.id = id;
    this.description = description;
    this.value = value;
  };
  
  var data = {
    allItems:{
      inc: [],
      exp: []
    },
    totals:{
      inc: 0,
      exp: 0
    }
  }


})();

// 3.АПП КОНТРОЛЛЕР
var appController = (function(uiController, fnController){

  
  
  var ctrlAddItem = function(){
    // 1.Оруулах өгөгдөлийг дэлгэцээс олж авна
    console.log(uiController.getInput())
    // 2.Олж авсан өгөгдлүүдээ санхүүгийн контроллерт дамжуулж тэнд хадгална.

    // 3.Олж авсан өгөгдлүүдийг веб дээр үзүүлэх.

    // 4.Төсвийг тооцоолно. 

    // 5.Эцсийн үлдэгдэл, тооцоог дэлгэцэнд гаргана.
  };

  

  var setupEventListeners = function() {
    var DOM = uiController.getDomStrings();
    
    document.querySelector(DOM.addBtn).addEventListener("click", function() {
      ctrlAddItem();
    });
  
    document.addEventListener("keypress", function(event){
      if(event.keyCode === 13) {
        ctrlAddItem();
      }
    });
  }

  return {
    init: function(){
      console.log("App started");
      setupEventListeners();

    }
  }
})(uiController, financeController);

appController.init();