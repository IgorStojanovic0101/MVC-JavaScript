(function() {
    
    function Cat(naziv,click)
{
    this.naziv=naziv;
    
    
    this.click=click;
    
    
 
}
    
    
    var data = {
       lastId:0,
       names:"default",
        pizzas: []
    };
    

    var octopus = {
        setId:function(id)
        {
          data.lastId=id;  
        },
        getId: function(id)
        {
            
           
            return id;
        },
        getName: function(id)
        {
          var visiblePizzas = data.pizzas[this.getId(id)].name;
          
            return visiblePizzas;
        },
       
        
        addPizza: function(ime) {
           
          data.pizzas[data.lastId]=({
               name:ime,
                visible: true
            });
          
            data.lastId++;
            view.render();
           
        },

        removePizza: function(pizza) {
            var clickedPizza = data.pizzas[ pizza.id - 1 ];
            clickedPizza.visible = false;
            view.render();
        },

        getPizzas: function() {
           
            return data.pizzas;
        },

        init: function() {
           
            view.init();
            
        }
    };


    var view = {
        init: function() {
            var host=document.getElementById("main");
            var name=document.createElement("input");
            name.id="z";
           
             host.appendChild(name);
           
            
            var button=document.createElement("button");
            host.appendChild(button);
            button.innerHTML="Dodaj pizzu";
            button.id="button";
            button.ref=this;
            button.onclick=function() {
                var ime=document.getElementById("z").value;
                
                octopus.addPizza(ime);
               
            };
            
            
            // grab elements and html for using in the render function
            this.pizzaList = document.createElement("div");
           this.pizzaList.className="pizzaList";
           host.appendChild(this.pizzaList);
           
   

            this.render();
        },

        render: function() {
            // Cache vars for use in forEach() callback (performance)
            var pizzaList = this.pizzaList;
        
            
            // Clear and render
            pizzaList.innerHTML='';
             var niz= octopus.getPizzas();
             for (var i=0;i<niz.length;i++)
             {
                 var pizzaObj=document.createElement("div");
                 pizzaObj.className="pizza";
                
                 pizzaObj.innerHTML=octopus.getName(i)+"        id:"+octopus.getId(i);
                
                
                pizzaList.appendChild(pizzaObj);
             }
                // Replace template markers with data
               
            
        }
    };

    octopus.init();
}());
