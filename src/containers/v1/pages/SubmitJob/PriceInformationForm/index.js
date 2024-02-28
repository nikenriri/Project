import React, {useState} from 'react';
import { Modal, Button, Form, Input, Col, Row, Space, Radio, InputNumber } from 'antd';
import styles from "../../index.module.css";

import { ROOT_CONSTANT } from "../../../constants";

const { drop, loc, load } = ROOT_CONSTANT.IMG.ICON.SEND_LOGO;
const { icon_malaysia, seabox } = ROOT_CONSTANT.IMG.ICON.MAIN;

const { TextArea } = Input;

const onChange = (value) => {
  console.log(value);
};

const PriceInformationForm = () => {

  const RMType = [
    {
      value: "1",
      label: "RM 20",
    },
    {
      value: "2",
      label: "RM 50",
    },
    {
      value: "3",
      label: "RM 70",
    },
    {
      value: "4",
      label: "RM 100",
    },
  ];

  return (
    <div>
      <div style={{marginTop: "10px"}}>
        <Row>
          <Col flex="100px" className={styles.pictureContainer}>
           <img src={seabox} alt="Food" className={styles.picture}/></Col>
          <Col flex="auto">
            <h1 className={styles.itemTitle}>Seafood</h1>
            <h1 className={styles.itemDetails}>4 Pieces (5cm x 5cm x 1cm x 10kg)</h1>
            <Row style={{marginTop: "18px"}}>
              <Col flex="50px"><img src={loc} alt="Location" width="40%" style={{ display: 'block', margin: 0 }}/></Col>
              <Col flex="auto">
                <h1 className={styles.itemDetails1}>Seri Kembangan, Selangor</h1>
                <h1 className={styles.itemDetails1}>Pick up at 23/11/2024 16:33</h1>
              </Col>
            </Row>
            <img src={load} alt="Load" width="1%" style={{ display: 'block', marginTop: 0, marginLeft: 8, marginBottom: 6 }}/>
            <Row>
              <Col flex="50px"><img src={drop} alt="Drop" width="40%" style={{ display: 'block', margin: 0 }}/></Col>
              <Col flex="auto">
                <h1 className={styles.itemDetails1}>Butterworth, Penang</h1>
                <h1 className={styles.itemDetails1}>Drop off at 23/11/2024 16:33</h1>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
      <div>
        <h1 className={styles.wantText}>I want this price</h1>
        <div className={styles.flagSection}>
          <div className={styles.flagContainer}><img src={icon_malaysia} alt="Flag"className={styles.flag}/></div>
          <h1 className={styles.RMText}>RM</h1>
          <InputNumber
            min={1}
            max={1000000000000}
            defaultValue={undefined}
            formatter={value => (value ? String(value) : '')} 
            parser={value => (value ? Number(value) : undefined)} 
            onChange={onChange}
            className={styles.inputRM}
          />
        </div>
        <div style={{ marginTop: "-85px" }}>
          <Radio.Group defaultValue={1}>
            <Space>
              {RMType.map((data) => {
                return (
                  <Radio.Button
                    key={data.value}
                    value={data.value}
                    className={styles.RMBox}
                    style={{borderColor: "#0276C0", borderWidth: 1.7, borderRadius: "30px"}}
                  >
                  {data.label}
                  </Radio.Button>
                );
              })}
            </Space>
          </Radio.Group>
        </div>
        <TextArea rows={7} placeholder="Notes to transporter ..." maxLength={298} className={styles.notes} />
      </div>
    </div>
    
  )
}

export default PriceInformationForm