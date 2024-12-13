import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const goitApi = axios.create({
  baseURL: 'https://connections-api.goit.global',
});

const setAuthAppBar = (token) => {
  goitApi.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthAppBar = () => {
  goitApi.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const response = await goitApi.post('/users/signup', credentials);
      setAuthAppBar(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const response = await goitApi.post('/users/login', credentials);
      setAuthAppBar(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await goitApi.post('/users/logout');
    clearAuthAppBar();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
