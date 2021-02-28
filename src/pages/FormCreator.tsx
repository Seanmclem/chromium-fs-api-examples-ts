import React, { useState } from "react"
import { TextInput } from "ready-fields"

const handleSubmit = (event: any) => {
    event.preventDefault();
    debugger;
}

export const FormCreator: React.FC<{}> = () => {
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