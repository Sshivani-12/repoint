import React, { Component } from 'react'
import {storeProducts,detailProduct} from './data';


const ProductContext=React.createContext();


export default class ProductProvider extends Component {
    state={
        products:[],
        detailProduct:detailProduct
    }
    componentDidMount() {
    this.setProducts();
  }

    handleDetail=()=>{
        console.log('hello from detials')
    }

    addToChart=(id)=>{
        console.log(`hello from cart ${id}`)
    }

    setProducts = () => {
    let tempProducts = [];
    storeProducts.forEach(item => {
      const singleItem = { ...item };
      tempProducts = [...tempProducts, singleItem];
    })
    this.setState(() => {
      return { products:tempProducts };
    }, this.checkCartItems);
  };
getItem = id => {
    const product = this.state.products.find(item => item.id === id);
    return product;
  };
    
    handleDetail = (id) => {
    const product = this.getItem(id);
    this.setState(() => {
      return { detailProduct: product };
    });
  };
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