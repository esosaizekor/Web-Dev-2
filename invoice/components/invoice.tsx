// Author : Esosa Izekor
// Date : 05/10/2025
// version : 0.1
// Early Stage
// Written in React
// email : esosa.izekor@outlook.com
//         howtoweargreen@gmail.com

import customer from "./customer";

class Invoice {
   
    #invoices = []; //  our invoices
    #customer : customer
    #companyname;
    #address;
    #city;
    #postalcode : string;
    #country;
    #phone;
    #website;
    #vatnumber;
    #invoicenumber;
    #invoicedate;
    #duedate;
    #billto;
    #shipto;
    #itemdescription : string[];
    #quantity : number[];
    #price : string[];
    #taxrate;
    #notes;
    #terms;
         
    constructor() {
        this.#companyname = "";
        this.#address = "";
        this.#city = "";
        this.#postalcode = "";
        this.#country = "";
        this.#phone = "";
        this.#website = "";
        this.#vatnumber = "";
        this.#invoicenumber = "";
        this.#invoicedate = "";
        this.#duedate = "";
        this.#billto = "";
        this.#shipto = "";
        this.#itemdescription = [];
        this.#quantity = [];
        this.#price = [];
        this.#taxrate = "";
        this.#notes = "";
        this.#terms = "";   
        this.#customer = new customer("","");        
    }

    set companyname(companyname)
    {
        if (companyname) 
        {
            this.#companyname = companyname;                      
        }
        else
        {
            throw new Error("Please specify a companyname to make use of the invoice!");
        }

        this.#companyname = companyname;
    }

    get companyname()
    {
        return this.#companyname;
    }

    set address(address)
    {
        if (address) 
        {
            this.#address = address;                      
        }
        else
        {
            throw new Error("Please specify an address to make use of the invoice!");
        }
    }

    get address()
    {
        return this.#address;
    }

    set city(city)
    {
        if (city) 
        {
            this.#city = city;        
        }
        else
        {
            throw new Error("Please specify a city to make use of the invoice!");
        }

    }

    get city()
    {
        return this.#city;
    }

    set postalcode(postalcode : string)
    {
        if (postalcode) 
        {
            this.#postalcode = postalcode;        
        }
        else
        {
            throw new Error("Please specify a unique postalcode to make use of the invoice!");
        }

    }

    get postcalcode()
    {
        return this.#postalcode;
    }

    set country(country)
    {
        if (country) 
        {
            this.#country = country;        
        }
        else
        {
            throw new Error("Please specify a country to make use of the invoice!");
        }

    }

    get country()
    {
        return this.#country;
    }
        
    set phone(phone)
    {
        if (phone) 
        {
            this.#phone = phone;        
        }
        else
        {
            throw new Error("Please specify a phonenumber to make use of the invoice!");
        }

    }

    get phone()
    {
        return this.#phone;
    }
      
    set website(website)
    {
        if (website) 
        {
            this.#website = website;        
        }
        else
        {
            throw new Error("Please specify a webpage to make use of the invoice!");
        }

    }

    get website()
    {
        return this.#website;
    }
    
    set vatnumber(vatnumber)
    {
        if (vatnumber) 
        {
            this.#vatnumber = vatnumber;        
        }
        else
        {
            throw new Error("Please specify a vatnumber to make use of the invoice!");
        }

    }
    
    get vatnumber()
    {
        return this.#vatnumber;
    }

    set invoicenumber(invoicenumber)
    {
        if (invoicenumber) 
        {
            this.#invoicenumber = invoicenumber;        
        }
        else
        {
            throw new Error("Please specify an invoice number to make use of the invoice!");
        }

    }

    get invoicenumber()
    {
        return this.#invoicenumber;
    }
    
    set invoicedate(invoicedate)
    {
        if (invoicedate) 
        {
            this.#invoicedate = invoicedate;        
        }
        else
        {
            throw new Error("Please specify an invoice date to make use of the invoice!");
        }

    }

    get invoicedate()
    {
        return this.#invoicedate;
    }
        
    set duedate(duedate)
    {
        if (duedate) 
        {
            this.#duedate = duedate;        
        }
        else
        {
            throw new Error("Please specify a unique due date to make use of the invoice!");
        }

    }
        
    get duedate()
    {
        return this.#duedate;
    }

    set billto(billto)
    {
        if (billto) 
        {
            this.#billto = billto;        
        }
        else
        {
            throw new Error("Please specify a uuique billling address to make use of the invoice!");
        }

    }
        
    get billto()
    {
        return this.#billto;
    }

    set shipto(shipto)
    {
        if (shipto) 
        {
            this.#shipto = shipto;        
        }
        else
        {
            throw new Error("Please specify a unique shipping address to make use of the invoice!");
        }

    }

    get shipto()
    {
        return this.#shipto;
    }
        
    set itemdescription(itemdescription)
    {
        if (itemdescription) 
        {
            this.#itemdescription = itemdescription;        
        }
        else
        {
            throw new Error("Please specify an item description to make use of the invoice!");
        }

    }

    get itemdescription()
    {
        return this.#itemdescription;
    }
        
    set quantity(quantity)
    {
        if (quantity) 
        {
            this.#quantity = quantity;        
        }
        else
        {
            throw new Error("Please specify the quantity that is necessary to make use of the invoice!");
        }

    }

    get quantity()
    {
        return this.#quantity;
    }
        
    set price(price)
    {
        if (price) 
        {
            this.#price = price;        
        }
        else
        {
            throw new Error("Please specify the price to make use of the invoice!");
        }

    }
    get price()
    {
        return this.#price;
    } 

    set taxrate(taxrate)
    {
        if (taxrate) 
        {
            this.#taxrate = taxrate;        
        }
        else
        {
            throw new Error("Please specify the tax rate to make use of the invoice!");
        }

    }
    
    get taxrate()
    {
        return this.#taxrate;
    }

    set notes(notes)
    {
        if (notes) 
        {
            this.#notes = notes;        
        }
        else
        {
            throw new Error("Please specify a note to make use of the invoice!");
        }

    }
    
    get notes()
    {
        return this.#notes;
    }
    
    set terms(terms)
    {
        if (terms) 
        {
            this.#terms = terms;        
        }
        else
        {
            throw new Error("Please specify the terms to make use of the invoice!");
        }

    }
        
    get terms()
    {
        return this.#terms;
    }

    toJSON() {

        return {      
        companyname : this.#companyname,
        address : this.#address,
        city : this.#city,
        postalcode : this.#postalcode,
        country : this.#country,
        phone : this.#phone,
        website : this.#website,
        vatnumber : this.#vatnumber,
        invoicenumber : this.#invoicenumber,
        invoicedate : this.invoicedate,
        duedate : this.#duedate,
        billto : this.#billto,
        shipto : this.#shipto,
        itemdescription : this.#itemdescription,
        quantity : this.#quantity,
        price : this.price,
        taxrate : this.taxrate,
        notes : this.notes,
        terms : this.terms
        };

    }

    totalCost(price : string[]) : number
    {
        let cost = 0;


        price.forEach(function(value,index) {            
            
            cost += Number.parseInt(value.replace("\"",''));
                     
        });

        

        return cost;
    }

    set customer(c : customer)
    {
        if (c) 
        {
            this.#customer = c;        
        }
        else
        {
            throw new Error("Please specify a customer to make use of the invoice!");
        }
    }
    
    get customer()
    {
        return this.#customer;
    }
}

export default Invoice;