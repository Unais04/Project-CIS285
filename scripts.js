function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('show');
}


document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', function (event) {
            event.preventDefault();

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            if (name && email && message) {
                const newMessage = { name, email, message, date: new Date().toISOString() };

                const messages = JSON.parse(localStorage.getItem('messages')) || [];

                messages.push(newMessage);

                localStorage.setItem('messages', JSON.stringify(messages));

                alert('Thank you for contacting us! Your message has been received.');
                contactForm.reset();
            } else {
                alert('Please fill in all fields before submitting.');
            }
        });
    }
});

document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM fully loaded");

    const healthRecordsForm = document.querySelector('.health-records form');
    if (healthRecordsForm) {
        console.log("Health Records form detected");
        healthRecordsForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const fileInput = document.getElementById('file');
            const fileName = fileInput.files[0]?.name;

            if (fileName) {
                const records = JSON.parse(localStorage.getItem('healthRecords')) || [];
                records.push({ fileName, date: new Date().toLocaleString() });
                localStorage.setItem('healthRecords', JSON.stringify(records));
                console.log(`Health record saved: ${fileName}`);
                alert(`File "${fileName}" uploaded successfully!`);
                healthRecordsForm.reset();
            } else {
                alert('Please select a file to upload.');
            }
        });
    }

    const messagesForm = document.querySelector('.messages form');
    if (messagesForm) {
        console.log("Messages form detected");
        messagesForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const recipient = document.getElementById('recipient').value;
            const message = document.getElementById('message').value;

            if (recipient && message) {
                const messages = JSON.parse(localStorage.getItem('secureMessages')) || [];
                messages.push({ recipient, message, date: new Date().toLocaleString() });
                localStorage.setItem('secureMessages', JSON.stringify(messages));
                console.log(`Message sent: ${message}`);
                alert('Message sent successfully!');
                messagesForm.reset();
            } else {
                alert('Please fill in all fields before sending a message.');
            }
        });
    }

    const appointmentForm = document.querySelector('.appointments form');
    if (appointmentForm) {
        console.log("Appointment form detected");
        appointmentForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const date = document.getElementById('date').value;
            const time = document.getElementById('time').value;
            const doctor = document.getElementById('doctor').value;

            if (date && time && doctor) {
                const appointments = JSON.parse(localStorage.getItem('appointments')) || [];
                appointments.push({ date, time, doctor });
                localStorage.setItem('appointments', JSON.stringify(appointments));
                console.log(`Appointment booked: ${date} at ${time} with ${doctor}`);
                alert('Appointment booked successfully!');
                appointmentForm.reset();
            } else {
                alert('Please fill in all fields to book an appointment.');
            }
        });
    }
});
