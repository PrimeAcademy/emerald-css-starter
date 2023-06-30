$(document).ready(onReady);

// Keep track of state!
// posts is an array because there will be multiple posts
let posts = [];

function onReady() {
    render();
    $('#submit-button').on('click', onSubmitPost);
}

// Event handler
function onSubmitPost(event) {
    event.preventDefault()
    // Update state....

    // First get what the user posted
    const contentInput = $('#content-input').val();
    const authorInput = $('#author-input').val();

    // Then we store that in state
    const newMessage = {
        content: contentInput,
        author: authorInput
    }

    posts.push(newMessage);

    // Clear the inputs
    $('#content-input').val('');
    $('#author-input').val('');


    // Render
    render();
}

function render() {
    // empty the posts table
    $('#posts-table-body').empty();

    // loop through the posts array 
    // and append each post to the table
    for (post of posts) {
        $('#posts-table-body').append(`
            <tr>
                <td>${post.content}</td>
                <td>${post.author}</td>
            </tr>
        `)
    }
}