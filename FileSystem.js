
// Promise based Approach


import { log } from 'console';
import * as fs from 'fs/promises'

// try{
//     await fs.mkdir('C:\\NodeJSFOLDER');
//     console.log("Folder created");
// }
// catch(error){
//     console.log('Error: ', error)
// }


//Read the file

try {
  const files = await fs.readdir("C:\\NodeJSFOLDER");
  for (const file of files) {
    console.log(file);
  }
}

catch (error) {
  console.log("Error: ", error);
}
//Remove

// try {

//     await fs.rmdir("C:\\Courses")
    
// } catch (error) {
//     console.log(error)
// }

//Write files

// try{
//     await fs.writeFile("README.md","Hello")
// }
// catch(error){
//     console.log(error);
// }


//Append

// try {

//     await fs.appendFile("README.md","NodeJS is the best")
    
// } catch (error) {

//     console.log(error)
    
// }

// try {
//   await fs.appendFile("README.md", "\nNodeJS is the best");
// } catch (error) {
//   console.log(error);
// }

//Information about a file

try {

    const info=await fs.stat("./FileSystem.js")
    console.log(info)
    console.log(info.isDirectory())
    console.log(info.isFile());
} catch (error) {
    console.log(error)
}