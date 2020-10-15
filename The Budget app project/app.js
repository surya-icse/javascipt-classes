// budget Controller Module
var budgetController = (function () {
    
    var Expense = function(id,description, value){
        this.id=id;
        this.description=description;
        this.value=value;
    };

    var Income = function(id,description, value){
        this.id=id;
        this.description=description;
        this.value=value;
    };

})();


/////////////////////////////////////////////////////////////////////////////////////////////////////

// UI Controller Module
var UIController = (function () {
    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputButton: '.add__btn',
    };
    return {
        getinput: function () {
            return {
                type: document.querySelector(DOMstrings.inputType).value, // will be either 'inc' or 'exp'
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: document.querySelector(DOMstrings.inputValue).value
            };
        },
        getDOMstrings: function () {
            return DOMstrings
        }
    };
})();


////////////////////////////////////////////////////////////////////////////////////////////////////////


// full app Controller Module
var controller = (function (budgetCtrl, UICtrl) {

    var setupEventListener = function () {

        var DOM = UICtrl.getDOMstrings();
        document.querySelector(DOM.inputButton).addEventListener('click', controlAddItem);
        document.addEventListener('keypress', function (event) {
            if (event.keyCode === 13 || event.which === 13) {
                controlAddItem();
            }
        });
    };

    var controlAddItem = function () {

        //1- Get the field input data
        var input = UICtrl.getinput();
        //2- Add Item to budget controller

        //3- add item to the UI

        //4- Calculate the Budget

        //5- Display the budget on the UI

    };

    return {
        init:function(){
            console.log('Application Started');
            setupEventListener();
        },
    };

})(budgetController, UIController);

controller.init();