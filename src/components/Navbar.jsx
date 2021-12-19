import React, { Fragment, useState, useEffect } from 'react'

import { Button, Menu, Typography, Avatar } from 'antd'
import {
  HomeOutlined,
  MoneyCollectOutlined,
  BulbOutlined,
  FundOutlined,
  MenuOutlined,
} from '@ant-design/icons'

import { Link } from 'react-router-dom'

import icon from '../images/icon.png'

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(true)
  const [screenSize, setScreenSize] = useState(null)

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth)

    window.addEventListener('resize', handleResize)

    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    if (screenSize < 768) {
      setActiveMenu(false)
    } else {
      setActiveMenu(true)
    }
  }, [screenSize])

  return (
    <Fragment>
      <div className="nav-container">
        <div className="logo-container">
          <div className="brand-container">
            <Avatar src={icon} size="large" />
            <Typography.Title level={2} className="logo">
              <Link to="/">Cryptoverse</Link>
            </Typography.Title>

            <Button className='menu-control-container' onClick={() => setActiveMenu(!activeMenu)}>
                <MenuOutlined/>
            </Button>
          </div>

          {activeMenu && (
            <Menu className="menu-container">
              <Menu.Item icon={<HomeOutlined />}>
                <Link to="/">Home</Link>
              </Menu.Item>
              <Menu.Item icon={<FundOutlined />}>
                <Link to="/cryptocurrencies">CryptoCurrencies</Link>
              </Menu.Item>
              <Menu.Item icon={<MoneyCollectOutlined />}>
                <Link to="/exchanges">Exchanges</Link>
              </Menu.Item>
              <Menu.Item icon={<BulbOutlined />}>
                <Link to="/news">News</Link>
              </Menu.Item>
            </Menu>
          )}
        </div>
      </div>
    </Fragment>
  )
}

export default Navbar
