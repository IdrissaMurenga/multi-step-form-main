import doneImg from "../assets/icon-thank-you.png";
const Thanks = () => {
    return (
        <section>
            <div className="last-container">
                <img className="thanks-img" src={doneImg} alt="" />
                <h1 className="thank-header">Thank you</h1>
                <p className="thanks-par">
                    Thanks for confirming your subscription! We hope you have fun
                    using our platform. If you ever need support, please feel free 
                    to email us at support@loremgaming.com
                </p>
            </div>
        </section>
    )
}

export default Thanks
