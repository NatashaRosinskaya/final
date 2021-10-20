
import Catalog from './Catalog'
import HomePage from './HomePage'
import Cart from './Cart'
import ProductCard from './ProductCart'
import { Route } from 'react-router-dom'

function Main(){
    return(
        <main className="main">  
        <Route path='/' exact>          
            <HomePage />
        </Route > 
        <Route path='/catalog'>
            <Catalog />
        </Route >

    
            <Route path="/cart" component={Cart} />
            <Route path="/product/:id" component={ProductCard}/>
        </main>
    )
}
export default Main