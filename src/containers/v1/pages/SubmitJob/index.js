import React, { useState } from "react";
import { Tabs, Button, message, Steps, theme, Row, Col, Divider,  Modal, Form, Input, Space, Radio, InputNumber } from "antd";
import "./index.css";
import SenderInformationForm from "./SenderInformationForm";
import ReceiverInformationForm from "./ReceiverInformationForm";
import JobInformationForm from "./JobInformationForm";
import JobSummaryForm from "./JobSummaryForm";
import PriceInformationForm from "./PriceInformationForm";
import { ROOT_CONSTANT } from "../../constants";
import { Navigate, useNavigate } from "react-router";
import styles from "../index.module.css"
import emitter from "../../eventBus";

const { ddmovelogo } = ROOT_CONSTANT.IMG.ICON.MAIN;
const { blueLine } = ROOT_CONSTANT.IMG.ICON.LOGO;

const SubmitJob = (props) => {
  const { icon_left } = ROOT_CONSTANT.IMG.ICON.LOGO;
  const steps = [
    {
      title: "Sender Information",
      content: <SenderInformationForm />,
    },
    {
      title: "Receiver Information",
      content: <ReceiverInformationForm />,
    },
    {
      title: "Job Information",
      content: <JobInformationForm />,
    },
    {
      title: "Job Summary",
      content: <JobSummaryForm />,
    },
    {
      title: "Price Information",
      content: <PriceInformationForm />,
    },
  ];

  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);
  const next = () => {
    setCurrent(current + 1);
    emitter.emit('next');
  };
  const prev = () => {
    setCurrent(current - 1);
  };
  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
  }));
  const contentStyle = {
    lineHeight: "260px",
    textAlign: "center",
    color: token.colorTextTertiary,
    marginTop: 16,
    height: "70vh",
    width: "90%",
    margin: "0 auto",
  };

  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleClose = () => {
    setIsModalVisible(false);
  };

  const [formData, setFormData] =useState({name: '', number: '', email: ''})

  const handleChange = (e) => {
      const {name, value} = e.target;
      setFormData({ ...formData, [name]: value})
  };

  const handleSubmit = () => {
    localStorage.setItem('formData', JSON.stringify(formData));
    navigate('/job-submitted')
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const navigate = useNavigate()

  return (
    <>
      <h1 style={{ margin: "20px 0" }}> Submit Job Page </h1>
      <Steps current={current} items={items} responsive={false} size="50px" />

      <div style={contentStyle}>{steps[current].content}</div>
      <div
        style={{
          marginTop: 24,
        }}
      >
        {current < steps.length - 1 && (
          <Button
            type="primary"
            onClick={() => next()}
            style={{
              backgroundColor: "#0276C0",
              width: "80%",
              margin: "0 auto",
              position: "absolute",
              left: 0,
              right: 0,
              bottom: "10%",
              textAlign: "center",
              display: current === steps.length - 1 ? "none" : "block",
            }}
          >
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button
            type="primary"
            onClick={showModal}
            style={{
              backgroundColor: "#0276C0",
              width: "80%",
              margin: "0 auto",
              position: "absolute",
              left: 0,
              right: 0,
              bottom: "10%",
              textAlign: "center",
              color: "white",
            }}
          >
            Submit Job
          </Button>
        )}
        {current > 0 && (
          <Button
            style={{
              backgroundColor: "#0276C0",
              width: "80%",

              margin: "0 auto",
              position: "absolute",
              left: 0,
              right: 0,
              bottom: "15%",
              textAlign: "center",
              color: "white",
            }}
            onClick={() => prev()}
          >
            Previous
          </Button>
        )}
      </div>

      <div>
        <Modal
          visible={isModalVisible}
          onCancel={handleClose}
          footer={[
            <div key="footer-content">
            <Button 
              key="close" 
              type="primary" 
              onClick={handleSubmit}
              style={{ 
                display: 'block', 
                margin: 'auto', 
                width: '252px',
                height: '40px',
                backgroundColor: '#0276C0'
              }}
            >
              Confirm Submission
            </Button>
            <p style={{ textAlign: 'justify', marginTop: '10px', fontSize: '9px', margin: '10px', color: '#979797'}}>By clicking "Confirm Submission," you acknowledge that the information provided is accurate, and you consent to receiving job status updates via the provided email.</p>
          </div>
          ]}
        >
          <div>
            <div style={{ display: 'block' }}>
              <img src={ddmovelogo} alt='ddmovelogo' style={{ height: '41px', width: '123px', verticalAlign: 'top' }} />
            </div>
            <div style={{ display: 'block' }}>
              <img src={blueLine} alt='line' style={{ width: '32px', float: 'left', verticalAlign: 'top', marginTop: '10px' }} />
            </div>
            <div style={{ display: 'block' }}>
              <h1 style={{ fontSize: '10px', color: 'black', marginTop: '40px'}}>
                To complete your job submission, please enter your contact details:
              </h1>
            </div>
          </div>

          <div style={{padding: '10px', width: '300px' }}>
          <Form
            name="basic"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            style={{
              margin: "20px auto 0",
            }}
            initialValues={{
              remember: true,
            }}
          >

            <Row gutter={16}>
              <Col span={24}>
                <Form.Item
                  name="Name"
                  rules={[
                    {
                      required: true,
                      message: "Please enter sender's phone name.",
                    },
                  ]}
                  hasFeedback
                >
                  <Input
                    placeholder="Your Name"
                    className={styles.groupChildFull3}
                    style={{height: '50px'}}
                    onChange={handleChange}
                    value={formData.name}
                  />
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={16}>
              <Col span={24}>
                <Form.Item
                  name="Mobile Number"
                  rules={[
                    {
                      required: true,
                      message: "Please enter sender's phone number.",
                    },
                  ]}
                  hasFeedback
                >
                  <Input
                    addonBefore="+60"
                    placeholder="Mobile Number"
                    className={styles.groupChildFull3}
                    onChange={handleChange}
                    value={formData.number}
                  />
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={16}>
              <Col span={24}>
                <Form.Item
                  name="Email"
                  rules={[
                    {
                      required: true,
                      message: "Please enter sender's phone email.",
                    },
                  ]}
                  hasFeedback
                >
                  <Input
                    placeholder="Email"
                    className={styles.groupChildFull3}
                    style={{height: '50px'}}
                    onChange={handleChange}
                    value={formData.email}
                  />
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </div>
        </Modal>
      </div>
    </>
  );
};

export default SubmitJob;
