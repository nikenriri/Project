import React, {useEffect, useState} from "react";
import { Row, Col } from 'antd'
import styles from "../../index.module.css"
import { ROOT_CONSTANT } from "../../../constants";

const { map_logo, location_logo } = ROOT_CONSTANT.IMG.ICON.LOGO;
const { rectangleUpload, rectangleImage } = ROOT_CONSTANT.IMG.ICON.UPLOAD;

const JobSummaryForm = () => {
  /* 

TODO : CREATE FORM (Just the UI first, functionality later after all ui finished)

*/
const [senderData, setSenderData] = useState(null);
const [receiverData, setReceiverData] = useState(null);
const [jobData, setJobData] = useState(null);

useEffect(() => {
  // Simulasikan pengambilan data dari localStorage atau sumber data lainnya
  const storedSenderData = localStorage.getItem('senderData');
  const storedReceiverData = localStorage.getItem('receiverData');
  const storedJobData = localStorage.getItem('jobData');

  if (storedSenderData) {
    setSenderData(JSON.parse(storedSenderData));
    console.log(senderData);
  }
  if (storedReceiverData) {
    setReceiverData(JSON.parse(storedReceiverData));
  }
  if (storedJobData) {
    setJobData(JSON.parse(storedJobData));
  }
}, []);



return (
  <div>
    <Row>
      <Col flex="auto"><h1 className={styles.labelSummary}>Sender Information</h1></Col>
      <Col flex="100px"><h1 className={styles.labelEdit}>Edit</h1></Col>
      <h1 className={styles.senderInfo}>{senderData.name}/ {senderData.contact}</h1>
    </Row>

    <Row>
      <Col flex="20px"><img src={map_logo} alt="map-logo" width="40%" style={{display: "block",  margin: 0, marginLeft: '30px', marginTop: '10px'}}/></Col>
      <Col flex="auto">
        <h1 className={styles.senderInfo2}>{senderData.address}, {senderData.city}, {senderData.postcode}, {senderData.state}</h1>
        <h1 className={styles.senderInfo2}>Preferred pick up at 23/11/2024 16:33</h1>
      </Col>
    </Row>

    <Row>
      <Col flex="auto"><h1 className={styles.labelSummary}>Receiver Information</h1></Col>
      <Col flex="100px"><h1 className={styles.labelEdit}>Edit</h1></Col>
      <h1 className={styles.senderInfo}>{receiverData.name}/ {receiverData.contact}</h1>
    </Row>
    <Row>
      <Col flex="20px"><img src={location_logo} alt="map-logo" width="40%" style={{display: "block",  margin: 0, marginLeft: '30px', marginTop: '10px'}}/></Col>
      <Col flex="auto">
        <h1 className={styles.senderInfo2}>{receiverData.address}, {receiverData.postcode}, {receiverData.city}, {receiverData.state}</h1>
        <h1 className={styles.senderInfo2}>Preferred drop off at 23/11/2024 16:33</h1>
      </Col>
    </Row>

    <Row>
      <Col flex="auto"><h1 className={styles.labelSummary}>Job Information</h1></Col>
      <Col flex="100px"><h1 className={styles.labelEdit}>Edit</h1></Col>
    </Row>
    <Row>
      <Col flex="100px"><h1 className={styles.jobInfo}>Item Quantity</h1></Col>
      <Col flex="auto"><h1 className={styles.jobInfo2}>4 Pieces (5cm x 5cm x 1cm x 10kg)</h1></Col>
    </Row>
    <Row>
      <Col flex="auto"><h1 className={styles.jobInfo}>Item Description</h1></Col>
      <Col flex="100px"><h1 className={styles.jobInfo2}>Seafood</h1></Col>
    </Row>
    <Row>
      <Col flex="auto"><h1 className={styles.jobInfo}>Item Value (RM)</h1></Col>
      <Col flex="100px"><h1 className={styles.jobInfo2}>1000</h1></Col>
    </Row>
    <Row>
      <Col flex="auto"><h1 className={styles.jobInfo}>Temperature Requirement</h1></Col>
      <Col flex="150px"><h1 className={styles.jobInfo2}>{jobData.type}</h1></Col>
    </Row>

    <Row>
      <Col flex="auto"><h1 className={styles.labelSummary}>Images (Max3)</h1></Col>
    </Row>
    <Row>
      <Col flex="50px"><img src={rectangleImage} alt="upload-images" width="69px" height="69px" style={{display: 'block', margin: 0, marginLeft: '30px', marginTop: '20px',  border: '1px solid #DFDFDF', borderRadius: '4px'}}/></Col>
      <Col flex="20px">
        <div 
          style={{ 
            border: '1px solid #DFDFDF', // Border luar
            borderRadius: '4px', // Border radius luar
            width: '69px',
            height: '69px',
            marginTop: '20px',
            marginLeft: '5px',
            position: 'relative', // Menambahkan posisi relatif agar tulisan dapat ditempatkan di dalam border
          }}
        >
          <div 
            style={{ 
              border: '1px dotted #DFDFDF', // Border dalam
              borderRadius: '4px', // Border radius dalam
              padding: '5px', // Padding dalam untuk membuat ruang antara border dalam dan konten
              position: 'absolute', // Menambahkan posisi absolut agar tulisan dapat ditempatkan di dalam border
              top: '5px', // Mengatur jarak dari atas
              left: '5px', // Mengatur jarak dari kiri
              right: '5px', // Mengatur jarak dari kanan
              bottom: '5px', // Mengatur jarak dari bawah
              overflow: 'hidden', // Mengatur overflow agar teks yang lebih panjang tidak keluar dari border
            }}
          >
            <h1 style={{ margin: 0, color: '#979797', fontSize: '9px', fontFamily: 'Poppins', marginTop: '17px' }}>+Upload</h1> {/* Tambahkan gaya CSS untuk tulisan */}
          </div>
        </div>
      </Col>
    </Row>
    
  </div>
);
};

export default JobSummaryForm;
