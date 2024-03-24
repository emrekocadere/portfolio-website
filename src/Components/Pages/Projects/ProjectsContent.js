import React from 'react';
import { ConfigProvider } from 'antd';
import { Card, Col, Row } from 'antd';



const ProjectsContent = () => (


<div>

<ConfigProvider
    theme={{
      token: {
        // Seed Token
        colorPrimary: '#00b96b',
        borderRadius: 2,

        // Alias Token
        colorBgContainer: '#f6ffed',
      },
    }}
  >

<Row gutter={40} >

    <Col span={8} >
      <Card title="Card title" bordered={true} style={{borderStyle: "solid", borderWidth: "0.2vw", borderColor: "#A838D8",backgroundColor:"rgba(67, 22, 86, 0.6 )",color:"white"}}>
        Card content
      </Card>
    </Col>

    <Col span={8}>
      <Card title="Card title" bordered={false}>
        Card content
      </Card>
      </Col>
 

    <Col span={8}>
      <Card title="Card title" bordered={false}>
        Card content
      </Card>
    </Col>

    <Col span={8}>
      <Card title="Card title" bordered={false}>
        Card content
      </Card>
    </Col>
    
    <Col span={8}>
      <Card title="Card title" bordered={false}>
        Card content
      </Card>
    </Col>

    <Col span={8}>
      <Card title="Card title" bordered={false}>
        Card content
      </Card>
    </Col>

  </Row>
  </ConfigProvider>

</div>
  
  

);
export default ProjectsContent;