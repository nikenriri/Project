import React from "react";
import { Button } from "antd";
// Constant
import { ROOT_CONSTANT } from "../../constants";
import { Navigate, useNavigate } from "react-router";

const { ddmovelogo, map_image } = ROOT_CONSTANT.IMG.ICON.MAIN;

const WelcomePage = (props) => {
    const navigate = useNavigate()
  return (
    <div style={{ height: "100%"  }}>
      <img src={map_image} alt="map_bg" style={{ width: "100%", height: "100%"  }} />
      <Button
      onClick={() => navigate('/submit-job')}
        style={{
          backgroundColor: "#0276C0",
          width: "80%",
          display: "block",
          margin: "0 auto",
          position: "absolute",
          left: 0,
          right: 0,
          bottom: '10%',
          textAlign: "center",
        }}
        type="primary" 
      >
        Submit A Job
      </Button>
    </div>
  );
};

export default WelcomePage;
