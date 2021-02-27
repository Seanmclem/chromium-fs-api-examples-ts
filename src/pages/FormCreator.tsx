import React, { useState } from "react"
import styled from "styled-components"
import { TextInput } from "ready-fields"

// const FormCreatorContainer = styled.div`
//     margin: 20px;
//     label {
//         margin-right: 20px;
//     }
// `

// const Preview = styled.div`
//     margin: 10px;
//     border: 1px solid black;
//     max-width: 500px;
//     padding: 20px;
// `

{/* <Preview>
    <p>
        firstName: {firstName}
    </p>
    <p>
        phone: {phone}
    </p>
    <p>
        email: {email}
    </p>
</Preview> */}


const handleSubmit = (event: any) => {
    event.preventDefault();
    debugger;
}

export const FormCreator: React.FC<{}> = () => {
    // Start with a basic working form
    const [firstName, setFirstName] = useState<string>("")
    const [phone, setPhone] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <TextInput
                    name="first-name"
                    label="First Name"
                    text={firstName}
                    setText={setFirstName}
                />
                <TextInput
                    name="phone"
                    label="Phone"
                    text={phone}
                    setText={setPhone}
                    type="tel"
                />
                <TextInput
                    name="email"
                    label="Email"
                    text={email}
                    setText={setEmail}
                    type="email"
                />
                <button
                    type="submit"
                >
                    Submit
                </button>
            </form>
        </div>
    )
}