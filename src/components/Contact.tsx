import { useState } from 'react';
import emailjs from '@emailjs/browser';
import PlaceIcon from '@mui/icons-material/Place';
import EmailIcon from '@mui/icons-material/Email';
import { Call, GitHub, LinkedIn, Work } from '@mui/icons-material';

import './Contact.css';

const EMAILJS_SERVICE_ID = 'service_e5w7tfe';
const EMAILJS_TEMPLATE_ID = 'template_ic6j57p';
const EMAILJS_PUBLIC_KEY = 'L09qw3B1adV8fUl50';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle');

  const handleChange = (e: React.SyntheticEvent) => {
    setFormData({
      ...formData,
      [(e.target as HTMLInputElement).name]: (e.target as HTMLInputElement)
        .value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        EMAILJS_PUBLIC_KEY,
      );

      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Failed to send email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id='contact' className='contact'>
      <div className='container'>
        <h2 className='section-title'>
          Contact Me <Call color={'primary'} fontSize='large' />{' '}
        </h2>
        <div className='contact-content'>
          <div className='contact-info'>
            <h3>Let's work together</h3>
            <p>
              I'm always interested in hearing about new opportunities,
              collaborating on projects, or just having a conversation about
              technology.
            </p>
            <div className='contact-details'>
              <div className='contact-item'>
                <span className='contact-icon'>
                  <EmailIcon color='primary' />
                </span>
                <span>austinzbaird@gmail.com</span>
              </div>
              <div className='contact-item'>
                <span className='contact-icon'>
                  <PlaceIcon color='primary' />
                </span>
                <span>Wilmington, NC</span>
              </div>
              <div className='contact-item'>
                <span className='contact-icon'>
                  <Work color='primary' />
                </span>
                <span>Open to opportunities</span>
              </div>
            </div>
            <div className='social-links'>
              <a
                href='https://github.com/austinbaird12'
                className='social-link'
                target='_blank'
                rel='noopener noreferrer'
              >
                <span>{'GitHub'}</span>
                <GitHub />
              </a>
              <a
                href='https://www.linkedin.com/in/im-austin-baird/'
                className='social-link'
                target='_blank'
              >
                <span>{'LinkedIn'}</span>
                <LinkedIn />
              </a>
            </div>
          </div>
          <form className='contact-form' onSubmit={handleSubmit}>
            <div className='form-group'>
              <label htmlFor='name'>Name</label>
              <input
                type='text'
                id='name'
                name='name'
                value={formData.name}
                onChange={(e) => handleChange(e)}
                required
                placeholder='Your name'
              />
            </div>
            <div className='form-group'>
              <label htmlFor='email'>Email</label>
              <input
                type='email'
                id='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                required
                placeholder='your@email.com'
              />
            </div>
            <div className='form-group'>
              <label htmlFor='message'>Message</label>
              <textarea
                id='message'
                name='message'
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder='Your message...'
              />
            </div>
            <button
              type='submit'
              className='btn btn-primary'
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send'}
            </button>
            {submitStatus === 'success' && (
              <p className='form-success'>
                Thank you for your message! I'll get back to you soon.
              </p>
            )}
            {submitStatus === 'error' && (
              <p className='form-error'>
                Failed to send message. Please try again or email me directly.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
