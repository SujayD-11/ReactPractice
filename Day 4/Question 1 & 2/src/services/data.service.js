import axios from 'axios';

export let dataServiceObj = 
{
    getAll,
    getById,
    add,
    update,
    del
};



//let url = "http://localhost:3500/depts/";
let url = "http://localhost:3501/emp/";

function getAll()
{
    return axios.get(url);
}


function add(obj)
{
    return axios.post(url, obj);
}

function del(id)
{
    return axios.delete(url + id);
}


function getById(id)
{
    return axios.get(url + id);
}

function update(obj,id)
{
    return axios.put(url + id, obj);
}