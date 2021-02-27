import React, { useState } from "react"
import styled from "styled-components"
import { TextInput } from "ready-fields"

const FormCreatorContainer = styled.div`
    margin: 20px;
    label {
        margin-right: 20px;
    }
`

const Preview = styled.div`
    margin: 10px;
    border: 1px solid black;
    max-width: 500px;
    padding: 20px;
`

const handleSubmit = (event: any) => {
    event.preventDefault();

}

export const FormCreator: React.FC<{}> = () => {
    // Start with a basic working form
    const [firstName, setFirstName] = useState<string>("")
    return (
        <FormCreatorContainer>
            <form onSubmit={handleSubmit}>
                <TextInput
                    name="first-name"
                    label="First Name"
                    text={firstName}
                    setText={setFirstName}
                />
            </form>
            <Preview>
                firstName: {firstName}
            </Preview>
        </FormCreatorContainer>
    )
}