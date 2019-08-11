import React from 'react';

const Todoapp = ({ todo, delfun }) => {
    const newlist = todo.map((u) => {
        if (todo.length) {
            return (
                <div className="todoproj" key={u.id}>
                    <span onClick={() => { delfun(u.id) }}>{u.content}</span>
                </div>
            )
        }
        else {
            return null;
        }
    })

    return (
        <div className="todoreturn">
            {newlist}
        </div>
    )
}

export default Todoapp;
