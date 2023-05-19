import { UserData } from '@/types';

export const loginUser = async (userData: UserData) => {
  try {
    const response = await fetch(
      'https://olympic-athletes-server.onrender.com/auth/login',
      {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
          'Content-Type': 'application/json',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(userData), // body data type must match "Content-Type" header
      }
    );
    const { data } = await response.json();

    if (!response.ok) {
      throw new Error(data);
    }

    const { token, user } = data;
    const { email } = user;

    return {
      data: { email, token },
    };
  } catch (error) {
    throw new Error(error as string);
  }
};
