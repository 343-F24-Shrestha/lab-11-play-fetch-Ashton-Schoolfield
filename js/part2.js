const userList = document.getElementById("user-list");

document.addEventListener("DOMContentLoaded", async () => {
    try {
        
        const response = await fetch('https://reqres.in/api/users?page=1');
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        
        data.data.forEach(user => {
            const userCard = document.createElement('div');
            userCard.className = 'card';
            const userName = document.createElement('h2');
            userName.textContent = `${user.first_name} ${user.last_name}`;
            
            const userImage = document.createElement('img');
            userImage.src = user.avatar;
            userImage.alt = `${user.first_name} ${user.last_name}`;
            
            userCard.appendChild(userName);
            userCard.appendChild(userImage);
            
            userList.appendChild(userCard);
        });
        
    } catch (error) {
        console.error('Error fetching users:', error);
        const errorMessage = document.createElement('div');
        errorMessage.className = 'error';
        errorMessage.textContent = 'Failed to load users. Please try again later.';
        userList.appendChild(errorMessage);
    }
});