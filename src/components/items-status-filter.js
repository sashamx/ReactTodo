import React, {Component} from 'react';

export default class ItemStatusFilter extends Component {
    state = {
        buttons: [
            {name: 'all', label: 'All'},
            {name: 'active', label: 'Active'},
            {name: 'done', label: 'Done'},
        ]
    }

    render () {
        const {filter, onChangeFilter} = this.props

        const buttons = this.state.buttons.map(({name, label}) => {
            const isActive = filter === name
            const clazz = isActive ? 'active': ''
            return (
                <button 
                    type="button" 
                    className={`btn btn-secondary ${clazz}`}
                    key={name}
                    onClick={() => onChangeFilter(name)}
            >{label}</button>
            )
        })

        return (
            <div className="col btn-group">
                {buttons}
            </div>
        )
    }
    
}
