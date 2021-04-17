import React, { Component } from 'react'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs'
import 'react-tabs/style/react-tabs.css';
import ProductAdd from '../pages/ProductAdd';
import ProductList from '../pages/ProductList';
import '../scss/Category.scss'

class Product extends Component {
  render() {
    return (
      <div className="Category">
        <h1 style={{ textAlign: "center" }}>Product</h1>
        <Tabs>
          <TabList>
            <Tab>Add</Tab>
            <Tab>Display</Tab>
          </TabList>

          <TabPanel>
            <ProductAdd />
          </TabPanel>
          <TabPanel>
            <ProductList />
          </TabPanel>
        </Tabs>
      </div>
    )
  }
}

export default Product
