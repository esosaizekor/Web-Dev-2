// Author : Esosa Izekor
// Date : 05/10/2025
// version : 0.1
// Early Stage
// Written in React
// email : esosa.izekor@outlook.com
//         howtoweargreen@gmail.com

import { StyleSheet } from '@react-pdf/renderer';
import Fieldfill from '@/components/textfield';
import customer from '@/components/customer';

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


const items = new customer("","");

function addItem()
{     
  const storage = window.localStorage;

  const itemsU = updateItems();
  let amount = 0;
  
  amount = Number(itemsU[0][2]);
  
  storage.setItem('customerFirstname' + amount,JSON.stringify(items.firstname));     
  storage.setItem('customerLastname' + amount, JSON.stringify(items.lastname));      
  storage.setItem('customerJoined' + amount, JSON.stringify(items.date));       

  storage.setItem('customeramount',JSON.stringify(amount+1 )); 
}

function updateItems()     
{   
  const storage = window.localStorage;
  const amount = storage.getItem('customeramount');
  const itemslist = [[storage.getItem('customerFirstname1'),storage.getItem('customerLastname1'),amount]];
  let i = Number(amount);

  while(i > 0) 
  {
    itemslist.push([storage.getItem('customerFirstname' + i),storage.getItem('customerLastname' + i),amount]);
    i--
  } 

  return itemslist;

  
}

export function PopulateItems()
{
    
    const storage = window.localStorage;
    const amount = storage.getItem('customeramount');
    const onsel = document.getElementById('items');   
    

    if(amount)
    {
    
       
    let i = Number(amount) - 1;

    while(i > -1) 
    {       
      const c = document.createElement("option");  
      // Create the text node for the option
      const optionText = document.createTextNode(String(storage.getItem('customerFirstname' + i)) + " " + String(storage.getItem('customerLastname' + i)));
      // Append the text node to the option element
      c.appendChild(optionText);

      // Set the value attribute of the option
      
      c.setAttribute('value',(String(storage.getItem('customerFirstname' + i)) + " " + String(storage.getItem('customerLastname' + i))));
 
      // Append the new option to the select element
      onsel?.appendChild(c);                  
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

               <h2>Build up your CRM!</h2><br />
               <fieldset>
                <legend>Well let's get started!</legend>
                <br />
                <div style={styles.intersection}>
                
                  <div style={styles.iteminput}>
                      <u>Customer Entry</u>
                      <br />
                          <label>Firstname :
                          <Fieldfill name='firstname' id='firstname'  customers={items} /><br></br> 
                          </label>
                          <label>Lastname :
                          <Fieldfill name='lastname' id='lastname'  customers={items} /><br></br> 
                          </label>
                          <label>Add Item :
                          <button onClick={addItem}>AddItem</button>
                          </label>


                  </div>

                  <div style={styles.itempreselect}>
                      <u>Customer Management</u>
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
