import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button, Checkbox, Form, Input } from "antd";
import { instance } from "../../Utils/axiosInstance";

const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

export default function EditProducts() {
  const { id } = useParams();
  const [post, setPost] = useState({ title: "", body: "" });
  const nav = useNavigate();

  useEffect(() => {
    instance.get(`/posts/${id}`).then((a) => setPost(a.data));
  }, [id]);

  const edited = () => {
    instance.put(`/posts/${id}`).then((a) => console.log(a));
    nav(-1);
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
          <Input
            value={post.title}
            onChange={(e) => setPost({ ...post, title: e.target.value })}
          />
        </Form.Item>

        <Form.Item label="Body" name="Body">
          <Input
            value={post.body}
            onChange={(e) => setPost({ ...post, body: e.target.value })}
          />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit" onClick={edited}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}
