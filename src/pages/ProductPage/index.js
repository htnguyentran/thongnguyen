import MyLayout from 'components/MyLayout';
import { Card, Col, Row } from 'antd';
export default function ProductPage() {
    return (
        <Row >
            <Col span={24} className="gutter-row">
                <Card bordered={false}>
                    <Row>
                        <Col span={14}>
                            <div style={{ fontWeight: "700", fontSize: "24px" }}>Xin chào Trang! </div>
                            Chúc bạn ngày tốt lành
                        </Col>
                    </Row>
                </Card>
            </Col>
        </Row>
    )
}