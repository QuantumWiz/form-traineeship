import React, { useState } from 'react';

function TraineeshipForm() {
    const [state, setState] = useState({
        firstname: "",
        surname: "",
        email: ""
    });

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setState((state) => {
            return {
                ...state,
                [e.target.name]: e.target.value
            }
        })
    }

    const onSubmit = () => {

    }

    return (
        <form>
            <label htmlFor='firstname'>Firstname:</label>
            <input type='text' id='firstname' name='firstname' onChange={onChange} value={state.firstname}></input>
            <br />
            <label htmlFor='surname'>Surname:</label>
            <input type='text' id='surname' name='surname' onChange={onChange} value={state.surname}></input>
            <br />
            <label htmlFor='email'>Email:</label>
            <input type='email' id='email' name='email' onChange={onChange} value={state.email}></input>
            <br />
            <button onClick={onSubmit}>Submit</button>
        </form>
    );
}

export default TraineeshipForm;