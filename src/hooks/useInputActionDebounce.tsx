import { useEffect } from 'react'

export const useInputActionDebounce = (action: (...args: any[]) => void, observedValue: string, durationMS?: number) => {
    useEffect(() => {
        const timer = () => setTimeout(action(), durationMS || 500)
        const timerId = timer()
        return () => {
            clearTimeout(timerId)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [durationMS, observedValue])
}