import React, {useState, useEffect} from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';

import styles from './Country.module.css';

import { fetchCountries } from '../../api';

const Country = ({handleCountryChange}) =>{

    const [fetchedCountries, setFetchedCountries] = useState([]);

    useEffect(() => {
        const fetchCountriesAPI = async () => {
        setFetchedCountries(await fetchCountries()); 
        }

        fetchCountriesAPI();

    }, []);

    return(
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
                <option value ="">Global</option>
                {fetchedCountries.map((country, index) => 
                <option key={index} value={country}>
                    {country}
                    </option>)}
            </NativeSelect>
        </FormControl>    
);
};

export default Country;