import * as yup from 'yup';
export const IMAGE_URL = 'https://image.tmdb.org/t/p/original';

export const EMPTY_MOVIE_URL =
  'https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg';

export function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(' ');
}

export const url = 'https://movie-database-alternative.p.rapidapi.com/';
export const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': process.env.MD_API_KEY,
    'X-RapidAPI-Host': 'movie-database-alternative.p.rapidapi.com',
  },
};
const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
export const registerSchema = yup.object().shape({
  name: yup.string().required('Required'),
  phone: yup.string(),
  email: yup.string().email('must be valid email address'),
  password: yup
    .string()
    .matches(passwordRules, {
      message:
        'Please must be at least 5 character long and contain at least 1 number, 1 uppercase and 1 lowercase letters',
    })
    .required('Required'),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref('password')], 'Passwords must match')
    .required('Required'),
});

export const updateSchema = yup.object().shape({
  name: yup.string().required('Required'),
  phone: yup.string(),
  email: yup.string().email('must be valid email address'),
});
