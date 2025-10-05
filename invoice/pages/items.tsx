// Author : Esosa Izekor
// Date : 05/10/2025
// version : 0.1
// Early Stage
// Written in React
// email : esosa.izekor@outlook.com
//         howtoweargreen@gmail.com
// github : Esosa Izekor https://github.com/esosaizekor

import item from '@/components/item';
import { StyleSheet } from '@react-pdf/renderer';
import Fieldfill from '@/components/textfield';

const styles = StyleSheet.create(
{
    intersection: {
      margin: 10,
      padding: 10,
      flexGrow: 1,
      flexDirection: 'column',
      width : '95%'
    },
    iteminput : {
      margin: 0,
      padding: 0,
      width : '45%',
      border: '1px solid black',
      borderRadius : '5px'

    },
    itempreselect : {
      margin: 0,
      padding: 0,
      width : '50%',
      border: '1px solid black',
      borderRadius : '5px' 

    }

});


const items = new item("");

function addItem()
{     
  const storage = window.localStorage;

  const itemsU = updateItems();
  let amount = 0;
  
  amount = Number(itemsU[0][2]);
  
  storage.setItem('itemdescription' + amount,JSON.stringify(items.itemdescription));     
  storage.setItem('itemprice' + amount, JSON.stringify(items.price));       
  storage.setItem('itemamount',JSON.stringify(amount+1 )); 
}

function updateItems()     
{   
  const storage = window.localStorage;
  const amount = storage.getItem('itemamount');
  const itemslist = [[storage.getItem('itemdescription1'),storage.getItem('itemprice1'),amount]];
  let i = Number(amount);

  while(i > 0) 
  {
    itemslist.push([storage.getItem('itemdescription' + i),storage.getItem('itemprice' + i),amount]);
    i--
  } 

  return itemslist;

  
}

export function PopulateItems()
{
    
    const storage = window.localStorage;
    const amountItem = storage.getItem('itemamount');
    const onsel = document.getElementById('items');   
    

    if(amountItem)
    {
    
       
    let i = Number(amountItem) - 1;

    while(i > -1) 
    {       
      const c = document.createElement("option");  
      // Create the text node for the option
      const optionText = document.createTextNode(String(storage.getItem('itemdescription' + i)));
      // Append the text node to the option element
      c.appendChild(optionText);

      // Set the value attribute of the option
      
      c.setAttribute('value',String(storage.getItem('itemdescription' + i)) + ' | ' + String(storage.getItem('itemprice' + i)));
 
      // Append the new option to the select element
      onsel?.appendChild(c);                  
      i--;
    } 
  }
  else
  {
    alert('Empty! You need to put at least 1 more item into the Item inventory!');
  }

  const amountCustomer = storage.getItem('customeramount');
  const onselCustomer = document.getElementById('customers');     

  if(amountCustomer)
  {            
    let i = Number(amountCustomer) - 1;

    while(i > -1) 
    {       
      const c = document.createElement("option");  
      // Create the text node for the option
      const optionText = document.createTextNode(String(storage.getItem('customerFirstname' + i)) + ' | ' +  String(storage.getItem('customerLastname' + i)));
      // Append the text node to the option element
      c.appendChild(optionText);

      // Set the value attribute of the option
      
      c.setAttribute('value',(String(storage.getItem('customerFirstname' + i)) + ' | ' +  String(storage.getItem('customerLastname' + i))));

      // Append the new option to the select element
      onselCustomer?.appendChild(c);                  
      i--;
    } 
  }
  else
  {
    alert('Empty! You need to put at least 1 more customer(s) into the inventory!');
  }


}

export default function Items() {

  return ( <div>
               <br /><br />

               <h2>Fill up the Inventory!</h2><br />
               <fieldset>
                <legend>Well let's get started!</legend>
                <br />
                <div style={styles.intersection}>
                
                  <div style={styles.iteminput}>
                      <u>Item Entry</u>
                      <br />
                          <label>Item Description :
                          <Fieldfill name='item' id='item'  items={items} /><br></br> 
                          </label>
                          <label>Price :
                          <Fieldfill name='itemprice' id='itemprice'  items={items} /><br></br> 
                          </label>
                          <label>Add Item :
                          <button onClick={addItem}>AddItem</button>
                          </label>


                  </div>

                  <div style={styles.itempreselect}>
                      <u>Item Management</u>
                      <br />
                        <label>
                          These are Listed :
                          <select name="items" id="items"  multiple>
                            <optgroup label="--- Shoud be ignored ---">
                              <option value="Empty">---- ----- ----</option>
                            </optgroup>
                            <optgroup label="--- All items ---">
                              <option value="EmptyItems">---- All items ----</option>                                                           
                            </optgroup>
                          </select>
                          Open file
                          <input type="checkbox" name="openfile" onClick={PopulateItems}></input>
                        </label>                      
                  </div>
                  
                </div>
               </fieldset>               
              </div>);
}
