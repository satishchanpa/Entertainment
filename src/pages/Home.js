import React from 'react';
import Header from '../component/header';
import Recommendation from './Recommendation';
import MyList from './MyList';


function home() {


    return (
        <div>
            <Header/>
            <Recommendation/>
            <MyList/>
         </div>
    )
}


export default home;
