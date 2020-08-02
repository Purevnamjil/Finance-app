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
    },
    addListItem: function(item, type){
      // Орлого зарлагын элементийг агуулсан ХТМЛ-ыг бэлтгэнэ
      var html,list;

      if(type === "inc"){
        list = '.income__list'                       
        html = '<div class="item clearfix" id="income-%id%"> <div class="item__description">%description%</div> <div class="right clearfix"><div class="item__value">+ %val%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>'
      }else{
        list = '.expense__list'
        html = '<div class="item clearfix" id="expense-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">- %val%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>'
      }
      // Тэр ХТМЛ дотроо орлого зарлагын утгуудыг реплэйс ашиглаж өөрчилж өгнө.
      html = html.replace('%id%', item.id);
      html = html.replace('%description%', item.description);
      html = html.replace('%val%', item.value);

      // Бэлтгэсэн ХТМЛ-ээ ДОМ-руу хийнэ
      document.querySelector(list).insertAdjacentHTML("beforeend", html);
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
    items:{
      inc: [],
      exp: []
    },
    totals:{
      inc: 0,
      exp: 0
    }
  };

  return{

    

    addItem: function(type, desc, val){

      var item, id;

      if(data.items[type].length === 0 ){
       id = 1;
      } else{
       id = (data.items[type].length - 1) + 1;
      }

      if(type === "inc") {
        item = new Income( id, desc, val);
      } else{
        item = new Expense(id, desc, val)
      }

      data.items[type].push(item);

      return item;
    },

    data: function(){
      return data;
    }
  };
  



})();

// 3.АПП КОНТРОЛЛЕР
var appController = (function(uiController, financeController){

  
  
  var ctrlAddItem = function(){
    // 1.Оруулах өгөгдөлийг дэлгэцээс олж авна
    var input = uiController.getInput();

    // 2.Олж авсан өгөгдлүүдээ санхүүгийн контроллерт дамжуулж тэнд хадгална.
    var item = financeController.addItem(input.type, input.description, input.value);

    // 3.Олж авсан өгөгдлүүдийг веб дээр үзүүлэх.
    uiController.addListItem(item, input.type);
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