
import React from 'react'
import { Button } from 'antd';
// Constant
import { ROOT_CONSTANT } from "../../constants";
import { CopyrightFooter } from '../../components';
import { useNavigate } from 'react-router';
// Style
import classStyles from "../index.module.css";
const { ddmovelogo } = ROOT_CONSTANT.IMG.ICON.MAIN;

const LogoPage = (props) => {
    const navigate = useNavigate()
    return(
        <>
            <img src={ddmovelogo} alt="" style={{margin: '0 auto', display: 'block', position: 'relative', top: "30vh" }} />
            <div style={{position: 'absolute', bottom: 0}}>
            <Button
                onClick={() => navigate('/welcome')}
                    style={{
                    backgroundColor: "#0276C0",
                    width: "80%",
                    display: "block",
                    margin: "0 auto",
                    position: "absolute",
                    left: 0,
                    right: 0,
                    bottom: '120%',
                    textAlign: "center",
                    }}
                    type="primary" 
            >
                Next Page
            </Button>
            <CopyrightFooter />
            </div>
        </>
    )
}

export default LogoPage;