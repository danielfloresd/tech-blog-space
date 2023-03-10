async function createCommentFormHandler(event) {
    event.preventDefault();

    const contents = document.querySelector('#comment-text').value;

    const theSplit = window.location.toString().split('/');
    const post_id = theSplit[theSplit.length - 1];


    const response = await fetch(`/api/comments`, {
        method: 'POST',
        body: JSON.stringify({
            contents,
            post_id
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        document.location.replace('/');
    } else {
        alert(response.statusText);
    }
}

document.querySelector('.new-comment-form').addEventListener('submit', createCommentFormHandler);