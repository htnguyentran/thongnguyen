import { Button, Modal } from 'antd';
import React from 'react';

const CustomModal = (props) => {
  const { title = '', visible = false, handleSubmit = () => {}, handleCancel = () => {}, children } = props;

  return (
    <Modal
      title={title}
      visible={visible}
      onOk={handleSubmit}
      onCancel={handleCancel}
      footer={
        <Button key="submit" type="primary" onClick={handleSubmit}>
          Submit
        </Button>
      }
    >
      {children}
    </Modal>
  );
};

export default CustomModal;
