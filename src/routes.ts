import express from 'express';
const routes = express.Router();
import axios from "axios";

const client_id = process.env.CLIENT_ID;
const client_secret = process.env.CLIENT_SECRET;

async function sendAccessToken(token: string | null) {
  const { data } = await axios.get('https://api.github.com/user', {
    headers: {
      Authorization : `bearer ${token}`
    }
  });

  const user = {
    name: data.name,
    user_name: data.login,
    profile_image: `https://github.com/${data.login}.png`,
    company: data.company,
    location: data.location,
    repos: data.repos_url
  };
  
  return user
}

async function getGithubToken(code: any) {
  const data = {
    client_id,
    client_secret,
    code
  }

  const response = await axios.post('https://github.com/login/oauth/access_token', data, {
    method: 'POST',
    headers: {
      "Content-Type":"application/json"
    }
  });
  
  const params = new URLSearchParams(response.data);
  const token = params.get('access_token');

  const userData = await sendAccessToken(token);

  return userData
};


routes.get('/', (req, res) => { 
  res.redirect(`https://github.com/login/oauth/authorize?client_id=${client_id}`);
});

routes.get('/loading', async (req, res) => {
  const { code } = req.query;

  const user = await getGithubToken(code);

  const { data } = await axios.get(user.repos);

  res.send(`
    <stong>${user.name}</stong>
    <img src="${user.profile_image}" alt="">
    <p>Company: ${user.company}</p>
    <p>City: ${user.location}</p>
    <div>${
      data.map(({name, url}: any) => `
        <stong>${name}</stong>
        <a href="https://github.com/${user.user_name}/${name}" target="_blank">View</a>
      `)
    }</div>
  `); 
});

export default routes;