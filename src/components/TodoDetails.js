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
  handleCompleteTodo() {
    console.log(this)
    this.props.completeTodo(this.state.id)
    console.log(this.props.todo)
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
        onClick={this.props.removeTodo}
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
                      onClick={this.handleCompleteTodo.bind(this,this.props.todo.id)}
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
    removeTodo: () => dispatch(removeTodo()),
    completeTodo: (id) => dispatch(completeTodo(id))
  };
};

export default connect(null, mapDispatchToProps)(TodoDetails);