/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import '../App.css';
import Services from './Services';
// import { Link } from 'react-router-dom';
import { useLocation } from 'react-router';

function Home() {
    const location = useLocation()

    return (
        <div id='homeContainer'>

            <div className='notice'>
                <p> Hello, <span>{location.state.id} </span></p>
                <h1> Notices</h1>
                <ul>
                    <li>Making a Difference - Mployee in the Community</li>
                    <li>A Decade of Dedication - Celebrating Ravi Kumar's Milestone</li>
                    <li>Bridging Gaps, Building Success - Krish Nambiyar</li>
                    <li><a href=''>Please use this form to confidentially report any concerns or complaints you may have regarding workplace issues.</a></li>
                </ul>
            </div>

            <Services />

        </div>
    )
}

export default Home