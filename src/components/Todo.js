import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const Todo = () => {

    const todos = useSelector((state) => state.todos);
    console.log(todos);

    const [search, setSearch] = useState("");

    return (
        <div className="container">
            <div className="form-group">
                <input type="text"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Search Todo..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)} />
            </div>
            <table className="table shadow" >
                <thead>
                    <tr className="bg-danger text-white">
                        <th scope="col">Todo Id</th>
                        <th scope="col">Title</th>
                        <th scope="col">Status</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        todos.filter((todo) => todo.title.startsWith(search)).map(todo => {
                            return (
                                <tr>
                                    <th scope="row">{todo.id}</th>
                                    <td>{todo.title}</td>
                                    <td>cpmplete</td>
                                    <td><button className="btn btn-primary">View User</button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Todo;
