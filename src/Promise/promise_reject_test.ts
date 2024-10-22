Promise.reject(new Error('An error occurred'))
    .catch(error => console.error('Error:', error.message));