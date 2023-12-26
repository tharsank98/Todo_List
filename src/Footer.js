import React from 'react'

function Footer({items}) {

   // const year = new Date();
  return (
   <footer>{items.length} List {items.length===1 ? "Item" : "Items"}</footer>
  )
}

export default Footer