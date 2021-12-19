import React, { Fragment, useEffect, useState } from 'react';

import millify from 'millify';

import { Link } from 'react-router-dom';

import { Card, Row, Col, Input, Typography } from 'antd';

import { useGetCryptosQuery } from '../services/cryptoApi';
import Loading from './Loading';


const { Paragraph } = Typography

const CryptoCurrencies = ({ simplified }) => {

    const count = simplified ? 8 : 100;
    const { data: cryptosList, isFetching } = useGetCryptosQuery(count);
    const [cryptos, setCryptos] = useState([]);

    const [searchTerm, setSearchTerm] = useState('');

    console.log(cryptos);


    useEffect(() => {


        const filteredData = cryptosList?.data?.coins.filter((coin) => coin.name.toLowerCase().includes(searchTerm.toLowerCase()));

        setCryptos(filteredData)

    }, [cryptosList, searchTerm])


    if(isFetching) return <Loading/>;

    return ( 
        <Fragment>

            {!simplified && (

                <div className='search-crypto'>
                    <Input placeholder='Search Crypto You Want...' onChange={(e) => setSearchTerm(e.target.value)}/>
                </div>
            )}

            <Row gutter={[32, 32]} className='crypto-card-container'>
                {cryptos?.map((currency) => (

                    <Col xs={24} sm={12} lg={6} className='crypto-card' key={currency.id}>
                        <Link to={`/crypto/${currency.id}`}>
                            <Card title={`${currency.rank}. ${currency.name}`} extra={<img className='crypto-image' src={currency.iconUrl}/>} hoverable>
                                <Paragraph>Price : { millify(currency.price) }</Paragraph>
                                <Paragraph>cap : { millify(currency.marketCap) }</Paragraph>
                                <Paragraph>Change : { millify(currency.change) }</Paragraph>
                            </Card>
                        </Link>
                    </Col>

                ))}
            </Row>
        </Fragment>
     );
}
 
export default CryptoCurrencies;