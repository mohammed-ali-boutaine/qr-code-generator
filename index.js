import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

const outputFile = "data/output.png";
const txtFile = "data/userData.txt";

inquirer
  .prompt([
    {
      name: "value",
      message: "URL?",
      type: "input",
    },
  ])

  
  .then(function (answer) {
    const url = answer.value;

    // Create a QR code image
    const qrImage = qr.image(url, { type: "png" });

    // Save the QR code image to a file
    qrImage.pipe(fs.createWriteStream(outputFile));

    // Append user url to file
    fs.appendFile(txtFile, url + "\n", function (err) {
      if (err) {
        console.error("Error writing to userData.txt:", err);
        process.exit(1);
      }

      console.log(`QR code generated and saved to ${outputFile}`);
      console.log(`URL added to ${txtFile}`);
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.error("Prompt couldn't be rendered in the current environment");
    } else {
      console.error("Something went wrong:", error);
    }
    process.exit(1);
  });