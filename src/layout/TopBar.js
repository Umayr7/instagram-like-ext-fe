import React from 'react'
import { ArrowLeftOutlined } from '@ant-design/icons';

import {
    goBack,
} from 'react-chrome-extension-router';

const TopBar = () => {
    // const goBack = () => {
    //     window.history.back();
    // }

    return (
        <>
            <div style={{width:"200px", height:"20px"}}>
                {/* <ArrowLeftOutlined style={{width:"10px", heigth:"10px"}} onClick={goBack} /> */}
                <span onClick={goBack} style={{ fontSize:"15px", fontWeight:"bold", color:"grey", cursor:"pointer" }}>
                    {"←BACK TO ACTIVITY"}
                </span>
                {/* <h3 style={{ fontSize:"15px",  }}>
                    {"BACK TO ACTIVITY"}
                </h3> */}
            </div>
        </>
    )
}

export default TopBar