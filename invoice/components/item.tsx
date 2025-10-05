// Author : Esosa Izekor
// Date : 05/10/2025
// version : 0.1
// Early Stage
// Written in React
// email : esosa.izekor@outlook.com
//         howtoweargreen@gmail.com

class item {

    #itemdescription
    #price
    
    constructor(itemdescription : string)
    {
      this.#itemdescription = itemdescription;
      this.#price = 0;
    }

    set itemdescription(itemdescription : string)
    {
        if (itemdescription) 
        {
            this.#itemdescription = itemdescription;        
        }
        else
        {
            throw new Error("Please specify an item to make use of the invoice!");
        }
    }

    get itemdescription()
    {
        return this.#itemdescription;
    }

    set price(price)
    {
        if (price) 
        {
            this.#price = price;        
        }
        else
        {
            throw new Error("Please specify a unique price to make use of the invoice!");
        }

    }

    get price()
    {
        return this.#price;
    }

    toJSON() {

        return {      
        itemdescription : [""],
        price : [0]
        }
    }



};

export default item;