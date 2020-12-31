import React, { useEffect, useRef } from 'react'
import { ITextInputProps } from '../types/textInputTypes';

export const TextInput: React.FC<ITextInputProps> = ({
    name,
    label,
    text,
    setText,
    type = '',
    error = '',
    placeholder = '',
    stealFocus = false,
    onPressEnter
}) => {

    const inputRef = useRef<HTMLInputElement>();

    useEffect(() => {
        if (stealFocus && inputRef?.current) {
            inputRef.current.focus()
        }
    })

    const handleChange = (event: any) => {
        setText(event.target.value);
    }

    const onEnterKey =(event:any) => {
        if(event.key === 'Enter'){
            onPressEnter?.()
        }
    }

    return (
        <div className="input-label-container">
            {label ? (
                <label>{label}</label>
            ) : null}
            <input
                name={name}
                type={type || 'text'}
                onChange={handleChange}
                onKeyPress={onEnterKey}
                value={text}
                placeholder={placeholder}
                ref={inputRef as any}
            />
            {error ? (
                <span className="error">{error}</span>
            ) : null}
        </div>
    )
}