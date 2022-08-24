import { Button, DatePicker, Form, Input, Layout, Space, Typography } from 'antd';
import background from 'assets/images/background.svg';
import logo from 'assets/images/logo.svg';
import { isMobile } from 'react-device-detect';

import styles from './index.module.css';
const { Title, Paragraph } = Typography;

export default function LoginScreen() {
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };

  return (
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
              <Title level={3}>Đặt mật khẩu</Title>
            </Space>
          </Form.Item>
          <Form.Item
            label={<label className={styles.labelStyle}>Mật khẩu</label>}
            name="password"
            rules={[
              {
                required: true,
                message: 'Vui lòng điền mật khẩu',
              },
            ]}
          >
            <Input.Password className={styles.input} placeholder="Nhập mật khẩu" />
          </Form.Item>

          <Form.Item
            label={<label className={styles.labelStyle}>Nhập lại mật khẩu</label>}
            name="confirmPassword"
            rules={[
              {
                required: true,
                message: 'Vui lòng nhập lại mật khẩu',
              },
            ]}
          >
            <Input.Password className={styles.input} placeholder="Nhập lại mật khẩu" />
          </Form.Item>

          <Form.Item
            label={<label className={styles.labelStyle}>Mã xác thực</label>}
            name="code"
            rules={[
              {
                required: true,
                message: 'Vui lòng điền mã xác thực',
              },
            ]}
          >
            <Input.Password className={styles.input} placeholder="Nhập mã xác thực" />
          </Form.Item>

          <Form.Item>
            <Paragraph className={styles.paragraph}>
              Vui lòng xác thực bằng mẫ xác thực gồm 6 ký tự đã được gửi đến email
            </Paragraph>
          </Form.Item>

          <Form.Item>
            <Button
              size="middle"
              type="primary"
              htmlType="submit"
              style={{
                fontWeight: 'bold',
                width: '100%',
                textTransform: 'uppercase',
              }}
              className={styles.buttonSubmit}
            >
              Tiếp theo
            </Button>
          </Form.Item>
        </Form>
      </Layout>
    </Layout>
  );
}
