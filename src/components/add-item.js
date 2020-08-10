import React, {Component} from 'react';
import './add-item.css'

export default class AddTodoItem extends Component {
    state = {
        newItem: {
            label: '',
            important: false
        }
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onAddItem(this.state.newItem)
        this.setState(({newItem}) => {
            return {
                newItem: {
                    ...newItem,
                    label: ''
                }          
            }             
        })
    }
    onChangeItemName = (e) => {
        const val = e.target.value 
        this.setState(({newItem}) => {
            return {
                newItem: {
                    ...newItem,
                    label: val
                }          
            }             
        })
    }

    render(){
        return (            
            <form className="row my-3 myForm" onSubmit={this.onSubmit}>
                <div className="col pl-0">
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="New Todo" 
                        value={this.state.newItem.label}
                        onChange={this.onChangeItemName}
                    />
                </div>
                <div>
                    <button 
                        type="submit"
                        className="btn btn-secondary"
                    >Add Todo Item</button>
                </div>
            </form>
        )
    }
}

