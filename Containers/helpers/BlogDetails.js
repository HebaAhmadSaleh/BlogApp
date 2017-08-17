
import axios from 'axios';

export class blogDetailsHelpers {


    getBlogDetails = (url) => {
        return axios.get(url)
            .then((response) => {
                // the id of the blog will sent as a prop to the component in Navigating
                let blog = response.data.blogs.filter(blog => parseInt(blog.id) == 1);
                return blog;
            }).catch((error) => {
                console.log(error.message);

                if (error.response) {
                    // The request was made and the server responded with a status code 
                    // that falls out of the range of 2xx 
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                }
                return error.message;
            });
    }

    getBlogs = (url, id) => {
        return axios.get(url)
            .then((response) => {
                // the id of the blog will sent as a prop to the component in Navigating
                let blogs = response.data.blogs.filter((blog) => {
                    return blog.category == id
                })
                return blogs;
            }).catch((error) => {
                console.log(error.message);

                if (error.response) {
                    // The request was made and the server responded with a status code 
                    // that falls out of the range of 2xx 
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                }
                return error.message;
            });
    }

    getAuthorByBlogId = (url, id) => {
        return axios.get(url)
            .then((response) => {
                // the id of the blog will sent as a prop to the component in Navigating
                let Author = response.data.users.filter((user) => {
                    return user.id == id
                })
                return Author;
            }).catch((error) => {
                console.log(error.message);

                if (error.response) {
                    // The request was made and the server responded with a status code 
                    // that falls out of the range of 2xx 
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                }
                return error.message;
            });
    }
}