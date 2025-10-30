export default function ContactSocial() {
    return (
      <section className="contact-social-section" id="contact">
        <div className="contact-info">
          <h3 className="contact-social-title">Get In Touch</h3>
          <p>Have questions about our statues or need personalized advice? We're here to help!</p>
          <div className="contact-buttons">
            <a href="#" className="contact-button whatsapp"><i className="fab fa-whatsapp" />WhatsApp</a>
            <a href="#" className="contact-button wechat"><i className="fab fa-weixin" />WeChat</a>
          </div>
        </div>
  
        <div className="social-links">
          <h3 className="contact-social-title">Follow Us</h3>
          <a href="#"><i className="fab fa-facebook-f" />Facebook</a>
          <a href="#"><i className="fab fa-twitter" />Twitter</a>
          <a href="#"><i className="fab fa-instagram" />Instagram</a>
        </div>
  
        <div className="qr-codes">
          <div className="qr-code-container">
            <img src="/images/whatsapp-qr.png" alt="WhatsApp QR Code" />
            <p>WhatsApp Us</p>
          </div>
          <div className="qr-code-container">
            <img src="/images/wechat-qr.png" alt="WeChat QR Code" />
            <p>WeChat Us</p>
          </div>
        </div>
      </section>
    );
  }