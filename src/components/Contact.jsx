import React, { useState } from 'react';
import { FaTwitter, FaFacebookF, FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    fetch("https://getform.io/f/73cdac2c-0a93-4079-9330-18a983ba2669", {
      method: "POST",
      body: formData,
      headers: {
        "Accept": "application/json",
      },
    })
    .then(response => {
      if (response.ok) {
        alert('Your Message was send successfully!');
        setFormData({
          name: '',
          phone: '',
          email: '',
          subject: '',
          message: '',
        });
      } else {
        alert('An error occurred! Please try again later.');
      }
    })
    .catch(error => {
      alert('An error occurred! Please try again later.');
    });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div id='contact' className='max-w-[1040] m-auto md:pl-20 p-4'>
      <h1 className='py-4 text-4xl font-bold text-center'>Contact</h1>
      <h1 className='py-10 text-2xl font-bold text-center'>If you wish to get in touch with me, please feel free to reach out through the following social media platforms listed below.</h1>

      <div className='flex m-auto pl-10 md:pl-0 py-28 max-w-[1040px] justify-center w-full'>
        <FaTwitter
          onClick={() => window.open('https://twitter.com/dyprodg', '_blank')}
          className='cursor-pointer hover:scale-110 ease-in duration-200 mr-8'
          size={100}
        />
        <FaFacebookF
          onClick={() => window.open('https://www.facebook.com/profile.php?id=100092567229614', '_blank')}
          className='cursor-pointer hover:scale-110 ease-in duration-200 mr-8'
          size={100}
        />
        <FaGithub
          onClick={() => window.open('https://github.com/dyprodg', '_blank')}
          className='cursor-pointer hover:scale-110 ease-in duration-200 mr-8'
          size={100}
        />
        <FaLinkedinIn
          onClick={() => window.open('https://www.linkedin.com/in/dennis-diepolder-2a5a98276/', '_blank')}
          className='cursor-pointer hover:scale-110 ease-in duration-200 mr-8'
          size={100} />
      </div>

      <form className='pr-4' onSubmit={handleSubmit}>
        <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
          <div className='flex flex-col'>
            <label className='uppercase text-sm py-2'>Name</label>
            <input
              className='border-none outline-none rounded-lg p-3 bg-gray-600 flex shadow-md shadow-white/60 hover:shadow-white  transition-shadow'
              type='text'
              name='name'
              value={formData.name}
              onChange={handleChange}
              placeholder='Name'
              required
            />
          </div>
          <div className='flex flex-col'>
            <label className='uppercase text-sm py-2'>Phone Number (optional)</label>
            <input
              className='border-none outline-none rounded-lg p-3 bg-gray-600 flex shadow-md shadow-white/60 hover:shadow-white  transition-shadow'
              type='text'
              name='phone'
              value={formData.phone}
              onChange={handleChange}
              placeholder='Phone Number'
            />
          </div>
        </div>
        <div className='flex flex-col'>
          <label className='uppercase text-sm py-2'>Email</label>
          <input
            className='border-none outline-none rounded-lg p-3 bg-gray-600 flex shadow-md shadow-white/60 hover:shadow-white  transition-shadow'
            type='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            placeholder='Email'
            required
          />
        </div>
        <div className='flex flex-col'>
          <label className='uppercase text-sm py-2'>Subject</label>
          <input
            className='border-none outline-none rounded-lg p-3 bg-gray-600 flex shadow-md shadow-white/60 hover:shadow-white  transition-shadow'
            type='text'
            name='subject'
            value={formData.subject}
            onChange={handleChange}
            placeholder='Subject'
          />
        </div>
        <div className='flex flex-col'>
          <label className='uppercase text-sm py-2'>Message</label>
          <textarea
            className='border-none outline-none rounded-lg p-3 bg-gray-600 flex shadow-md shadow-white/60 hover:shadow-white  transition-shadow'
            rows='10'
            name='message'
            value={formData.message}
            onChange={handleChange}
            placeholder='Write me a message!'
            required
          />
        </div>
        <button className='bg-white text-black text-2xl mt-4 w-full p-4 rounded-lg shadow-md shadow-white active:scale-95 ease-in duration-100' type='submit'>
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;
