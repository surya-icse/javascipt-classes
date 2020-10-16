// budget Controller Module
var budgetController = (function () {
    
    var Expense = function(id,description,value){
        this.id=id;
        this.description=description;
        this.value=value;
    };
    
    var Income = function(id,description,value){
        this.id=id;
        this.description=description;
        this.value=value;
    };
    
    var data ={
        allItems:{
            exp:[],
            inc:[]
        },
        totals:{
            exp:0,
            inc:0
        }
    };

    return {
        addItem:function(type,des,val){
            var newItem,ID;
            //[ 0 , 1 , 2 ] next will me 3
            //ID = last ID + 1
            
            //create new ID
            if(data.allItems[type].length>0){
                ID = data.allItems[type][data.allItems[type].length-1].id+1;
            }
            else{
                ID=0;
            }
            // Create new item based on 'inc' or 'exp' type

            if (type==='exp'){
                newItem = new Expense(ID,des,val);
            }
            else if(type==='inc'){
                newItem = new Income(ID,des,val);
            }
            //push it into data structure
            data.allItems[type].push(newItem);
            //return the bew element
            return newItem;
        },

        testings : function(){
            console.log(data);
        }
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
        addListItem:function(obj,type){

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

        var input,newItem;
        //1- Get the field input data
        input = UICtrl.getinput();
        
        //2- Add Item to budget controller
        newItem = budgetCtrl.addItem(input.type,input.description,input.value);
        
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