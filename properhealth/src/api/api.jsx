import axios from "axios";

export const getData = ({ sort, order="desc", type="" }) => {
  return axios.get(`http://localhost:3000/blogs`, {
    params: { _sort: sort, _order: order, type: type },
  });
};

export const getSingleData = (id) => {
    return axios.get(`http://localhost:3000/blogs/${id}`);
  };

export const AddArticle = (data) => {
  return axios.post(`http://localhost:3000/blogs`, {
    data: data.data,
    date: data.date,
    desc: data.desc,
    img: data.img,
    title: data.title,
    type: data.type,
  });
};

export const AddUser = (data) => {
  return axios.post(`https://reqres.in/api/register`, {
    email: "eve.holt@reqres.in",
    password: "pistol",
  });
};

export const AuthUser = (data) => {
    return axios.get(`http://localhost:3000/users`);
  };

