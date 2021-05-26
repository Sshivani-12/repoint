import React, { Component } from 'react'
import {storeProducts,detailProduct} from './data';


const ProductContext=React.createContext();


export default class ProductProvider extends Component {
    state={
        products:storeProducts,
        detailedProduct:detailProduct
    }
    handleDetail=()=>{
        console.log('hello from detials')
    }

    addToChart=()=>{
        console.log('hello from cart')
    }
    
    
    render() {
        return (
            <ProductContext.Provider value = {{
                    ...this.state,
                    handleDetail:this.handleDetail,
                    addToChart:this.addToChart,
                    
            }}>

      
        {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider,ProductConsumer};