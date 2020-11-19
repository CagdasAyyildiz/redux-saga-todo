import React, { Component } from "react";
import { connect } from "react-redux";
import { Card, Row, Col, Input, Typography, Form, Button } from "antd";
import TodoDetails from "./TodoDetails";
import { fetchTodos, addTodo } from "../store/actions/actionCreators";
import "antd/dist/antd.css";
import PropTypes from "prop-types";

const { Text } = Typography;

export class Todo extends Component {
  componentDidMount() {
    this.props.fetchTodos();
  }
  handleAddTodo = (content) => {
    let lastTodoIndex = this.props.todos.length 
    this.props.addTodo(content.newTodo,lastTodoIndex);
  }
  render() {
    return (
      <div>
        <Row justify="center">
          <Col span={8}>
            <Card title="Todo List">
              {this.props.todos.map((todo) => (
                <TodoDetails key={todo.id} todo={todo} />
              ))}
              <Card>
                <Text strong>Add Todo</Text>
                <Form onFinish={this.handleAddTodo}>
                  <Form.Item label="newTodo" name="newTodo">
                    <Input />
                  </Form.Item>
                  <Form.Item >
                    <Button type="primary" htmlType="submit">
                      Submit
                    </Button>
                  </Form.Item>
                </Form>
              </Card>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

Todo.propTypes = {
  fetchTodos: PropTypes.func,
  todos: PropTypes.array,
  addTodo: PropTypes.func,
};

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTodos: () => dispatch(fetchTodos()),
    addTodo: (content,lastTodoIndex) => dispatch(addTodo(content,lastTodoIndex))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
