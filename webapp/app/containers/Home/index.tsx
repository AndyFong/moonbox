/*
 * Home
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react'
import { FormattedMessage } from 'react-intl'
import messages from './messages'
import { Link } from 'react-router-dom'

import { Layout, Menu, Icon } from 'antd'
const { Header, Content, Footer } = Layout
const MenuItem = Menu.Item

import Logo from 'assets/images/moonbox-logo.png'
import './Home.less'

export default function Home() {
  return (
    <Layout>
      <Header className="moonbox-header">
        <img src={Logo} className="moonbox-logo" alt="Moonbox" />
        <label className="moonbox-version">0.3.0</label>
        <Menu
          theme="dark"
          className="moonbox-menu"
          mode="horizontal"
        >
          <MenuItem>
            <Link to="/">Cluster</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/">Application</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/">Query</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/">SQL Statistic</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/">Help</Link>
          </MenuItem>
        </Menu>
        <Icon className="moonbox-user" type="user" theme="outlined" />
      </Header>
      <Content />
      <Footer>Moonbox Web Application 2019</Footer>
    </Layout>
    // <h1>
    //   <FormattedMessage {...messages.header} />
    // </h1>
  )
}
