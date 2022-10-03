import React, {useState}  from "react";
import UnderConstruct from "../../assets/work-in-progress.png";
import {
  ArrowDownOutlined,
  ArrowUpOutlined,
  LikeOutlined,
} from "@ant-design/icons";
import { Card, Col, Row, Statistic, Button } from "antd";
import "./dasboard.css"

const Dashboard = () => {
  const [loadings, setLoadings] = useState([]);

  const enterLoading = (index) => {
    setLoadings((prevLoadings) => {
      const newLoadings = [...prevLoadings];
      newLoadings[index] = true;
      return newLoadings;
    });
    setTimeout(() => {
      setLoadings((prevLoadings) => {
        const newLoadings = [...prevLoadings];
        newLoadings[index] = false;
        return newLoadings;
      });
    }, 6000);
  };
  
  return (
    <div>
      <div style={{ padding: "30px", background: "#ececec" }}>
        <Row gutter={16}>
          <Col span={12}>
            <Card className="card1">
              <Statistic
                title="Active"
                value={11.28}
                precision={2}
                valueStyle={{
                  color: "#3f8600",
                }}
                prefix={<ArrowUpOutlined />}
                suffix="%"
              />
            </Card>
          </Col>
          <Col span={12}>
            <Card className="card1">
              <Statistic
                title="Idle"
                value={9.3}
                precision={2}
                valueStyle={{
                  color: "#cf1322",
                }}
                prefix={<ArrowDownOutlined />}
                suffix="%"
              />
            </Card>
          </Col>
        </Row>
      </div>

      <div style={{ padding: "30px", background: "#ececec" }}>
        <Row gutter={16}>
          <Col span={12}>
            <Card className="card2">
              <Statistic
                title="Active Users"
                value={112893}
              />
            </Card>
          </Col>
          <Col span={12}>
            <Card className="card2">
              <Statistic
                title="Account Balance (CNY)"
                value={112893}
                valueStyle={{
                  color: "#cf1322",
                }}
                precision={2}
              />
              <Button
              type="primary"
              style={
                {
                marginTop: 16,
                }
              }
              loading={loadings[0]}
              onClick={() => enterLoading(0)}
              >
              Recharge
            </Button>
            </Card>
          </Col>
        </Row>
      </div>

      <div className="card3" style={{ padding: "30px", background: "#f8ffbd" }}>
        <Row gutter={16}>
          <Col span={12}>
            <Statistic
              title="Feedback"
              value={1128}
              prefix={<LikeOutlined />}
            />
          </Col>
          <Col span={12}>
            <Statistic 
              title="Unmerged" 
              value={93} 
              suffix="/ 100" />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Dashboard;
