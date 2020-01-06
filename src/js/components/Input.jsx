import React, { useState , useEffect} from 'react';


const Input = (props) => {

    const [value, setValue] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

    }

    const handleChange = () => {
        // no op
    }

    return (
        <form onSubmit={handleSubmit}>
        <label>
    {props.label}
          <input type="text" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
}

export default Input;