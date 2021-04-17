import React, { Component } from 'react'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs'
import 'react-tabs/style/react-tabs.css';
import '../scss/Category.scss'
import BrandAdd from '../pages/BrandAdd';
import BrandList from '../pages/BrandList';

class Brand extends Component {
  render() {
    return (
      <div className="Category">
        <h1 style={{ textAlign: "center" }}>Brand</h1>
        <Tabs>
          <TabList>
            <Tab>Add</Tab>
            <Tab>Display</Tab>
          </TabList>

          <TabPanel>
            <BrandAdd />
          </TabPanel>
          <TabPanel>
            <BrandList />
          </TabPanel>
        </Tabs>
      </div>
    )
  }
}

export default Brand
