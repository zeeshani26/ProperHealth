import axios from "axios";

export const getData = ({ sort, order = "desc", type = "" }) => {
  return axios.get(`https://blog-database-smoky.vercel.app/blogs`, {
    params: { _sort: sort, _order: order, type: type },
  });
};

export const getSingleData = (id) => {
  return axios.get(`https://blog-database-smoky.vercel.app/blogs/${id}`);
};

export const AddArticle = (data) => {
  return axios.post(`https://blog-database-smoky.vercel.app/blogs`, {
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
