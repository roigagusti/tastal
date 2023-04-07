export const callApi = (url, method, body) => {
    const formData = new FormData();
    formData.append("username", body.username);
    return fetch(url, {
        method: method,
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        return data;
    })
    .catch(error => {
        console.error('Error:', error);
        return error;
    });
}

export async function getUsernameAvailability(username){
    const response = await callApi(
        'https://api.tastal.ga/users.php?q=usernameExists',
        'POST',
        {username: username}
    );
    return response;
}