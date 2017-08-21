import axios from 'axios';

function getBlogDetails(url) {
    return axios.get(url)
        .then((response) => {
            let blog = response.data.blogs.filter(blog => parseInt(blog.id) == 1);
            return blog;
        }).catch((error) => {
            handleError(error);
        });
}

function getBlogs(url, id) {
    return axios.get(url)
        .then(({response}) => {
            let blogs;
            if (id) {
                blogs = response.data.blogs.filter((blog) => {
                    return blog.category == id;
                })
            } else {
                blogs = response.data.blogs;
            }
            return blogs;
        }).catch((error) => {
            handleError(error);
        });
}

function getAuthorByBlogId(url, id) {
    return axios.get(url)
        .then((response) => {
            // the id of the blog will sent as a prop to the component in Navigating
            let Author = response.data.users.filter((user) => {
                return user.id == id
            })
            return Author;
        }).catch((error) => {
            handleError(error);
        });
}

function getCommentsByBlogId(url, id) {
    return axios.get(url)
        .then((response) => {
            let comment = response.data.comments.filter((blog) => {
                return blog.postId == id
            })
            return comment;
        }).catch((error) => {
            handleError(error);
        });
}

function getCategories(url) {
    return axios.get(url)
        .then((response) => {
            return response.data.categories;
        }).catch((error) => {
            handleError(error);
        });
}

function handleError(error) {
    console.warn(error);
    if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
    }
    return null;
}

export {
    getBlogDetails,
    getBlogs,
    getAuthorByBlogId,
    getCommentsByBlogId,
    getCategories
};