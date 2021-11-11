const user = {
    firstName: 'Rildo',
    lastName: 'Silva',
    age: 51,
    instagram: '@rildo.silva',
    skills: ['Back-end', 'Front-end', 'Mobile', 'UI/UX'],
    active: false,
};
// spread (espalhar) operator
// user.active = true
const updateUser = {
   ...user,
   skills: [...user.skills, 'Logística'],
   active: true,
}
console.log({user});
console.log({updateUser});