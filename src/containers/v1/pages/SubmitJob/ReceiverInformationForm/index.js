import React from "react";
import {
  Button,
  Form,
  Input,
  Select,
  Space,
  Tooltip,
  Typography,
  Checkbox,
  Row,
  Col,
  DatePicker,
} from "antd";
import styles from "../../index.module.css";
import emitter from "../../../eventBus";
import { useEffect, useState } from "react";

const ReceiverInformationForm = () => {
  /* 

  TODO : CREATE FORM (Just the UI first, functionality later after all ui finished)

*/
  const onFinish = (values) => {
    console.log("Success:", values);
    localStorage.setItem('receiverData', JSON.stringify(values));
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const [form] = Form.useForm();

  useEffect(() => {
    const submitForm = async () => {
      console.log('submit form triggered')
      try {
        const values = await form.validateFields(); 
        localStorage.setItem('receiverData', JSON.stringify(values));// Validates the form fields and returns the values
        console.log(values); // If validation is successful, manually call onFinish with the form values
      } catch (errorInfo) {
        console.log('Validation failed:', errorInfo);
        onFinishFailed()
        // Handle form validation failure here
      }
    };

    emitter.on('next', submitForm)
    // Add dependencies to useEffect if you want the form to be submitted automatically in response to changes
  },[form]); 

  return (
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
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Row gutter={16}>
        <Col span={12}>
          <div className={styles.groupLabel}>Receiver Name</div>
          <Form.Item
            name="name"
            rules={[
              {
                required: true,
                message: "Please enter receiver's name.",
              },
            ]}
            hasFeedback
          >
            <Input placeholder="Name" className={styles.groupChildFull2} />
          </Form.Item>
        </Col>

        <Col span={12}>
          {/* <div className={styles.groupLabel}>Sender Contact</div> */}
          <Form.Item
            name="contact"
            rules={[
              {
                required: true,
                message: "Please enter receiver's contact.",
              },
            ]}
            hasFeedback
          >
            <Input
              placeholder="Contact"
              className={[styles.groupChildFull2, styles.poppinsRegular]}
            />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={16}>
        <Col span={24}>
          {/* <div className={styles.groupLabel}>Sender Address</div> */}
          <Form.Item
            name="address"
            rules={[
              {
                required: true,
                message: "Please enter receiver address",
              },
            ]}
            hasFeedback
          >
            <Input.TextArea
              rows={4}
              placeholder="Receiver Address"
              className={styles.groupChildFullTextArea}
            />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={16}>
        <Col span={8}>
          {/* <div className={styles.groupLabel}>Sender Name</div> */}
          <Form.Item
            name="postcode"
            rules={[
              {
                required: true,
                message: "Please enter receiver's name.",
              },
            ]}
            hasFeedback
          >
            <Input placeholder="Postcode" className={styles.groupChildFull2} />
          </Form.Item>
        </Col>

        <Col span={8}>
          {/* <div className={styles.groupLabel}>Sender Contact</div> */}
          <Form.Item
            name="city"
            rules={[
              {
                required: true,
                message: "Please enter receiver's name.",
              },
            ]}
            hasFeedback
          >
            <Input
              placeholder="City"
              className={[styles.groupChildFull2, styles.poppinsRegular]}
            />
          </Form.Item>
        </Col>

        <Col span={8}>
          {/* <div className={styles.groupLabel}>Sender Contact</div> */}
          <Form.Item
            name="state"
            rules={[
              {
                required: true,
                message: "Please enter receiver's name.",
              },
            ]}
            hasFeedback
          >
            <Input
              placeholder="State"
              className={[styles.groupChildFull2, styles.poppinsRegular]}
            />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={16}>
        <Col span={24}>
          {/* <div className={styles.groupLabel}>Sender Address</div> */}
          <Form.Item
            name="date"
            rules={[
              {
                required: true,
                message: "Please select pickup datetime",
              },
            ]}
            hasFeedback
          >
            <DatePicker
              showTime
              className={styles.groupChildFullDatePicker}
              inputReadOnly
              width="10%"
              placeholder="Preferred drop off datetime"
              // popupStyle={{width: "90%"}}
            />
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
};

export default ReceiverInformationForm;