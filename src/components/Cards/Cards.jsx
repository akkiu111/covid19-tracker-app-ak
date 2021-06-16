import React from 'react';
import {Card, CardContent, Typography, Grid} from '@material-ui/core';
import CountUp from 'react-countup';
import clnms from 'classnames';

import styles from './Cards.module.css';

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate }, country }) => {
    if(!confirmed){
        return 'loading......';
    }
    return(
        <div className={styles.container}>
        <Typography gutterBottom variant="h4" component="h2"
            fontFamily = "Roboto, Helvetica, Arial, sans-serif"
            >{country ? country : 'Global'}</Typography>
            <Grid container spacing = {3} justify = 'center'>
                <Grid item component = {Card} maxWidth="lg" xs ={12} md={3} className={clnms(styles.card, styles.infected)}>
                    <CardContent>
                        <Typography color='textSecondary' gutterBottom>Infected</Typography>
                        <Typography  variant='h5' component='h2'>
                            <CountUp start={0} end={confirmed.value} duration={1.25} separator=","/>
                        </Typography>
                        <Typography color='textSecondary'>{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant='body2' component='p'>active cases</Typography>
                    </CardContent>
                </Grid>

                <Grid item component = {Card} maxWidth="lg" xs ={12} md={3} className={clnms(styles.card, styles.recovered)}>
                    <CardContent>
                        <Typography color='textSecondary' gutterBottom>Recovered</Typography>
                        <Typography  variant='h5'component='h2'>
                        <CountUp start={0} end={recovered.value} duration={1.25} separator=","/>
                        </Typography>
                        <Typography color='textSecondary'>{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant='body2' component='p'>recovered cases</Typography>
                    </CardContent>
                </Grid>

                <Grid item component = {Card} maxWidth="lg" xs ={12} md={3} className={clnms(styles.card, styles.deaths)}>
                    <CardContent>
                        <Typography color='textSecondary' gutterBottom>Deaths</Typography>
                        <Typography  variant='h5'component='h2'>
                        <CountUp start={0} end={deaths.value} duration={1.25} separator=","/>
                        </Typography>
                        <Typography color='textSecondary'>{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant='body2' component='p'>total deaths</Typography>
                    </CardContent>
                </Grid>

            </Grid>

        </div>
    );
};

export default Cards;