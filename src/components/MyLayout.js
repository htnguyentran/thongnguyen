import "antd/dist/antd.css";
import MySider from 'components/MySider';
import { Layout } from 'antd'
const { Footer, Content } = Layout

export default function MyLayout({ children }) {
    return (
        <Layout style={{ minHeight: "100vh" }}>
            <MySider />
            <Layout>
                <Content
                    style={{
                        padding: "1vh",
                        minHeight: "100vh",
                    }}
                >
                    <div>
                        {children}
                    </div>
                </Content>
            </Layout>
            <Footer>
            </Footer>
        </Layout>
    )
}