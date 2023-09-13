import { useEffect, useState } from "react";

function CountDown() {
    const [count, setCount] = useState(4)
    useEffect(() => {
        if (count === 0) return;
        let timer = setInterval(() => {
            setCount(count - 1)
        }, 1000)
        return () => clearInterval(timer)
    }, [count])
    return (
        <div>Resend OTP in <span>{count} </span> Seconds</div>
    );
}

export default CountDown;