// Author : Esosa Izekor
// Date : 05/10/2025
// version : 0.1
// Early Stage
// Written in React
// email : esosa.izekor@outlook.com
//         howtoweargreen@gmail.com

import Link from 'next/link';

export default function NavBar() {
  return (    
      <div > 
        <ul style={{listStyleType: 'none'}}>
            <li style={{float: 'left', padding: '14px 16px'}}><Link href="/">Home</Link></li>
            <li style={{float: 'left', padding: '14px 16px'}}><Link href="/customers">Build your CRM</Link></li>
            <li style={{float: 'left', padding: '14px 16px'}}><Link href="/items">Populate Items File</Link></li>
            <li style={{float: 'left', padding: '14px 16px'}}><Link href="/invoices">Make Invoices</Link></li>
        </ul>
    </div>    
  )
}