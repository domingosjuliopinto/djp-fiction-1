import { Layout, theme, Menu } from 'antd';
const { Sider, Content } = Layout;

function Readstory(){
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    
    return(
        <div>
            <Layout style={{background:"none"}}>
                <Sider
                    style={{
                    background: "none",
                    }}
                    trigger={null} collapsible collapsed={true}
                >
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        style={{
                            minHeight: 280,
                            margin: '24px 0px 24px 16px',
                            borderTopLeftRadius: borderRadiusLG,
                            borderBottomLeftRadius: borderRadiusLG,
                        }}
                        items={[
                            {
                            key: '1',
                            label: '1',
                            title:'nav 1'
                            },
                            {
                            key: '2',
                            label: '2',
                            title:'nav 2'
                            },
                            {
                            key: '3',
                            label: '3',
                            title:'nav 3'
                            },
                        ]}
                    />
                </Sider>
                <Content
                    style={{
                        margin: '24px 16px 24px 0px',
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                        borderTopRightRadius: borderRadiusLG,
                        borderBottomRightRadius: borderRadiusLG,
                    }}
                >
                        Content
                </Content>
            </Layout>
            <h1>Read Story</h1>
        </div>
    )
}

export default Readstory