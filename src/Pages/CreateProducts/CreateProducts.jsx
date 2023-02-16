import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button, Form, Input } from "antd";
import { instance } from "../../Utils/axiosInstance";

const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

export default function CreateProducts() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [add, setAdd] = useState([]);
  const added = () => {
    let obj = { title, body };
    instance.put(
      "/posts",
      setAdd((a) => [...a, obj])
    );
  };

  return (
    <>
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          // maxWidth: 600,
          margin: "0 auto",
          display: "block",
          margin: 50,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item label="Title" name="Title">
          <Input onChange={(e) => setTitle(e.target.value)} />
        </Form.Item>

        <Form.Item label="Body" name="Body">
          <Input onChange={(e) => setBody(e.target.value)} />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit" onClick={added}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}
