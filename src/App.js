import React, { Fragment } from 'react';
import { Routes, Route, Link } from 'react-router-dom'

import { Layout, Typography, Space } from "antd";

import { Navbar, Exchanges, CryptoCurrencies, CryptoDetails, News, HomePage } from "./components"
import "./styles/App.scss";

const App = () => {
    return ( 

        <Fragment>
            
            <div className='app'>
                <div className='navbar'>
                    <Navbar />
                </div>
                <div className='main'>
                    <Layout>
                        <div className='routes'>
                            <Routes>
                                <Route path="/" exact element={<HomePage/>}>
                                    
                                </Route>
                                <Route path="/exchanges" exact element={<Exchanges/>}>
                                    
                                </Route>
                                <Route path="/cryptoCurrencies" exact element={<CryptoCurrencies/>}>
                                    
                                </Route>
                                <Route path="/crypto/:coinId" exact element={<CryptoDetails/>}>
                                    
                                </Route>
                                <Route path="/news" exact element={<News/>}>
                                    
                                </Route>
                            </Routes>
                        </div>
                    </Layout>
                    <div className='footer'>
                        <Typography.Title level={5} style={{ color: '#fff', textAlign: 'center' }}>
                            CryptoVerse <br/>
                            All Rights Reserved (Even You My Friend, I Waching You)
                        </Typography.Title>
                        <Space>
                            <Link to="/">Home</Link>
                            <Link to="/exchanges">Exchanges</Link>
                            <Link to="/news">News</Link>
                        </Space>
                    </div> 
                </div>
            </div>
        </Fragment>


     );
}
 
export default App;