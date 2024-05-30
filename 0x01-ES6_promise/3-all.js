import {uploadPhoto} from './utils';
import {createUser} from './utils';

export default function handleProfileSignup(){
    
    let x = ""
    const promise2 = uploadPhoto();
    promise2.then((objectphoto)=>{
        x += ` ${objectphoto['body']}`       
    })

    const promise1 = createUser();
    promise1.then((objectuser)=>{
        x += ` ${objectuser['firstName']}` 
        x += ` ${objectuser['lastName']}`       
      console.log(x)
    })
}