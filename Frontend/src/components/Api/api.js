import axios from "axios";



// ------------------- ( NEws ) --------------------------

export const getNews = () => {
  return axios.get(`http://localhost:8080/news`);
};

export const addNews = ({
  image,
  author,
  website,
  title,
  content,
  description,
  date,
  url,
}) => {
  return axios.post(`http://localhost:8080/news/addnews`, {
    image: image,
    author: author,
    website: website,
    title: title,
    content: content,
    description: description,
    date: new Date(),
    url: url,
  });
};

export const deleteNews = ({ _id }) => {
  return axios.post(`http://localhost:8080/news/deletenews`, {
    _id,
  });
};


// ------------------------ (Interview) ---------------------

export const getInterview = () => {
  return axios.get(`http://localhost:8080/interview`);
};

export const addInterview = ({
  image,
  author,
  website,
  title,
  content,
  description,
  date,
  url,
}) => {
  return axios.post(`http://localhost:8080/interview/addinterview`, {
    author: author,
    title: title,
    content: content,
    description: description,
    date: new Date(),
  });
};

export const deleteInterview = ({ _id }) => {
  console.log("_id: ", _id);
  return axios.post(`http://localhost:8080/interview/deleteinterview`, {
    _id,
  });
};






// --------------------- (Log IN) -------------------

export const signUP = ({ name, email, password }) => {
  return axios.post(`http://localhost:8080/user/signup`, {
    name: name,
    email: email,
    password: password,
    role: "user",
  });
};

export const logIN = ({ email, password }) => {
  return axios.post(`http://localhost:8080/user/signin`, {
    email: email,
    password: password,
  });
};
