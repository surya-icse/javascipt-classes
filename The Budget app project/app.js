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
            //return the new element
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
        incomeContainer:'.income__list',
        expensesContainer:'.expenses__list',
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
            // Create HTML string with placeholder text 
            var html,newHtml,element;
            if(type==='inc'){
                element=DOMstrings.incomeContainer;
                html='<div class="item clearfix" id="income-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            }
            else if(type==='exp'){
                element=DOMstrings.expensesContainer;
                html='<div class="item clearfix" id="expense-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            }

            // Replace  placeholder text with some actual data
            newHtml = html.replace('%id%',obj.id);
            newHtml = newHtml.replace('%description%',obj.description);
            newHtml = newHtml.replace('%value%',obj.value);

            //insert HTML into DOM
            document.querySelector(element).insertAdjacentHTML('beforeend',newHtml)
        },
        clearFields:function(){
            var fields,fieldsArray;
            fields = document.querySelectorAll(DOMstrings.inputDescription +','+DOMstrings.inputValue);
            fieldsArray = Array.prototype.slice.call(fields);

            fieldsArray.forEach(function(current,index,array){
                current.value="";
            })
            fieldsArray[0].focus();
        }
        ,
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
        UICtrl.addListItem(newItem,input.type);

        //4-clear the fields
        UICtrl.clearFields();
        //5- Calculate the Budget

        
        //6- Display the budget on the UI

    };

    return {
        init:function(){
            console.log('Application Started');
            setupEventListener();
        },
    };

})(budgetController, UIController);

controller.init();