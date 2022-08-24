import { Button, DatePicker, Form, Input, Layout, Space, Typography } from 'antd';
import background from 'assets/images/background.svg';
import logo from 'assets/images/logo.svg';
import CustomModal from 'components/CustomModal';
import { useState } from 'react';
import { isMobile } from 'react-device-detect';

import styles from './index.module.css';
const { Title } = Typography;

export default function UpdatePasswordPage() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Layout
        className={styles.background}
        style={{
          backgroundImage: `url(${background})`,
        }}
      >
        <img src={logo} alt={'logo'} className={`${styles.logo} ${isMobile && styles.logoMobile}`} />
        <Layout className={`${styles.containerForm} ${isMobile && styles.containerFormMobile}`}>
          <Form
            name="basic"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            className={styles.formUpdateInfo}
            layout={'vertical'}
          >
            <Form.Item>
              <Space direction="horizontal" style={{ width: '100%', justifyContent: 'center' }}>
                <Title level={3}>Cập nhập thông tin</Title>
              </Space>
            </Form.Item>
            <Form.Item
              label={<label className={styles.labelStyle}>Họ và tên</label>}
              name="fullname"
              rules={[
                {
                  required: true,
                  message: 'Vui lòng điền họ và tên',
                },
              ]}
            >
              <Input className={styles.input} placeholder="Nhập họ và tên" />
            </Form.Item>

            <Form.Item
              label={<label className={styles.labelStyle}>Email</label>}
              name="email"
              rules={[
                {
                  required: true,
                  message: 'Vui lòng diền email',
                },
              ]}
            >
              <Input className={styles.input} placeholder="Nhập email" />
            </Form.Item>

            <Form.Item
              label={<label className={styles.labelStyle}>Số điện thoại</label>}
              name="phonenumber"
              rules={[
                {
                  required: true,
                  message: 'Vui lòng diền số điện thoại',
                },
              ]}
            >
              <Input className={styles.input} placeholder="Nhập số điện thoại" />
            </Form.Item>

            <Form.Item
              label={<label className={styles.labelStyle}>Ngày sinh</label>}
              name="dateofbirth"
              rules={[
                {
                  required: true,
                  message: 'Vui lòng chọn ngày sinh',
                },
              ]}
            >
              <DatePicker
                className={styles.input}
                onChange={onChange}
                style={{ width: '100%' }}
                placeholder="Chọn ngày sinh"
              />
            </Form.Item>

            <Form.Item>
              <Button
                size="middle"
                type="primary"
                // htmlType="submit"
                style={{
                  fontWeight: 'bold',
                  width: '100%',
                  textTransform: 'uppercase',
                  marginTop: '2rem',
                }}
                className={styles.buttonSubmit}
                onClick={showModal}
              >
                Tiếp theo
              </Button>
            </Form.Item>
          </Form>
        </Layout>
      </Layout>
      <CustomModal title="Basic Modal" visible={isModalVisible} handleSubmit={handleOk} handleCancel={handleCancel} />
    </>
  );
}
