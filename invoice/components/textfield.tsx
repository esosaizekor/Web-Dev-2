// Author : Esosa Izekor
// Date : 05/10/2025
// version : 0.1
// Early Stage
// Written in React
// email : esosa.izekor@outlook.com
//         howtoweargreen@gmail.com

"use strict";
import { StyleSheet } from '@react-pdf/renderer';

function Fieldfill(props : any) {
  // Create styles
  const style = StyleSheet.create(
  {
    input : {
      fontcolor: 'black',
      fontSize: 12
    }  
  });

  
  function handleEvent(v : string)
  {
    if(props.name === "companyname")       
    {      
      document.getElementById('companyname')?.removeAttribute("readonly");   
      props.invoice.companyname =  v;     
    }
    
    if(props.name === "address")       
    {
      document.getElementById('address')?.removeAttribute("readonly");
      props.invoice.address = v;          
    }

    if(props.name === "city")       
    {
      document.getElementById('city')?.removeAttribute("readonly");
      props.invoice.city = v;
    }

    if(props.name === "postalcode")       
    {
      document.getElementById('postalcode')?.removeAttribute("readonly");
      props.invoice.postalcode = v;
    }

    if(props.name === "country")       
    {
      document.getElementById('country')?.removeAttribute("readonly");
      props.invoice.country = v;
    }
  
    if(props.name === "phone")       
    {
      document.getElementById('phone')?.removeAttribute("readonly");
      props.invoice.phone = v;
    }
  
    if(props.name === "website")       
    {
      document.getElementById('website')?.removeAttribute("readonly");
      props.invoice.website = v;
    }
  
    if(props.name === "vatnumber")       
    {
      document.getElementById('vatnumber')?.removeAttribute("readonly");
      props.invoice.vatnumber = v;
    }

    if(props.name === "invoicenumber")       
    {
      document.getElementById('invoicenumber')?.removeAttribute("readonly");
      props.invoice.invoicenumber = v;    
    }

    if(props.name === "invoicedate")       
    {
      document.getElementById('invoicedate')?.removeAttribute("readonly");
      props.invoice.invoicedate = v;    
    }

    if(props.name === "duedate")       
    {
      document.getElementById('duedate')?.removeAttribute("readonly");
      props.invoice.duedate = v;
    }
    
    if(props.name === "billto")       
    {
      document.getElementById('billto')?.removeAttribute("readonly");      
      props.invoice.billto = v;
    }

    if(props.name === "shipto")       
    {
      document.getElementById('shipto')?.removeAttribute("readonly");
      props.invoice.shipto = v;
    }

    if(props.name === "itemdescription")       
  {    
      props.invoice.itemdescription = v;
    }
      
    if(props.name === "quantity")       
    {
      props.invoice.quantity = v;
    }

    if(props.name === "price")       
    {
      props.invoice.price = v;
    }
    
   if(props.name === "taxrate")       
    {
      document.getElementById('taxrate')?.removeAttribute("readonly");
      props.invoice.taxrate = v;
    }

   if(props.name === "notes")       
    {
      document.getElementById('notes')?.removeAttribute("readonly");
      props.invoice.notes = v;
    }

    if(props.name === "terms")       
    {
      document.getElementById('terms')?.removeAttribute("readonly");
      props.invoice.terms = v;    
    }

    if(props.name === "item")       
    {
      props.items.itemdescription = v;    
    }

    if(props.name === "itemprice")       
    {
      props.items.price = v;    
    }
    

    if(props.name === "firstname")       
    {
      props.customers.firstname = v;    
    }    

    if(props.name === "lastname")       
    {
      props.customers.lastname = v;    
    }    

  }

    if(props.isarea === "true")
    {
      return (
      <textarea style={style.input} name={props.name} id={props.id}  placeholder={String(props.inputvalue)} rows = {Number(5)} cols = {Number(30)} onChange={e => handleEvent(e.target.value)}></textarea>    
      );

    }

    else
    {

      return (
      <input type="text" style={style.input} name={props.name} id={props.id}  placeholder={props.inputvalue} onChange={e => handleEvent(e.target.value)}></input>    
      );
    }

}

export default Fieldfill;
