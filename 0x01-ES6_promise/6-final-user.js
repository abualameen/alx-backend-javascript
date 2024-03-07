import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  try {
    const signUpResponse = await signUpUser(firstName, lastName);
    const uploadResponse = await uploadPhoto(fileName);
    return {
      photo: uploadResponse,
      user: signUpResponse,
    };
  } catch (error) {
    return {
      photo: null,
      user: null,
    };
  }
}
