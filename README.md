# How to use react useContext
1. create a context e.g. CartContext.js  
2. wrap the component you want to access to CartContext with CartProvider, e.g. check App.js 
3. inside the component you want to access the CartContext, destructure the state you want from the context e.g. `const {cartTotalQty} =  useContext(CartContext);` In this example, Cart.js and SingleProductPage.js have access the CartContext


# Using multiple context in one component
same to use single context, just add new line, check Cart.js

`const { addOneToCart } = useContext(CartContext)`  

`const { darkMode } = useContext(SettingContext)`

