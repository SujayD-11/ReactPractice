import axios from 'axios';

export let dataServiceObj = 
{
    getAll
};


function getAll(url)
{
    return axios.get(url);
}
