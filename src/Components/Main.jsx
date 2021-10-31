import Catalog from './Catalog';
import HomePage from './HomePage';
import { Route } from 'react-router-dom';
import AboutCompany from './AboutCompany';
import Certificates from './Certificates';
import Vacancy from './Vacancy'
import Payment from './Payment'
import Delivery from './Delivery'
import Cart from './Cart'
import ProductCard from './ProductCart';
import Navigation from './Navigation';

function Main(){
    return(
        <main className="main">  
        <Route path='/' exact >          
            <HomePage />
        </Route> 

        <Route path='/catalog'>
            <Catalog />
        </Route>

        <Route path='/about_company'>
            <AboutCompany />
        </Route>

        <Route path='/certificates'>
            <Certificates />
        </Route>

        <Route path='/vacancy'>
            <Vacancy />
        </Route>

        <Route path='/payment'>
            <Payment />
        </Route>
        
        <Route path='/delivery'>
            <Delivery />
        </Route>

        <Route path='/cart'>
            <Cart />
        </Route>
        
        <Route path='/product/:id'>
            
            <ProductCard />
        </Route>
        </main>
    )
}
export default Main