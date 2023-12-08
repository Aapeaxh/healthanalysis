document.getElementById('post-form').addEventListener('submit', function(e) {
    e.preventDefault();

    var postDiv = createPost();
    document.getElementById('posts-section').appendChild(postDiv);
    document.getElementById('post-form').reset();
});

function createPost() {
    var postDiv = document.createElement('div');
    var title = document.createElement('h2');
    var content = document.createElement('p');
    var image = createImage();
    var deleteBtn = createDeleteButton(postDiv);

    title.innerText = document.getElementById('post-title').value;
    content.innerText = document.getElementById('post-content').value;

    postDiv.appendChild(title);
    postDiv.appendChild(content);
    postDiv.appendChild(image);
    postDiv.appendChild(deleteBtn);

    return postDiv;
}

function createImage() {
    var image = document.createElement('img');
    var file = document.getElementById('post-image').files[0];
    var reader = new FileReader();

    reader.onloadend = function() {
        image.src = reader.result;
        image.className = 'post-image';
    }

    if (file) {
        reader.readAsDataURL(file);
    } else {
        image.src = '';
        image.className = ''; 
    }

    return image;
}

function createDeleteButton(postDiv) {
    var deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'Delete';
    deleteBtn.className = 'delete-btn';
    deleteBtn.addEventListener('click', function() {
        postDiv.remove();
    });

    return deleteBtn;
}
