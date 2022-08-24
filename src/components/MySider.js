import { Layout, Menu } from 'antd'
import { Link, Route } from "react-router-dom";
import { PieChartOutlined, DesktopOutlined, ContainerOutlined } from '@ant-design/icons'
import RouteName from 'routes/RouteName';
const { Sider } = Layout


export default function MySider(props) {
    function getItem(label, key, icon) {
        return {
            label,
            key,
            icon
        };
    }
    const items = [
        getItem((
            <Link to={RouteName.HomePage.Path}>Home</Link>
        ), '/home', <PieChartOutlined />),
        getItem((
        <Link to={RouteName.ProductPage.Path}>product</Link>), '/product', <DesktopOutlined />
        ),
    ]
    return (
        <Sider style={{ backgroundColor: "white" }}>
            <Menu
                defaultSelectedKeys={[[props.selectedKey]]}
                defaultOpenKeys={['sub1']}
                mode="inline"
                theme="light"
                items={items}
                style={{ marginTop: "10vh" }}
            />
        </Sider>
    )
}