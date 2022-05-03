import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../components/Navbar';

function Contact() {
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>

      <Navbar />

      <section className="hero">
        <div className="container">
          <div className="text-wrapper w-full">
            <h1 data-cy="pageTitle" className="title">
              Contact
            </h1>
            <p className="description">
              Incididunt in cillum magna occaecat nisi qui in exercitation
              labore anim adipisicing amet irure tempor.
            </p>
            <ul className="contact-links">
              <li className="contact-item">Email: sascha.stropek@gmail.com</li>
              <li className="contact-item">Phone: +43 6801545211</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
