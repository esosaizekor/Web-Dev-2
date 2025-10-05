// Author : Esosa Izekor
// Date : 05/10/2025
// version : 0.1
// Early Stage
// Written in React
// email : esosa.izekor@outlook.com
//         howtoweargreen@gmail.com
// github : Esosa Izekor https://github.com/esosaizekor

"use strict";

import { createRoot, Root } from 'react-dom/client';
import Fieldfill from "../components/textfield";
import React from 'react';
import Invoice from "../components/invoice";
import { PDFViewer } from '@react-pdf/renderer';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import { PopulateItems } from './items';


// Create styles
const styles = StyleSheet.create(
{
    page: {
      flexDirection: 'column',
      backgroundColor: '#E4E4E4',
      fontSize: 9,
      fontfamily: 'Lucida Console'
    },
    section: {
      margin: 10,
      padding: 10,
      flexGrow: 1
    },
    sectionA: {
      margin: 10,
      padding: 10,
      height: 120,
      width: '95%',
      flexDirection: 'row',      
    },
    persona : {
      margin: 0,
      padding: 10,
      fontSize: 9,
      fontWeight: 'bold',      
      width:'66%',
      fontcolor: 'black'
    },
    invoice : {
      margin: 0,
      padding: 10,
      fontSize: 16,
      fontWeight: 'bold',
      width:'34%',
      fontcolor: 'black',
      textAlign: 'right'
    },    
    sectionB: {
      margin: 10,
      padding: 10,
      height: 100,
      width: '95%',
      flexDirection: 'row'
    },
    billto : {
      margin: 0,
      padding: 0,
      fontSize: 9,
      fontWeight: 'bold',
      width:'30%'
    },
    shipto : {
      margin: -10,
      padding: 10,
      fontSize: 9,
      fontWeight: 'bold',
      width:'40%'
    },    
    invnr : {
      margin: -10,
      padding: 10,
      fontSize: 9,
      fontWeight: 'bold',
      width:'30%'
    },    
    sectionC: {
      margin: 10,
      padding: 10,
      width: '95%',
      height: '2%',
      flexGrow: 1,
      flexDirection: 'row',
      fontWeight: 'bold',
      fontSize: 13,
      borderTop: '1px solid black',
      borderBottom: '1px solid black'
    },
    spacer: { 
      fontcolor: 'black',
      textAlign: 'right',      
      width: '100%'
      },
    sectionD1: {
      margin: 10,
      padding: 10,
      width: '95%',      
      height: '100px',
      flexGrow: 1,
      flexDirection: 'column',
    },
    sectionD: {
      margin: 10,
      padding: 10,
      width: '95%',      
      flexGrow: 1,
      flexDirection: 'row',
      fontSize  : 10
    },  
    spacec: { 
      fontcolor: 'black',
      textAlign: 'right',      
      width: '100%',
      },
    sectionE: {
      margin: 10,
      padding: 10,
      height: 130,
      width: '95%',
      flexGrow: 1,
      textAlign: 'center'
    },
  }
);

// Create Document Component
const MyDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>Section #1 Section #1 Section #1 Section #1 Section #1</Text>
      </View>
      <View style={styles.section}>
        <Text>Section #2</Text>
      </View>
    </Page>
  </Document>
  );


const App = () => (
  <PDFViewer width="100%" height="1000">
    <MyDocument />
  </PDFViewer>
);


function DrawPDF(FromApp : React.ReactNode) 
{
    let rootpane = null;
    
    try {

      const domNode = document.createElement('div');
      domNode.id = 'root';
      document.body.appendChild(domNode);
      
      const root = createRoot(domNode); // create a root in it
      
      
      if(FromApp != null) 
      {
        root.render(FromApp);
      }
      else
      {
        root.render(<App />);
      }

      rootpane = root;
      
      } 
      catch (e) {
        console.error('Error rendering PDFViewer:', e);
      }

      return rootpane;

}

function constructPopOutWindow(root : Root | null, identifier : HTMLElement | null) 
{
    const windowFeatures = "left=100,top=100,width=320,height=320";
    
    const handle = window.open(
      "about:blank",
      "Navigate",
      windowFeatures,
    );

    if (!handle) {
      // The window wasn't allowed to open
      // This is likely caused by built-in popup blockers.
      // …
      alert("Popup blocked. Please allow popups for this website.");
    } 
    else {
      // The window was allowed to open
      if (root) {
        handle.document.title = "Invoice PDF";
        const domButton1 = handle.document.createElement('button');
        domButton1.id = 'editPDF';
        domButton1.innerHTML = 'Edit Invoice';
        domButton1.onclick = function() {
          
          alert('Please fill all fields of the Invoice - Not implemented yet');
          root.unmount();
          
          handle.document.body.removeChild(domButton1);
          identifier?.remove();
          handle.close();
        };

        handle.document.body.appendChild(domButton1);      
  
        
      } else {
        handle.close();
        alert("Failed to Interact with PDF content.");
      }
    }

}


export default function invoices() {

  const invoice = new Invoice();

  function UpdateQuantity(e : string)
  {    
    const itemdescription = e.split('|');

    alert('Amount of Quantity (' + itemdescription[0] + ') : ' + invoice.itemdescription.filter(filter=> filter ===  String(itemdescription[0])).length);
  }

  function Inform(e : string)
  {    
      const log = e.split('|');
     
      const firstname = log[0];
      const lastname = log[1];
      
      invoice.customer.firstname = firstname;
      invoice.customer.lastname = lastname;

      alert('Customer selected : ' + invoice.customer.firstname + ' ' + invoice.customer.lastname);
  }

  function Updateform(e : string)
  {    
      const onsel = document.getElementById('items');   
      const log = e.split('|');
     

      const itemdescription = log[0];
      const price = log[1];

      invoice.itemdescription.push(itemdescription);
      invoice.price.push(price);            

      if(onsel)
      {    
        const onselItems = document.getElementById('itemdescription');   
        const c = document.createElement("option");  
        // Create the text node for the option
        const optionText = document.createTextNode(e);
        // Append the text node to the option element
        c.appendChild(optionText);

        // Set the value attribute of the option
        
        c.setAttribute('value',e);

        // Append the new option to the select element
        onselItems?.appendChild(c);                  
      }
      
      

  }

  function makePDF() 
  {
      



    // Avoid doubles
    const avoiddoublesitems = new Set();
    const avoiddoublesprice = [""];
    const items = invoice.itemdescription;
    const newItems = [""];

    avoiddoublesitems.clear();
    avoiddoublesprice.splice(0);

    items.forEach (function(value, key) {
      
      avoiddoublesitems.add(value);      
      avoiddoublesprice.push(String(invoice.price.at(key)));               
    });
        
    newItems.splice(0);
    invoice.quantity.splice(0);
    
    

    avoiddoublesitems.forEach (function(value, key) {
      
     invoice.quantity.push(invoice.itemdescription.filter(filter=> filter === value).length);
     newItems.push(String(value));
     
    });
     
    const amountofpages = Number(invoice.quantity.length / 5);
    const pages = [0];
    let IsPageSetup = false;
    pages.splice(0);


    if(amountofpages > 0)
    {      
      for(let r=0;r < amountofpages;r++)
      {
        pages.push(r);
      }

      IsPageSetup = true;
    }
    else{
      pages.push(0);
    }


    const data = {itemdescription : newItems, price : avoiddoublesprice, quantity : invoice.quantity, pages : pages};    
    
    
    
    const UpdateDocument = () => (
    <Document>
     
      {data.pages.map((kpair, index) => ( 
      <Page  key={kpair} size="A4" style={styles.page}>
        <View style={styles.sectionA}>
          <Text style={styles.persona}>                          
            
                                    
          {   invoice.customer.firstname + " " + 
              invoice.customer.lastname + " \n\n" + 
              invoice.address + "\n" +
              invoice.city + "\n" +
              invoice.postalcode + "\n" +
              invoice.country + "\n" 
          }
          
          {"Phone : " + invoice.phone + "\n" }
          
          {"Website : " + invoice.website + "\n" }
          
          </Text>
          <Text style={styles.invoice}>                          
            {"INVOICE"}
          </Text>
        </View>
        <View style={styles.sectionB}>
          <Text style={styles.billto}>
          
            
            Bill to: 
            
            {"\n" + invoice.billto + "\n" }     
          </Text>
          <Text style={styles.shipto}>
            
            Ship to: 
            
            {"\n" + invoice.shipto + "\n" }
          </Text>
          <Text style={styles.invnr}>
          
          {invoice.companyname + "\n" }
          
          Invoice Number: {invoice.invoicenumber + "\n"}
          
          Invoice Date: {invoice.invoicedate + "\n" }
          
          VAT Number: {invoice.vatnumber + "\n" }
          
          Due Date: {invoice.duedate + "\n"}                              
          </Text>
        </View>
          
        <View style={styles.sectionC}>
          <Text style={styles.spacer}>
                Item Description
          </Text>                    
          <Text style={styles.spacer}>             
                Unit Price
          </Text>                    
          <Text style={styles.spacer}>                                       
                Quantity
          </Text>                    
          <Text style={styles.spacer}>                                             
                Amount (VAT{invoice.taxrate})                                                                
          </Text>                                                                                           
        </View>
        <View style={styles.sectionD1}> 
        {data.quantity.map((item, index) => (        
        
        <View key={index % 5 > 0? index % 5: -1 } style={styles.sectionD}>
        
        <Text style={styles.spacec}>                
                {  index < 5?data.itemdescription.at(index+(5*kpair)):String(" ")}
        </Text>
        <Text style={styles.spacec}>
                { index < 5?data.itemdescription.at(index+(5*kpair))? data.price.at(index+(5*kpair)):String(" "):String(" ")}
        </Text>                                                                
        <Text style={styles.spacec}>
                { index < 5?data.quantity.at(index+(5*kpair)):String(" ")}
        </Text>                                  
        <Text style={styles.spacec}>                               
                
        </Text>
        
        </View>
        ))}
        </View>
        <View style={styles.sectionD1}> 
        <View style={styles.sectionD}>
        <Text style={styles.spacec}>
        </Text>
        <Text style={styles.spacec}>
        </Text>                                                                
        <Text style={styles.spacec}>
        </Text>                                  
        <Text style={styles.spacec}>                               
                {data.pages.length === kpair+1? invoice.totalCost(data.price).toFixed(2) + "\n": String(" ") }                
        </Text>
        </View>
        </View>

        <View style={styles.sectionE}>
          <Text>
          {"TERMS & CONDITIONS" + "\n"
                  +"Due upon receipt. Please make checks payable to"} {invoice.companyname} {"\n"
                  + "Bank Name :XXX XXX X.X." + "\n"
                  + "Address: XXXXXXXXXX" + "\n"
                  + "Account Number: XXXXXXXXXXXXXXXXXXXXX" + "\n"
                  + "If you have any questions concerning this invoice," + "\n" 
                  + "contact "} {invoice.companyname}  {"\n" 
                  + "Phone: "} {invoice.phone}  {"\n" 
                  + "Email:  Contact@staticcompany.com" + "\n" }

                  {invoice.notes + "\n" +
                  invoice.terms + "\n" }
                
          
          </Text>
        </View>
      </Page>
     ))}
    </Document>
    );
        
    const UpdateApp = () => (
      <PDFViewer width="100%" height="1000">        
        <UpdateDocument />        
      </PDFViewer>
    );

    constructPopOutWindow(DrawPDF(<UpdateApp />),document.getElementById('root')); 

  }

    
  const myPromise = new Promise(function(myResolve, myReject) {


  const response = fetch(new Request('/data.json'))
  .then(response => response.json())
  .then(response => {

            document.getElementById('companyname')?.setAttribute('placeholder',response['companyname']);
            document.getElementById('address')?.setAttribute('placeholder',response['address']);
            document.getElementById('city')?.setAttribute('placeholder',response['city']);
            document.getElementById('postalcode')?.setAttribute('placeholder',response['postalcode']);
            document.getElementById('country')?.setAttribute('placeholder',response['country']);
            document.getElementById('phone')?.setAttribute('placeholder',response['phone']);
            document.getElementById('website')?.setAttribute('placeholder',response['website']);
            document.getElementById('vatnumber')?.setAttribute('placeholder',response['vatnumber']);
            document.getElementById('invoicenumber')?.setAttribute('placeholder',response['invoicenumber']);
            document.getElementById('invoicedate')?.setAttribute('placeholder',response['invoicedate']);
            document.getElementById('duedate')?.setAttribute('placeholder',response['duedate']);
            document.getElementById('billto')?.setAttribute('placeholder',response['billto']);
            document.getElementById('shipto')?.setAttribute('placeholder',response['shipto']);
            document.getElementById('taxrate')?.setAttribute('placeholder',response['taxrate']);
            document.getElementById('notes')?.setAttribute('placeholder',response['notes']);
            document.getElementById('terms')?.setAttribute('placeholder',response['terms']);


            invoice.companyname = response['companyname'];
            invoice.address = response['address'];
            invoice.city = response['city'];
            invoice.postalcode = response['postalcode'];
            invoice.country = response['country'];
            invoice.phone = response['phone'];
            invoice.website = response['website'];
            invoice.vatnumber = response['vatnumber'];
            invoice.invoicenumber = response['invoicenumber'];
            invoice.invoicedate = response['invoicedate'];
            invoice.duedate = response['duedate'];
            invoice.billto = response['billto'];
            invoice.shipto = response['shipto'];
            invoice.taxrate = response['taxrate'];
            invoice.notes = response['notes'];
            invoice.terms = response['terms'];          
          
        
        });            
    
    myResolve('ok');  
    myReject('File is missing!');
        
    });

    myPromise.then(function(value) {
      console.log(value);
    }, function(error) {
      console.log(error); 
    });
  
    
    
       return ( <div>
                    <br/><br/>
                      <h2>Invoice Page</h2><br/>
                      <fieldset>
                        <legend>Invoice</legend>
                      <label>
                      Select Customer :
                      <select name="customers" id="customers" onChange={e=> Inform(e.target.value)}>
                        <optgroup label="--- Shoud be ignored ---">
                          <option value="Empty" disabled>---- ----- ----</option>
                        </optgroup>
                        <optgroup label="--- All items ---">
                          <option value="EmptyItems" disabled>---- All items ----</option>                                                           
                        </optgroup>
                      </select>
                      <br />
                      Open file
                      <input type="checkbox" name="openfile" onClick={PopulateItems}></input>
                      </label>
                      <label>Company name :              
                      <Fieldfill name='companyname' id='companyname' invoice={invoice} inputvalue={invoice.companyname}isarea='false' />               
                      <br></br> 
                      </label>
                      <label>Address : 
                      <Fieldfill name='address' id='address' invoice={invoice}  inputvalue={invoice.address} isarea='false' /><br></br>
                      </label>
                      <label>City : 
                      <Fieldfill name='city' id='city' invoice={invoice} inputvalue={invoice.city} isarea='false' /><br></br>
                      </label>
                      <label>Postal Code : 
                      <Fieldfill name='postalcode' id='postalcode' invoice={invoice} inputvalue={invoice.postalcode} isarea='false' /><br></br>       
                      </label>
                      <label>Country : 
                      <Fieldfill name='country' id='country' invoice={invoice}  inputvalue={invoice.country} isarea='false' /><br></br>     
                      </label>
                      <label>Phone :
                      <Fieldfill name='phone' id='phone'  invoice={invoice}  inputvalue={invoice.phone} isarea='false' /><br></br> 
                      </label>
                      <label>Website : 
                      <Fieldfill name='website' id='website'  invoice={invoice}  inputvalue={invoice.website} isarea='false' /><br></br>
                      </label>
                      <label>VAT Number : 
                      <Fieldfill name='vatnumber' id='vatnumber'  invoice={invoice}  inputvalue={invoice.vatnumber} isarea='false' /><br></br>
                      </label>
                      <label>Invoice Number : 
                      <Fieldfill name='invoicenumber' id='invoicenumber' invoice={invoice}  inputvalue={invoice.invoicenumber} isarea='false'  /><br></br>
                      </label>
                      <label>Invoice Date : 
                      <Fieldfill name='invoicedate' id='invoicedate'  invoice={invoice}  inputvalue={invoice.invoicedate} isarea='false' /><br></br>      
                      </label>
                      <label>Due Date : 
                      <Fieldfill name='duedate' id='duedate'  invoice={invoice}  inputvalue={invoice.duedate} isarea='true' /><br></br>
                      </label>
                      <label>Bill To : 
                      <Fieldfill name='billto' id='billto'  invoice={invoice}  inputvalue={invoice.billto} isarea='true' /><br></br> 
                      </label>
                      <label>Ship To : 
                      <Fieldfill name='shipto' id='shipto'  invoice={invoice}  inputvalue={invoice.shipto} isarea='true' /><br></br> 
                      </label>
                      <label>Item Description : 
                      <select name="items" id="items" onChange={e=> Updateform(e.target.value)}>
                        <optgroup label="--- Shoud be ignored ---">
                          <option value="Empty" disabled>---- ----- ----</option>
                        </optgroup>
                        <optgroup label="--- All items ---">
                          <option value="EmptyItems" disabled>---- All items ----</option>                                                           
                        </optgroup>
                      </select>
                      <br />
                      Open file
                      <input type="checkbox" name="openfile" onClick={PopulateItems}></input>
                      <br />  
                      <select name='itemdescription' id='itemdescription' onChange={e=> UpdateQuantity(e.target.value)}  multiple>
                        <optgroup label="--- Shoud be ignored ---"></optgroup>
                        <option value="Empty" disabled>---- Item description | Price ----</option>
                      </select>
                      <br></br> 
                      </label>
                      <label>Tax Rate :
                      <Fieldfill name='taxrate' id='taxrate' invoice={invoice}  inputvalue={invoice.taxrate} isarea='false'  /><br></br> 
                      </label>
                      <label>Notes :
                      <Fieldfill name='notes' id='notes' invoice={invoice}  inputvalue={invoice.notes} isarea='true' /><br></br> 
                      </label>
                      <label>Terms :
                      <Fieldfill name='terms' id='terms' invoice={invoice}  inputvalue={invoice.terms} isarea='true'  /><br></br>   
                      </label>
                      
                      <label>Make Invoice :
                      <button onClick={makePDF}>Make Invoice</button>
                      </label>
                      
                      </fieldset>
                      </div>);
      

}

