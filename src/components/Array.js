import React, { Component, PropTypes } from "react";

class Array extends Component {
  	getData(id) {
      return {id, name: Math.floor(Math.random() * 20000)}
    }
    
  	render() {
      	let {value, onAdd, onUpdate} = this.props;
      	
      	return (<span>
            <h2>Array output</h2>
            {" "}
            <button onClick={onAdd}>
              Click to add array entry
            </button>
            <h3>Length: {value.length}</h3>
            {value.map(({id, name}, index) => <p>
               [{index}] => id: {id}, name: {name}	 
               {" "}
         		<button onClick={(e) => onUpdate(this.getData(id))}>
                	Update
              	</button>
             </p>)}
          </span>)
    }
}

Array.propTypes = {
  array: PropTypes.array.isRequired,
  onAdd: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired
};

export default Array;