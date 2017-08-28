import axios from 'axios';
 import { API_URL } from 'react-native-dotenv';

function getBlogDetails(API_URL) {
    return axios.get(API_URL)
        .then(({ data }) => {
            let blog = data.blogs.filter(blog => parseInt(blog.id) == 1);
            return blog;
        }).catch((error) => {
            handleError(error);
        });
}

function getBlogs() {
    return axios.get(API_URL)
        .then(({ data }) => {
            let blogs;
            blogs = data.blogs;
            return blogs;
        }).catch((error) => {
            handleError(error);
        });
}

function getBlogsbyId( id) {
    return axios.get(API_URL)
        .then(({ data }) => {
            let blogs;
            if (id) {
                blogs = data.blogs.filter((blog) => {
                    return blog.category == id;
                })
            }
            return blogs;
        }).catch((error) => {
            handleError(error);
        });
}

function getAuthorByBlogId(id) {
    return axios.get(API_URL)
        .then(({ data }) => {

            let Author = data.users.filter((user) => {
                return user.id == id
            })
            return Author;
        }).catch((error) => {
            handleError(error);
        });
}

function getCommentsByBlogId(id) {
    return axios.get(API_URL)
        .then(({ data }) => {
            let comments = data.commets.filter((blog) => {
                return blog.postId == id
            })
            return comments;
        }).catch((error) => {
            handleError(error);
        });
}

function getCategories() {
    return axios.get(API_URL)
        .then(({ data }) => {
            return data.categories;
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