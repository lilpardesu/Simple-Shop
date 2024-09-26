
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contact-us-form');
    const successMessage = document.getElementById('successMessage');
    const errorMessage = document.getElementById('errorMessage');
    
    form.addEventListener('submit', function (event) {
    event.preventDefault();
    
    const formData = new FormData(form);
    const data = {
    name: formData.get('name'),
    email: formData.get('email'),
    title: formData.get('title'),
    text: formData.get('text')
    };
    
    fetch('http://localhost:3000/contact', {
    method: 'POST',
    headers: {
    'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
    if (data.success) {
    successMessage.style.display = 'block';
    errorMessage.style.display = 'none';
    } else {
    errorMessage.textContent = data.error;
    errorMessage.style.display = 'block';
    successMessage.style.display = 'none';
    }
    })
    .catch(error => {
    errorMessage.textContent = 'خطایی رخ داده است. لطفاً دوباره تلاش کنید.';
    errorMessage.style.display = 'block';
    successMessage.style.display = 'none';
    });
    });
    });