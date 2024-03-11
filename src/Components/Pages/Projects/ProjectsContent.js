import React from 'react';
import { ConfigProvider } from 'antd';
import { Card, Col, Row } from 'antd';


const ProjectsContent = () => (

  <Row gutter={40} >

    <Col span={8} style={{}}>
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

    <Col span={8}>
      <Card title="Card title" bordered={false}>
        Card content
      </Card>
    </Col>

  </Row>

);
export default ProjectsContent;