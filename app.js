// Дэлгэцтэй ажиллах контроллер
var uiController = (function(){
  var x = 100;

  function add(y){
    return x+y;
  }

  return {
    publicadd: function(a) {
      b = add(a);
      console.log('Боловсруулсан утга нь:' + b)
    }
  }
})();

// санхүүгийн контроллер
var financeController = (function(){
  
})();

// апп контроллер
var appController = (function(uiController, fnController){
  
  var ctrlAddItem = function(){
    // 1.Оруулах өгөгдөлийг дэлгэцээс олж авна
    console.log("Ugugdul avav")
    // 2.Олж авсан өгөгдлүүдээ санхүүгийн контроллерт дамжуулж тэнд хадгална.

    // 3.Олж авсан өгөгдлүүдийг веб дээр үзүүлэх.

    // 4.Төсвийг тооцоолно. 

    // 5.Эцсийн үлдэгдэл, тооцоог дэлгэцэнд гаргана.
  };

  document.querySelector('.add__btn').addEventListener("click", function(){
    ctrlAddItem();
  });

  document.addEventListener("keypress", function(event){
    if(event.keyCode === 13|| event.which === 13) {
      ctrlAddItem();
    }
  })
})(uiController, financeController);

