import React from 'react';
import { Phone } from 'lucide-react';

const Contact = () => {
  return (
    <div className="container page-shell page-shell--narrow animate-fade-in">
      <h1 className="section-title">Get In <span className="text-gradient">Touch</span></h1>
      
      <div className="info-grid">
        
        <div className="content-panel content-panel--padded" style={{ textAlign: 'center' }}>
          <Phone size={40} className="text-gradient" style={{ margin: '0 auto 1rem' }} />
          <h3>Technical Event Co-ordinators</h3>
          <p className="muted-copy" style={{ marginTop: '0.5rem', lineHeight: '1.8' }}>
            Dr. Gajendran Malshetty: <a href="tel:+919036251072" style={{ color: 'inherit' }}>+91 90362 51072</a><br />
            Dr. Sridevi M Hosmani: <a href="tel:+919538626926" style={{ color: 'inherit' }}>+91 95386 26926</a><br />
            Dr. Nagbasvanna Gurgol: <a href="tel:+919731782555" style={{ color: 'inherit' }}>+91 97317 82555</a>
          </p>
        </div>

        <div className="content-panel content-panel--padded" style={{ textAlign: 'center' }}>
          <Phone size={40} className="text-gradient" style={{ margin: '0 auto 1rem' }} />
          <h3>Management Event Co-ordinators</h3>
          <p className="muted-copy" style={{ marginTop: '0.5rem', lineHeight: '1.8' }}>
            Dr. Spoorthi Patil: <a href="tel:+919008057629" style={{ color: 'inherit' }}>+91 90080 57629</a><br />
            Prof. Maheshchandra Patil: <a href="tel:+918088489456" style={{ color: 'inherit' }}>+91 80884 89456</a><br />
            Prof. Nandini Police Patil: <a href="tel:+918431082993" style={{ color: 'inherit' }}>+91 84310 82993</a>
          </p>
        </div>

        <div className="content-panel content-panel--padded" style={{ textAlign: 'center' }}>
          <Phone size={40} className="text-gradient" style={{ margin: '0 auto 1rem' }} />
          <h3>Cultural Event Co-ordinators</h3>
          <p className="muted-copy" style={{ marginTop: '0.5rem', lineHeight: '1.8' }}>
            Dr. Swati Kalshetty: <a href="tel:+918050604096" style={{ color: 'inherit' }}>+91 80506 04096</a><br />
            Dr. Pallavi Patil: <a href="tel:+918123756049" style={{ color: 'inherit' }}>+91 81237 56049</a><br />
            Dr. Dhanraj Neela: <a href="tel:+919880024049" style={{ color: 'inherit' }}>+91 98800 24049</a>
          </p>
        </div>

        <div className="content-panel content-panel--padded" style={{ textAlign: 'center' }}>
          <Phone size={40} className="text-gradient" style={{ margin: '0 auto 1rem' }} />
          <h3>Registration Committee</h3>
          <p className="muted-copy" style={{ marginTop: '0.5rem', lineHeight: '1.8' }}>
            Dr. Archana M Kinagi: <a href="tel:+919060867912" style={{ color: 'inherit' }}>+91 90608 67912</a><br />
            Prof. Bhagyalaxmi Koti: <a href="tel:+919902903533" style={{ color: 'inherit' }}>+91 99029 03533</a><br />
            Prof. Geeta N: <a href="tel:+918884023906" style={{ color: 'inherit' }}>+91 88840 23906</a>
          </p>
        </div>

        <div className="content-panel content-panel--padded" style={{ textAlign: 'center' }}>
          <Phone size={40} className="text-gradient" style={{ margin: '0 auto 1rem' }} />
          <h3>Accommodation Committee</h3>
          <p className="muted-copy" style={{ marginTop: '0.5rem', lineHeight: '1.8' }}>
            Dr. Basavaraj Mammani: <a href="tel:+919916010753" style={{ color: 'inherit' }}>+91 99160 10753</a><br />
            Dr. AnilKumar C N: <a href="tel:+91953826999" style={{ color: 'inherit' }}>+91 95382 6999</a><br />
            Prof. Rahul Rathod: <a href="tel:+919738905649" style={{ color: 'inherit' }}>+91 97389 05649</a>
          </p>
        </div>

      </div>
    </div>
  );
};

export default Contact;
