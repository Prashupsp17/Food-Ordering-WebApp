import linkedin from "../images/linkedin.png";
const Contact = () => {
    return (
        <>
        <div className="contact">
        <span className="developer"> Contact Details</span>
        <span>shindeprashant967@gmail.com</span>
        <span>9172254996</span>
        <a href="https://www.linkedin.com/in/prashant-shinde-37b821133/" target="_blank">Connect With Me On  <img src={linkedin} /></a>
        </div>
        </>
    )
}

export default Contact;