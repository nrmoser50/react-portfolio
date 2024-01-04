import React, { useState } from 'react';

const Contact = () => {
    // State for form fields
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    //Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform actions with form data (e.g., send an email, save to database)
        console.log('Form submitted:', { name, email, message});
        // Add logic here to handle the form data
    };

    return (
        <section id="contact">
            <h2>Contact Me</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                />

                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                required
                />

                <label htmlFor="message">Message:</label>
                <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    ></textarea>

                <button type="submit">Submit</button>                
            </form>
        </section>
    );
};

export default Contact;