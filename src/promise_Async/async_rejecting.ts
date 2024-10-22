const asyncRejection = async() => {
    await Promise.reject(new Error('An error occurred'));
}

asyncRejection().catch(error => console.error('Error:', error.message));