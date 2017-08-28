import axios from 'axios';
import { API_URL } from 'react-native-dotenv';

const localURL = 'http://192.168.56.1:3000';

function getBlogDetails(API_URL) {
    return axios.get(API_URL || localURL)
        .then(({ data }) => {
            let blog = data.blogs.filter(blog => parseInt(blog.id) == 1);
            return blog;
        }).catch((error) => {
            handleError(error);
        });
}

function getBlogs() {
    let url = API_URL + '/blogs';
    return axios.get(url || localURL + '/blogs')
        .then((response) => {
            console.log(response)
            let blogs;
            blogs = response.data;
            return blogs;
        }).catch((error) => {
            handleError(error);
        });
}

function getBlogsbyId(id) {
    let url = API_URL + '/blogs';
    return axios.get(url || localURL + '/blogs')
        .then(({ data }) => {
            let blogs;
            if (id) {
                blogs = data.filter((blog) => {
                    return blog.category == id;
                })
            }
            return blogs;
        }).catch((error) => {
            handleError(error);
        });
}

function getAuthorByBlogId(id) {
    let url = API_URL + '/users';
    return axios.get(url || localURL + '/users')
        .then(({ data }) => {

            let Author = data.filter((user) => {
                return user.id == id
            })
            return Author;
        }).catch((error) => {
            handleError(error);
        });
}

function getCommentsByBlogId(id) {
    let url = API_URL + '/comments';
    return axios.get(url ||  localURL + '/comments')
        .then(({ data }) => {
            let comments = data.filter((comment) => {
                return comment.postId == id
            })
            return comments;
        }).catch((error) => {
            handleError(error);
        });
}

function getCategories() {
    let url = API_URL + '/categories';
    return axios.get(url || localURL + '/categories')
        .then(({ data }) => {
            return data;
        }).catch((error) => {
            handleError(error);
        });
}

addComment = (id, name, comment) => {

    let new_comment = {
        id: Math.random(),
        postId: id,
        image: 'http://www.sessionlogs.com/media/icons/defaultIcon.png',
        email: 'blaa@bla.com',
        name: name,
        body: comment
    }
    let url = API_URL + '/comments';
    return axios.post(url || localURL + '/comments' , new_comment)
        .then((response) => {
            console.log(response)
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

function getBlogsByAuthor(id) {
    return axios.get(API_URL)
        .then(({ data }) => {

            let blogs = data.blogs.filter((blog) => {
                return blog.id == id
            })
            return blogs;
        }).catch((error) => {
            handleError(error);
        });
}
function getAuthorInfo(id) {
    return axios.get(API_URL)
        .then(({ data }) => {
            let author = data.users.filter((user) => {
                return user.id == id
            })
            return author;
        }).catch((error) => {
            handleError(error);
        });
}
export {
    getBlogDetails,
    getBlogs,
    getAuthorByBlogId,
    getCommentsByBlogId,
    getCategories,
    addComment,
    getBlogsbyId,
    getBlogsByAuthor,
    getAuthorInfo
};