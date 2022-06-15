import React, { useEffect, useState } from 'react';
import { API } from '../../services/api';
import { Board } from './components/Board';
import { Panel } from './components/Panel';
import { ContainerStyled } from './style';

export function Main() {
    const [dataInfo, setDataInfo] = useState({});
    const [country, setCountry] = useState('brazil');
    const updateAt = new Date().toLocaleString()

    async function getCountry(country) {
        try {
            const {data} = await API.get(`/${country}`);
            console.log(data);
            setDataInfo(data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=> {
        getCountry(country);
    },[country]);

    const handleChange = ({ target }) => {
        const country = target.value
        setCountry(country)
    }

    return (
        <ContainerStyled>
            <div className="mb-2">
                <Panel
                    data={dataInfo}
                    updateAt={updateAt}
                    onChange={handleChange}
                    country={country}
                    getCovidData={getCountry}
                />
            </div>
            <Board data={dataInfo} />
        </ContainerStyled>
    )
}
