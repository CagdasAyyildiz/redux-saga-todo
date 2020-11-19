import React, { Component } from "react";
import {
  CheckOutlined,
  CheckCircleFilled,
  CloseCircleTwoTone,
} from "@ant-design/icons";
import { Card, Button, Row, Col, Typography, Space } from "antd";
import { completeTodo, removeTodo } from "../store/actions/actionCreators";
import { connect } from "react-redux";
const { Text } = Typography;
import PropTypes from 'prop-types';


export class TodoDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {  
      id: this.props.todo.id
    };
  }
  handleCompleteTodo = () => {
    this.props.completeTodo(this.props.todo.id)
  }

  handleRemoveTodo = () => {
    this.props.removeTodo(this.props.todo.id)
  }

  render() {
    let buttonIcon = this.props.todo.todoCompleted ? (
      <CheckCircleFilled />
    ) : (
      <CheckOutlined />
    );
    let removeButton = (
      <Button
        shape="circle"
        twoToneColor="#eb2f96"
        icon={<CloseCircleTwoTone />}
        onClick={this.handleRemoveTodo}
      />
    );
    return (
      <>
        <Card>
          <Row justify="space-between">
            <Col>
              <Text delete={this.props.todo.completed}>
                {this.props.todo.content}
              </Text>
            </Col>
            <Col>
              <Row justify>
                <Space>
                  <Col>
                    <Button
                      shape="circle"
                      icon={buttonIcon}
                      onClick={this.handleCompleteTodo}
                    />
                  </Col>
                  <Col>{this.props.todo.completed ? removeButton : null}</Col>
                </Space>
              </Row>
            </Col>
          </Row>
        </Card>
      </>
    );
  }
}

TodoDetails.propTypes = {
  completeTodo: PropTypes.func,
  todo: PropTypes.object,
  removeTodo: PropTypes.func,
}


const mapDispatchToProps = (dispatch) => {
  return {
    completeTodo: (id) => dispatch(completeTodo(id)),
    removeTodo: (id) => dispatch(removeTodo(id))
  };
};

export default connect(null, mapDispatchToProps)(TodoDetails);
