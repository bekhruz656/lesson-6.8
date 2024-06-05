document.getElementById('filterButton').addEventListener('click', async () => {
    const numUsers = document.getElementById('numUsers').value;
    const ageFilter = document.getElementById('ageFilter').value;
    const matchingUsersDiv = document.getElementById('matchingUsers');
    const nonMatchingUsersDiv = document.getElementById('nonMatchingUsers');

    matchingUsersDiv.innerHTML = '';
    nonMatchingUsersDiv.innerHTML = '';

    if (!numUsers || !ageFilter) {
        alert('Please enter both the number of users and the age filter.');
        return;
    }

    try {
        const response = await fetch(`https://dummyjson.com/users`);
        const data = await response.json();

        data.users.forEach(user => {
            const userDiv = document.createElement('div');
            userDiv.textContent = `Name: ${user.firstName} ${user.lastName}, Age: ${user.age}`;

            if (user.age == ageFilter) {
                matchingUsersDiv.appendChild(userDiv);
            } else {
                nonMatchingUsersDiv.appendChild(userDiv);
            }
        });
    } catch (error) {
        console.error('Error fetching users:', error);
    }
});