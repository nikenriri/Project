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
  Card,
  Radio,
  message,
  Upload,
} from "antd";
import styles from "../../index.module.css";
import { CloseOutlined, PlusOutlined, LoadingOutlined } from "@ant-design/icons";
import { useState, useEffect } from "react";
// Constant
import { ROOT_CONSTANT } from "../../../constants";
import emitter from "../../../eventBus";

const getBase64 = (img, callback) => {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
};
const beforeUpload = (file) => {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJpgOrPng && isLt2M;
};
/* 

TODO : CREATE FORM (Just the UI first, functionality later after all ui finished)

*/

const JobInformationForm = () => {

 
  const { dry, ambient, chill, frozen } = ROOT_CONSTANT.IMG.ICON.TEMP_LOGO;
  const onFinish = (values) => {
    console.log("Success:", values);
    localStorage.setItem('jobData', JSON.stringify(values))
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const vehicleType = [
    {
      value: "1",
      label: "Dry",
      tempRange: "25°C to 35°C",
      img: dry
    },
    {
      value: "2",
      label: "Ambient",
      tempRange: "15°C to 25°C",
      img: ambient
    },
    {
      value: "3",
      label: "Chill",
      tempRange: "0°C to 15°C",
      img: chill,
    },
    {
      value: "4",
      label: "Frozen",
      tempRange: "-20°C to 0°C",
      img: frozen
    },
  ];



  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState();
  const handleChange = (info) => {
    if (info.file.status === 'uploading') {
      setLoading(true);
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (url) => {
        setLoading(false);
        setImageUrl(url);
      });
    }
  };
  const uploadButton = (
    <button
      style={{
        border: 0,
        background: 'none',
      }}
      type="button"
    >
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </button>
  );

  const [form] = Form.useForm();

  useEffect(() => {
    const submitForm = async () => {
      console.log('submit form triggered')
      try {
        const values = await form.validateFields(); 
        localStorage.setItem('jobData', JSON.stringify(values));// Validates the form fields and returns the values
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
        <Col span={24}>
          <Form.List name="items">
            {(fields, { add, remove }) => (
              <>
              <div>
                <p style={{textAlign: "left", display: "inline-block"}}> Item Quantity </p>
             
                <Button type="dashed" onClick={() => add()}>
                  + Add Item
                </Button>
              </div>
              <div
                style={{
                  display: "flex",
                  rowGap: 16,
                  flexDirection: "column",
                }}
              >
                {fields.map((field) => (
                  <Card
                    size="small"
                    title={`Item ${field.name + 1}`}
                    key={field.key}
                    extra={
                      <CloseOutlined
                        onClick={() => {
                          remove(field.name);
                        }}
                      />
                    }
                    style={{backgroundColor: "#DFDFDF"}}
                  >
                    <Form.Item name={[field.name, "name"]}>
                      <Input />
                    </Form.Item>

                    {/* Nest Form.List */}
                    <Form.Item>
                      <Form.List>
                        {(subFields, subOpt) => (
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              rowGap: 16,
                            }}
                          >
                            {subFields.map((subField) => (
                              <Space key={subField.key}>
                                <Form.Item
                                  noStyle
                                  name={[subField.name, "length"]}
                                >
                                  <Input placeholder="Length(cm)" />
                                </Form.Item>
                                <Form.Item
                                  noStyle
                                  name={[subField.name, "width"]}
                                >
                                  <Input placeholder="Width(cm)" />
                                </Form.Item>
                                <Form.Item
                                  noStyle
                                  name={[subField.name, "height"]}
                                >
                                  <Input placeholder="Height(cm)" />
                                </Form.Item>
                                <Form.Item
                                  noStyle
                                  name={[subField.name, "weight"]}
                                >
                                  <Input placeholder="Weight(kg)" />
                                </Form.Item>
                                
                              </Space>
                            ))}
                          </div>
                        )}
                      </Form.List>
                    </Form.Item>
                  </Card>
                ))}
              </div>
              </>
            )}
          </Form.List>
        </Col>
      </Row>

      <Row gutter={16}>
        <Col span={24}>
          <Form.Item
            label="Item Description"
            name="Description"
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
      </Row>

      <Row gutter={16}>
        <Col span={24}>
          <Form.Item
            label="Item Value"
            name="Eg: seafood"
            rules={[
              {
                required: true,
                message: "Please enter sender's name.",
              },
            ]}
            hasFeedback
          >
            <Input
              addonBefore="RM"
              placeholder=""
              className={styles.groupChildFull2}
            />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={16}>
        <Col span={24}>

          <Form.Item
            name="type"
            label="Temperature Requirement"
            rules={[
              {
                required: true,
                message: "Please choose the temperature required.",
              },
            ]}
          >
            <div style={{ height: "75px" }}>
              <Radio.Group defaultValue={1}>
                <Space>
                  {vehicleType.map((data) => {
                    return (
                      <Radio.Button
                        key={data.value}
                        value={data.value}
                        className={styles.radioBox}
                      >
                        <img
                          className={styles.imgRadio}
                          src={data.img}
                          alt=""
                        />
                        {data.label}
                        <p style={{ fontSize: '8px' }}>
                          {data.tempRange}
                        </p>
                      </Radio.Button>
                    );
                  })}
                </Space>
              </Radio.Group>
            </div>
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
            label="Images"
            hasFeedback
          >
            <Upload
              style={{float: "left"}}
              name="avatar"
              listType="picture-card"
              className="avatar-uploader"
              showUploadList={true}
              beforeUpload={beforeUpload}
              onChange={handleChange}
            >
              {imageUrl ? (
                <img
                  src={imageUrl}
                  alt="avatar"
                  style={{
                    width: '100%',
                  }}
                />
              ) : (
                uploadButton
              )}
            </Upload>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
};

export default JobInformationForm;
