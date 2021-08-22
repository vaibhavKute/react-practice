import React, { Component, useState } from 'react';

import Menu from './TabsMenu/Menu';

const Products = () => {

    let [items, updateProducts] = useState(Menu);
    
    let productFilter = (categoryItem) => {
        let updatedItems = Menu.filter((currentElement) => {
            return currentElement.category === categoryItem;
        })
        updateProducts(updatedItems);
    }
        return (
            <div>
                <h1 className="mt-5 text-center">Products</h1>
                <hr />

                <div className="container">
                    <div className="d-flex justify-content-around">
                        <button className="btn btn-danger" onClick = {() => updateProducts(Menu)}>All Products</button>
                        <button className="btn btn-danger" onClick = {() => productFilter('redmi')}>Redmi</button>
                        <button className="btn btn-danger" onClick = {() => productFilter('samsung')}>Samsung</button>
                        <button className="btn btn-danger" onClick = {() => productFilter('poco')}>Poco</button>
                        <button className="btn btn-danger" onClick = {() => productFilter('oppo')}>Oppo</button>
                        <button className="btn btn-danger" onClick = {() => productFilter('iphone')}>Iphone</button>
                    </div>
                </div>

                {/* Main Section */}
                <div className="container-fluid mt-5">
                    <div className="row">
                        <div className="col-11">
                            <div className="row my-5">

                                {
                                    items.map((ele) => {
                                        let {  dname, image, description, price } = ele;

                                        return (
                                            <div className="col-12 col-md-6 col-lg-6 col-xl-4 my-5 hell">
                                                <div className="row">
                                                    {/* for images */}
                                                    <div className="col-12 col-md-12 col-lg-4">
                                                        <img src={image} alt="test" className="img-fluid"/>
                                                    </div>

                                                    {/* item desc */}
                                                    <div className="col-12 col-md-12 col-lg-8">
                                                        <div className="pt-4 pb-3">
                                                            <h1>{dname}</h1>
                                                            <p>{description}</p>
                                                        </div>
                                                        <div>
                                                            <div className="d-flex justify-content-between">
                                                                <h2>{price}</h2>
                                                                <a href="#">
                                                                    <button className="btn btn-primary">Order Now</button>
                                                                </a>
                                                            </div>
                                                            <p>Prices may vary at selected locations</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }


                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
}

export default Products;