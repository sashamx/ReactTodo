import React, {Component} from 'react';
import ItemStatusFilter from './items-status-filter';

export default class SearchPanel extends Component {
    state = {
      term: ''
    }

    onChamgeVal = (e) => {
      const val = e.target.value
      this.setState({
        term: val
      })
      this.props.onSerchChange(val)
    }

    render() {
      const {filter, onChangeFilter} = this.props
      return (
        <div className="row py-2">
          <div className="col">
            <input 
              placeholder="search" 
              className="form-control"
              value={this.state.term}
              onChange={this.onChamgeVal} 
            />
          </div> 
          <ItemStatusFilter filter={filter} onChangeFilter={onChangeFilter} />       
        </div>  
      )    
    }
}