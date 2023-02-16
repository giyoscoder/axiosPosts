import style from "./Products.module.scss";
import { useState, useEffect } from "react";
import { instance } from "../../Utils/axiosInstance";
import { Link } from "react-router-dom";
import { Card, Col, Row } from "antd";

export default function Products() {
  const [posts, setPosts] = useState();
  useEffect(() => {
    instance.get("/posts").then((a) => setPosts(a.data));
  }, []);

  return (
    <div className={style.mainDiv}>
      <Row gutter={16}>
        {posts?.map((a) => (
          <Col span={8} style={{ marginBlock: 25 }} key={a.id}>
            <Link to={`/products/${a?.id}`}>
              <h1 style={{ textAlign: "center" }}>Card {a?.id}</h1>
              <Card title={a?.title} bordered={false}>
                {a?.body}
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </div>
  );
}
