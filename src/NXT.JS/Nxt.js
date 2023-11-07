import React from 'react'

const CartContext = React.createContext({
  savedList: [],
  isdark: false,
  activetab: 'HOME',
  theam: () => {},
  AddData: () => {},
  activetabitem: () => {},
})

export default CartContext
