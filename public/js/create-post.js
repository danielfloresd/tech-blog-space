async function createPostFormHandler(event) {
    event.preventDefault();

    const title = document.querySelector('#post-title').value
    const contents = document.querySelector('#post-text').value;
    const category = document.querySelector('#post-category').value;

    const response = await fetch(`/api/posts`, {
        method: 'POST',
        body: JSON.stringify({
            title,
            category,
            contents
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    }
}

document.querySelector('.new-post-form').addEventListener('submit', createPostFormHandler);