import { Row, Col } from "antd";

// Config
import * as CONFIG from "../../config";

// Constant
import { ROOT_CONSTANT } from "../../constants";

// Styles
import classes from "./index.module.css";

const { ddmovelogo} = ROOT_CONSTANT.IMG.ICON.MAIN;

const HeaderBar = ({ memid }) => {
  return (
    <div className={classes["header"]}>
      <Row style={{height: '80%'}} align='middle'>
        <Col span={1} style={{height: "80%", marginTop: '5%'}}> 
          
        </Col>
        <Col span={15} style={{height: "80%", marginTop: '5%'}} >
          <h6 style={{ color: '#0276C0', marginBottom: '3px', fontSize: '9px' }}>DDMove</h6>
          <h2 style={{ fontSize: '13px' }}>Welcome to DDMove!</h2>

        </Col>

        <Col span={8} style={{height: "80%", marginTop: '5%'}}> 
          <img src={ddmovelogo} className={classes["icon-img"]} alt="" width="80%" />
        </Col>
      </Row>
    </div>
  );
};

export default HeaderBar;
