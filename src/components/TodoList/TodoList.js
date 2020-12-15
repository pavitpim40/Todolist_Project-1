import React, { useState, useEffect } from 'react'
import { List, Button, Input, Row, Col, Divider } from 'antd'
import Text from 'antd/lib/typography/Text'
// eslint-disable-next-line no-unused-vars
import _ from 'lodash'
import axios from '../../config/axios'
import Todo from './Todo'

export default function TodoList() {
    const [todoList, setTodoList] = useState([])
    const [inputField, setInputField] = useState("")
    // GET
    const fetchTodoList = async() => {
        const httpResponse = await axios.get("/todo-list");
        setTodoList(httpResponse.data)
    };
    useEffect(()=> {
        fetchTodoList();
    },[]);
    
    const addTodoItem = async() => {
        await axios.post("/todo-list" ,{task: inputField})
        fetchTodoList();

        // const newTodoList = [...todoList]
        // newTodoList.push({
        //     id: _.uniqueId(),
        //     task: inputField,
        // })
        // setTodoList(newTodoList)
        // setInputField("")
    }
    const deleteTodoItem = async (id) => {
        await axios.delete(`/todo-list/${id}`)
        fetchTodoList();
        // วิธี 1 Best Practice ใช้การ filter Array
        // const newTodoList = todoList.filter(todo => todo.id !== id)
        // setTodoList(newTodoList)

        // วิธี 2 Best Practice ใช้การ Clone,findIndex
        // const newTodoList = [...todoList]
        // const targetIndex = newTodoList.findIndex(todo => todo.id === id)
        // newTodoList.splice(targetIndex,1)
        // setTodoList(newTodoList)
    }
    return (
        <Row justify="center">
            <Col>
                <Row>
                    <Text type="warning"> กรุณาใส่ Todo ที่ต้องการเพิ่ม</Text>
                </Row>
                <Row justify="center">
                    <Col span={20}>
                        <Input value={inputField} onChange={(e) => setInputField(e.target.value)} />
                    </Col>
                    <Col span={4}>
                        <Button style={{ width: '100%' }} onClick={addTodoItem}>Add</Button>
                    </Col>
                </Row>
                <Divider />
                <Row>
                    <List
                        style={{ width: "450px" }}
                        header={<div>Todo List Page</div>}
                        footer={<div>Footer</div>}
                        bordered
                        dataSource={todoList}
                        renderItem={todo => (
                            <List.Item>
                                <Todo delete={deleteTodoItem} todo={todo} fetchData={fetchTodoList}/>
                            </List.Item>
                        )}
                    />
                </Row>
            </Col>
        </Row>
    )
}
