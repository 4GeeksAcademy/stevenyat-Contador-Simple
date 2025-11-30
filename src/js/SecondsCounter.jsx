
const Digit = (props)  => {
    return ( 
    <div id="contador" className="card m-2">
        {props.number}
    </div>
    )
};

const SecondsCounter = (props) => {
    return ( 
    <div data-bs-theme="dark" className="row d-flex justify-content-center align-items-center text-center p-3">
        <div id="contador" className="card fs-1 m-2">
            <i className="fa-regular fa-clock m-auto"></i>
        </div>
        <Digit number={Math.floor((props.seconds) / 100000 % 10)} />
        <Digit number={Math.floor((props.seconds) / 10000 % 10)} />
        <Digit number={Math.floor((props.seconds) / 1000 % 10)} />
        <Digit number={Math.floor((props.seconds) / 100 % 10)} />
        <Digit number={Math.floor((props.seconds) / 10 % 10)} />
        <Digit number={(props.seconds) / 1 % 10} />
    </div>
    )
};
export default SecondsCounter