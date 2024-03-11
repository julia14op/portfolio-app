// submitForm.js

const sendEmail = async (formData) => {
    // You should replace 'YOUR_EMAIL_ADDRESS' with your actual email address
    const emailEndpoint = 'idowujulia56@gmail.com';
  
    try {
      const response = await fetch(emailEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        console.log('Email sent successfully!');
      } else {
        console.error('Failed to send email.');
      }
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };
  
  exports.handler = async (event) => {
    if (event.httpMethod === 'POST') {
      const formData = JSON.parse(event.body);
      await sendEmail(formData);
  
      return {
        statusCode: 200,
        body: JSON.stringify({ message: 'Email sent successfully!' }),
      };
    }
  
    return {
      statusCode: 405,
      body: JSON.stringify({ message: 'Method Not Allowed' }),
    };
  };
  