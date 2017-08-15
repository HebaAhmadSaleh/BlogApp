
import axios from 'axios';

export class categoriesHelpers {


    getCategories = (url) => {
        return axios.get(url)
            .then((response) => {
             return response.data.categories;
            }).catch((error) => {
                console.log(error.message);

                if (error.response) {
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                }
                return 0;
            });
    }

}