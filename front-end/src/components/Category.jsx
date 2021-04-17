import React, { Component } from 'react'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs'
import 'react-tabs/style/react-tabs.css';
import CategoryAdd from '../pages/CategoryAdd';
import CategoryList from '../pages/CategoryList';
import '../scss/Category.scss'

class Category extends Component {
  render() {
    return (
      <div className="Category">
        <h1 style={{ textAlign: "center" }}>Category</h1>
        <Tabs>
          <TabList>
            <Tab>Add</Tab>
            <Tab>Display</Tab>
          </TabList>

          <TabPanel>
            <CategoryAdd />
          </TabPanel>
          <TabPanel>
            <CategoryList />
          </TabPanel>
        </Tabs>
      </div>
    )
  }
}

export default Category
