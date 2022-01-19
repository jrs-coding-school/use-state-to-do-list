import React from 'react';
import List from './list';
import NewItemForm from './newItemForm';
import './toDoList.css';

export default function ToDoList() {

    /* initialize the state */
    var list = [];// replace this.

    function addToList(newItem) {
        /**
         * add an item to the list
         */
        alert("This feature is not implemented yet.")
    }

    function removeFromList(id) {
        /** 
         * remove an item from the list
         */
        alert("This feature is not implemented yet.")
    }

    function editItem(item) {
        /** 
         * edit an item in the list
         */
        alert("This feature is not implemented yet.")
    }

    return (
        <div className="to-do-list">
            <h1>To Do : </h1>
            <List list={list}
                removeFromList={removeFromList}
                editItem={editItem} />
            <NewItemForm addToList={addToList} />
        </div>
    )
}
