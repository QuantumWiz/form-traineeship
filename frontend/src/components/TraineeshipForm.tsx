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

    const onSubmit = (e: React.SyntheticEvent) => {
        async function submit() {
            e.preventDefault();
            const url = "/submit";
            let request = {
                method: "POST",
                mode: "same-origin" as RequestMode,
                headers: { "Content-type": "application/json" },
                body: JSON.stringify(state)
            }
            let response = await fetch(url, request);
            if (response && response.ok) {
                console.log("Submit succeeded.");
            } else {
                console.log("Submit failed.");
            }
        }
        submit();
    }

    return (
        <form onSubmit={onSubmit}>
            <label htmlFor='firstname'>Firstname:</label>
            <input type='text' id='firstname' name='firstname' onChange={onChange} value={state.firstname}></input>
            <br />
            <label htmlFor='surname'>Surname:</label>
            <input type='text' id='surname' name='surname' onChange={onChange} value={state.surname}></input>
            <br />
            <label htmlFor='email'>Email:</label>
            <input type='email' id='email' name='email' onChange={onChange} value={state.email}></input>
            <br />
            <input type="submit" value="Submit" />
        </form>
    );
}

export default TraineeshipForm;