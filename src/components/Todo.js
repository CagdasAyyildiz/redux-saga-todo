import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Card, Row, Col} from 'antd';
import TodoDetails from './TodoDetails';
import {fetchTodos} from '../store/actions/actionCreators';
import 'antd/dist/antd.css';
import PropTypes from 'prop-types';


export class Todo extends Component {
  componentDidMount() {
    this.props.fetchTodos();
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
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

Todo.propTypes = {
  fetchTodos: PropTypes.func,
  todos: PropTypes.array
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTodos: () => dispatch(fetchTodos()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
