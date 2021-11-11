const user = {
    firstName: 'Rildo',
    lastName: 'Silva',
    age: 51,
    instagram: '@rildo.silva',
    skills: ['Back-end', 'Front-end', 'Mobile', 'UI/UX'],
};

const {firstName,skills, ...rildo} = user;
const [ primary ] = skills

console.log(rildo);