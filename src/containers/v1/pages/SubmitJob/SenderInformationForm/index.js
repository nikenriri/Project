import React, { useEffect } from "react";
import { Form, Input, Select, Row, Col, DatePicker, Button } from "antd";
import styles from "../../index.module.css";
import emitter from "../../../eventBus";

const { Option } = Select;

const SenderInformationForm = () => {
  const states = ["State 1", "State 2", "State 3", "State 4"];

  const onFinish = (values) => {
    console.log("Success:", values);
    localStorage.setItem('senderData', JSON.stringify(values));
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
        localStorage.setItem('senderData', JSON.stringify(values));// Validates the form fields and returns the values
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
      form={form}
    >
      <Row gutter={16}>
        <Col span={12}>
          <div className={styles.groupLabel}>Sender Name</div>
          <Form.Item
            name="name"
            rules={[
              {
                required: true,
                message: "Please enter sender's name.",
              },
            ]}
            hasFeedback
          >
            <Input placeholder="Name" className={styles.groupChildFull2} />
          </Form.Item>
        </Col>

        <Col span={12}>
          <Form.Item
            name="contact"
            rules={[
              {
                required: true,
                message: "Please enter sender's contact.",
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
          <Form.Item
            name="address"
            rules={[
              {
                required: true,
                message: "Please enter sender address",
              },
            ]}
            hasFeedback
          >
            <Input.TextArea
              rows={4}
              placeholder="Sender Address"
              className={styles.groupChildFullTextArea}
            />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={16}>
        <Col span={8}>
          <Form.Item
            name="postcode"
            rules={[
              {
                required: true,
                message: "Please enter postcode.",
              },
            ]}
            hasFeedback
          >
            <Input placeholder="Postcode" className={styles.groupChildFull2} />
          </Form.Item>
        </Col>

        <Col span={8}>
          <Form.Item
            name="city"
            rules={[
              {
                required: true,
                message: "Please enter city.",
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
          <Form.Item
            name="state"
            rules={[
              {
                required: true,
                message: "Please enter state.",
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
              // popupStyle={{width: "90%"}}
            />
          </Form.Item>
        </Col>
      </Row>

      <Button htmlType="submit">
            Submit
      </Button>
    </Form>
  );
};

export default SenderInformationForm;
