import instance from 'https://cdn.skypack.dev/axios';
import { setupCache } from 'https://cdn.skypack.dev/axios-cache-interceptor';

// import axios from 'axios';

const instance = axios.create({
    baseURL: ' https://rickandmortyapi.com/api',
  });

export {instance}