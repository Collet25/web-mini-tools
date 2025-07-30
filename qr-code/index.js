import inquirer from "inquirer"
import qr from 'qr-image';
import fs, { writeFile } from 'fs';


inquirer
    .prompt([
        {message: "Enter the URL: ", name: "URL"}
    ])
    .then((answers) => {
        const url = answers.URL;
        const qr_png = qr.image(url);
        qr_png.pipe(fs.createWriteStream("qr_img.png"));

        fs.writeFile("URL.txt", url, (err)=>{
            if (err) throw err;
            console.log("The file has been saved.");
        })
    })
    .catch((error) => {
        if (error.isTtyError) {
            return "It's an invalid URL."
        } else {
            return "Something went wrong. Please wait..."
        }
    });

