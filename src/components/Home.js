import './Style/home.css';
import Button from './Button';
function Home(){
    return (
        <>
        <div className="landing-page">

        </div>
        <div className="message-container">
            <h1>Think Health. Think Massage.</h1>
            <p>
                We are open 9 am to 6pm; Monday through Sunday. If you would lie to schedule an appointment with us, please call us at 987-654-3210
            </p>
            <p className="btn-container">
            <Button btnName="LEARN MORE ABOUT US"/>
            <Button btnName="CONTACT US TODAY"/>
            </p>
        </div>
        <div className="details-container">
        <p>
            Are you looking for a professional, registered massage therapist? Sample Massage Therapy has 4 registered massage therapists who can provide clinical massage. 
        </p>
        <p>
            We are committed to your long term health and well-being. Our multi-disciplinary clinic provides a balarised approach to a healthy lifestyle Enhance your health and improve your performance with our treatements.
        </p>
        <p>
            We welcome you to come explore all the benefits you'll enjoy as one of our valued guests. Our professional staff is committed to offering the best massage therapy in Mainland.
        </p>
        </div>
        <hr/>
        <div className="address-container">
            <div className="inner-container-for-address">
            <p>Family Wellness Massage Therapy</p>
        <p>9876 Main Street, Suite13, Mainland, ML12345</p>
        <p>Phone:9876543210</p>
            </div>
        </div>
        </>

    );
}

export default Home;