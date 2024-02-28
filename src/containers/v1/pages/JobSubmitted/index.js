import React from 'react'
import { Button, Result } from 'antd';
import styles from "../index.module.css";

// Constant
import { ROOT_CONSTANT } from "../../constants";

const { police } = ROOT_CONSTANT.IMG.ICON.MAIN;

const JobSubmitted = () => {
  return (
    <div className={styles.containerSubmitted}>
      <Result
        icon={<img src={police} alt="Police" className={styles.successIcon}/>}
        status="success"
        title={<h1 className={styles.titleSubmitted}>Job Submitted</h1>}
        subTitle={<h1 className={styles.titleSubtitle}>Your job (JB0001) has been successfully submitted. You can check your email for updates on the job status.</h1>}
        extra={[
          <Button key="dashboard" style={{ backgroundColor: '#0276C0', color: 'white', width: "90%" }}>Back to Dashboard</Button>,
          <div className={styles.buttonSpacer} />,
          <Button key="another" style={{ backgroundColor: '#EEEEEE', color: '#7D7D7D', width: "90%", marginLeft: "-10px" }}>Submit Another Job</Button>,
        ]}
      />
    </div>
    
  )
}

export default JobSubmitted;