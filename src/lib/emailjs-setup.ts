import emailjs from '@emailjs/browser';

// Initialize EmailJS with your public key
emailjs.init("r7xvC-Qa1pFoPH3i0");

// Function to send email using EmailJS
export const sendEmail = async (formData: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) => {
  try {
    const response = await emailjs.send(
      "service_60esp3o", // Your EmailJS service ID
      "template_e6r3grx", // Your EmailJS template ID
      {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_name: "Aditya Singh",
        to_email: "mrx9918261025@gmail.com", // The email where you want to receive messages
        reply_to: formData.email,
        user_name: formData.name,    // Added for template
        user_email: formData.email   // Added for template
      }
    );
    
    return { success: true, response };
  } catch (error) {
    console.error("Error sending email:", error);
    return { success: false, error };
  }
};
