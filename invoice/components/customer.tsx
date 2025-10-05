// Author : Esosa Izekor
// Date : 05/10/2025
// version : 0.1
// Early Stage
// Written in React
// email : esosa.izekor@outlook.com
//         howtoweargreen@gmail.com

class customer {

    #firstname : string
    #lastname : string
    #date
    
    constructor(firstname : string, lastname : string)
    {
      this.#firstname = firstname;
      this.#lastname = lastname;
      this.#date = new Date().toLocaleDateString();
    }

    set firstname(firstname : string)
    {
        if (firstname) 
        {
            this.#firstname = firstname;        
        }
    }

    get firstname()
    {
        return this.#firstname;
    }

    set lastname(lastname)
    {
        if (lastname) 
        {
            this.#lastname = lastname;        
        }

    }

    get lastname()
    {
        return this.#lastname;
    }

    get date()
    {
       return this.#date;
    }

    toJSON() {

        return {      
        fullname : String(this.#firstname + " " + this.#lastname),
        date : this.#date
        }
    }



};

export default customer;