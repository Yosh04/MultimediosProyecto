import React from 'react';
import NewsLink from "./NewsLink";

const BarInfo = () => {
    return (
        <div class='AppBarInfoDiv '>
            <ul class='AppBarListInfo '>
                <li class='AppSocial-li'>
                    <NewsLink to={"/News"}>
                    <a className='AppBarInfoElement' href=" ">NEWS+FEATURES</a>
                    </NewsLink>
                </li>
                <li class='AppSocial-li'>
                    <a href=" ">VIDEO</a>
                </li>
                <li class='AppSocial-li'>
                    <a href=" ">FILMS</a>
                </li>
                <li class='AppSocial-li'>
                    <a href=" ">SERIES</a>
                </li>
                <li class='AppSocial-li'>
                    <a href=" ">INTERACTIVE</a>
                </li>
                <li class='AppSocial-li'>
                    <a href=" ">COMMUNITY</a>
                </li>
                <li class='AppSocial-li'>
                    <a href=" ">DATABANK</a>
                </li>
                <li class='AppSocial-li'>
                    <a href=" ">DISNEY+</a>
                </li>
            </ul>
        </div>
    );
};

export default BarInfo;