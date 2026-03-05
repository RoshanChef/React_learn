import { useRef } from "react"

function Form() {
    let emailRef = useRef('');
    let passwordRef = useRef('');
    console.log('app render');

    function handler(e) {
        e.preventDefault();
        console.log(emailRef.current);
        emailRef.current.style.backgroundColor = 'red';
        console.log(emailRef.current.value);
        console.log(passwordRef.current.value);

    }
 
    
    return (
        <>
            <form onSubmit={handler}>
                <input type="email" ref={emailRef} />
                <input type="password" ref={passwordRef} />
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default Form
