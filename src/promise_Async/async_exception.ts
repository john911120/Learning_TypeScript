const asyncException = async() => {
    throw new Error('An error occurred');
}

asyncException().catch(error => console.error('Error:', error.message));