import style from "./SingleProducts.module.scss";
import { useParams, useNavigate, Link } from "react-router-dom";
import { instance } from "../../Utils/axiosInstance";
import { useState, useEffect } from "react";
import { Card, Col, Row, Button } from "antd";

export default function SingleProducts() {
  const { id } = useParams();
  const [single, setSingle] = useState();
  const dl = useNavigate();
  useEffect(() => {
    instance.get(`/posts/${id}`).then((a) => setSingle(a.data));
  }, [id]);

  const deleted = () => {
    instance.delete(`/posts/${id}`);
    dl(-1);
  };

  return (
    <>
      <Row gutter={18}>
        <Col span={25}>
          <h1 style={{ textAlign: "center", marginTop: 30 }}>
            Card {single?.id}
          </h1>
          <Card title={single?.title} bordered={false}>
            {single?.body}
          </Card>
        </Col>
      </Row>

      <div className={style.btn}>
        <Link to={`/edit/${id}`}>
          <Button type="primary">Edit</Button>
        </Link>
        <Button type="primary" danger onClick={deleted}>
          Delete
        </Button>
      </div>
    </>
  );
}
