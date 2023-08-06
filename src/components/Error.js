import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    console.log(err);
    return(
        <>
        <h2>Ooops !!!</h2>
        <h2>Ooops Something Went Wrong</h2>
        <h2>{err.status + " : " + err.statusText}</h2>
        </>
    )
}

export default Error;