import errorImg from './error.gif';

function Error () {
    return (
        <img src={errorImg} alt="error" style={{width: '200px', height: "200px", display: "block", margin: "0 auto"}}/>
    )
}

export default Error