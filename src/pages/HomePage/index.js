import { BellTwoTone, ExclamationCircleTwoTone, SoundTwoTone } from '@ant-design/icons';
import { Avatar, Card, Col, Image, List, Row, Space, Tag, Typography } from 'antd';
import group1 from 'assets/images/group1.svg';
import group2 from 'assets/images/group2.svg';
import "./index.css";
import { Link } from "react-router-dom";
const { Text } = Typography;


export default function HomePage() {
  return (
    <div>
      <Row>
        <Col span={24} className="gutter-row">
          <Card bordered={false}>
            <Row>
              <Col span={14}>
                <div style={{ fontWeight: "700", fontSize: "24px" }}>Xin chào Trang! </div>
                Chúc bạn ngày tốt lành
              </Col>
              <Col span={10}>
                <div style={{ float: "right" }}>
                  <Avatar style={{ backgroundColor: "white" }} shape="square" size="large" icon={<SoundTwoTone />} />
                  <Avatar style={{ backgroundColor: "white" }} shape="square" size="large" icon={<BellTwoTone />} />
                  <Avatar src={<Image src="https://joeschmoe.io/api/v1/random" />} size="large" />
                </div>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
      <Row>
        {/* ------------- */}
        <Col span={16}>
          {/* ho tro dich vu */}
          <Col span={24} className="gutter-row">
            <Card title={<div style={{ fontWeight: "700", fontSize: "20px", lineHeight: "22px" }}>Hỗ trợ dịch vụ</div>} bordered={false}>
              <Row>
                <Col span={12} className="gutter-row">
                  <Card bordered={false} style={{ backgroundColor: "#D5EAFF" }} hoverable>
                    <Row>
                      <Col span={14}>
                        <div style={{ fontWeight: "700", fontSize: "16px", lineHeight: "18px" }}>Đang xử lý </div>
                        <div style={{ fontWeight: "700", fontSize: "64px", color: "#235DDB" }}>5</div>
                      </Col>
                      <Col span={10}>
                        <div style={{ float: "right" }}>
                          <Image
                            src={group1}
                            preview={{
                              visible: false,
                            }}
                          />
                        </div>
                      </Col>
                    </Row>
                  </Card>
                </Col>
                <Col span={12} className="gutter-row">
                  <Card bordered={false} style={{ backgroundColor: "#D5EAFF" }} hoverable>
                    <Row>
                      <Col span={14}>
                        <div style={{ fontWeight: "700", fontSize: "16px", lineHeight: "18px" }}>Đã yêu cầu</div>
                        <div style={{ fontWeight: "700", fontSize: "64px", color: "#235DDB" }}>2</div>
                      </Col>
                      <Col span={10}>
                        <div style={{ float: "right" }}>
                          <Image
                            src={group2}
                            preview={{
                              visible: false,
                            }}
                          />
                        </div>
                      </Col>
                    </Row>
                  </Card>
                </Col>
              </Row>
            </Card>
          </Col>
          {/* dich vu cua ban */}
          <Col span={24} className="gutter-row">
            <Card title={<div style={{ fontWeight: "700", fontSize: "20px", lineHeight: "22px" }}>Dich vụ của bạn</div>} bordered={false} >
              <Row>
                {/* --------------------------------------------- */}
                <Col span={12} className="gutter-row">
                  <Card bordered={false} style={{ boxShadow: " 0px 10px 22px rgba(29, 22, 23, 0.07)" }} >
                    <Row>
                      <Col span={14}>
                        <div style={{ fontWeight: "700", fontSize: "16px", lineHeight: "18px" }}>Điện đám mây </div>
                        <div style={{ fontWeight: "700", fontSize: "40px", color: "#235DDB" }}>5</div>
                        <div>Hợp đồng</div>
                      </Col>
                      <Col span={10}>
                        <div style={{ float: "right" }}>
                          <Image
                            src='/static/service.png'
                            preview={{
                              visible: false,
                            }}
                          />
                        </div>
                      </Col>
                    </Row>
                  </Card>
                </Col>
                {/* -------------------------------------------------- */}
                <Col span={12} className="gutter-row">
                  <Card bordered={false} style={{ boxShadow: " 0px 10px 22px rgba(29, 22, 23, 0.07)" }}>
                    <Row>
                      <Col span={14}>
                        <div style={{ fontWeight: "700", fontSize: "16px", lineHeight: "18px" }}>Điện đám mây </div>
                        <div style={{ fontWeight: "700", fontSize: "40px", color: "#235DDB" }}>5</div>
                        <div>Hợp đồng</div>
                      </Col>
                      <Col span={10}>
                        <div style={{ float: "right" }}>
                          <Image
                            src='/static/service.png'
                            preview={{
                              visible: false,
                            }}
                          />
                        </div>
                      </Col>
                    </Row>
                  </Card>
                </Col>
                {/* -------------------------------------------------- */}
                <Col span={12} className="gutter-row" >
                  <Card bordered={false} style={{ boxShadow: " 0px 10px 22px rgba(29, 22, 23, 0.07)" }}>
                    <Row>
                      <Col span={14}>
                        <div style={{ fontWeight: "700", fontSize: "16px", lineHeight: "18px" }}>Điện đám mây </div>
                        <div style={{ fontWeight: "700", fontSize: "40px", color: "#235DDB" }}>5</div>
                        <div>Hợp đồng</div>
                      </Col>
                      <Col span={10}>
                        <div style={{ float: "right" }}>
                          <Image
                            src='/static/service2.svg'
                            preview={{
                              visible: false,
                            }}
                          />
                        </div>
                      </Col>
                    </Row>
                  </Card>
                </Col>
                {/* -------------------------------------------------- */}
                <Col span={12} className="gutter-row">
                  <Card bordered={false} style={{ boxShadow: " 0px 10px 22px rgba(29, 22, 23, 0.07)" }}>
                    <Row>
                      <Col span={14}>
                        <div style={{ fontWeight: "700", fontSize: "16px", lineHeight: "18px" }}>Điện đám mây </div>
                        <div style={{ fontWeight: "700", fontSize: "40px", color: "#235DDB" }}>5</div>
                        <div>Hợp đồng</div>
                      </Col>
                      <Col span={10}>
                        <div style={{ float: "right" }}>
                          <Image
                            src='assets/images/service2.svg'
                            preview={{
                              visible: false,
                            }}
                          />
                        </div>
                      </Col>
                    </Row>
                  </Card>
                </Col>
                {/* -------------------------------------------------- */}
              </Row>
            </Card>
          </Col>
          {/* ------- */}
        </Col>
        {/* theo doi cuoc phi */}
        <Col span={8} className="gutter-row">
          <Card bordered={false} style={{ background: "#FFE1E1" }}>
            <Card
              title="Đầu số thoại"
              extra={<Tag color="blue" style={{ borderRadius: "10px", fontWeight: "600", fontSize: "14px", lineHeight: "21px", float: "right" }}><ExclamationCircleTwoTone /> Chi tiết</Tag>}
            >
              <List>
                <List.Item>
                  <Space direction="vertical">
                    <Text style={{ fontWeight: "400", fontSize: "12px", lineHeight: "16px", color: "#74858C" }}>Số hợp đồng</Text>
                    <Text style={{ fontWeight: "400", fontSize: "14px", lineHeight: "21px" }}>SVGO122334</Text>
                  </Space>
                </List.Item>
                <List.Item>
                  <Space direction="horizontal" size={50}>
                    <Space direction="vertical">
                      <Text style={{ fontWeight: "400", fontSize: "12px", lineHeight: "16px", color: "#74858C" }}>Số hóa đơn</Text>
                      <Text style={{ fontWeight: "400", fontSize: "14px", lineHeight: "21px" }}>MFHK0067182</Text>
                    </Space>
                    <Space direction="vertical">
                      <Text style={{ fontWeight: "400", fontSize: "12px", lineHeight: "16px", color: "#74858C" }}>Nội dung cước</Text>
                      <Text style={{ fontWeight: "400", fontSize: "14px", lineHeight: "21px" }}>Cước tháng 10</Text>
                    </Space>
                  </Space>
                </List.Item>
                <List.Item>
                  <Space direction="horizontal" size={50}>
                    <Space direction="vertical" >
                      <Text style={{ fontWeight: "400", fontSize: "12px", lineHeight: "16px", color: "#74858C" }}>Ngày thanh toán</Text>
                      <Text style={{ fontWeight: "600", fontSize: "14px", lineHeight: "21px", color: "#0F9800" }}>22/10/2021</Text>
                    </Space>
                    <Space direction="vertical">
                      <Text style={{ fontWeight: "600", fontSize: "20px", lineHeight: "26px", color: "#D60E0E" }}>1.000.000 Đ </Text>
                    </Space>
                  </Space>
                </List.Item>
              </List>
            </Card>
            {/* -------------------------------------------- */}
            <br></br>
            <Card
              title="Đầu số thoại"
              extra={<Tag color="blue" style={{ borderRadius: "10px", fontWeight: "600", fontSize: "14px", lineHeight: "21px", float: "right" }}><ExclamationCircleTwoTone /> Chi tiết</Tag>}
            >
              <List style={{ backgroundColor: "white", padding: "10px", borderRadius: "10px" }}>
                <List.Item>
                  <Space direction="vertical">
                    <Text style={{ fontWeight: "400", fontSize: "12px", lineHeight: "16px", color: "#74858C" }}>Số hợp đồng</Text>
                    <Text style={{ fontWeight: "400", fontSize: "14px", lineHeight: "21px" }}>SVGO122334</Text>
                  </Space>
                </List.Item>

                <List.Item>
                  <Space direction="horizontal" size={50}>
                    <Space direction="vertical">
                      <Text style={{ fontWeight: "400", fontSize: "12px", lineHeight: "16px", color: "#74858C" }}>Số hóa đơn</Text>
                      <Text style={{ fontWeight: "400", fontSize: "14px", lineHeight: "21px" }}>MFHK0067182</Text>
                    </Space>
                    <Space direction="vertical">
                      <Text style={{ fontWeight: "400", fontSize: "12px", lineHeight: "16px", color: "#74858C" }}>Nội dung cước</Text>
                      <Text style={{ fontWeight: "400", fontSize: "14px", lineHeight: "21px" }}>Cước tháng 10</Text>
                    </Space>
                  </Space>
                </List.Item>
                <List.Item>
                  <Space direction="horizontal" size={50}>
                    <Space direction="vertical" >
                      <Text style={{ fontWeight: "400", fontSize: "12px", lineHeight: "16px", color: "#74858C" }}>Ngày thanh toán</Text>
                      <Text style={{ fontWeight: "600", fontSize: "14px", lineHeight: "21px", color: "#0F9800" }}>22/10/2021</Text>
                    </Space>
                    <Space direction="vertical">
                      <Text style={{ fontWeight: "600", fontSize: "20px", lineHeight: "26px", color: "#D60E0E" }}>1.000.000 Đ </Text>
                    </Space>
                  </Space>
                </List.Item>
              </List>
            </Card>
          </Card>
        </Col>
      </Row>
    </div>
  )
}
