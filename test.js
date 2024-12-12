const tesseract = require("node-tesseract-ocr");


const config = {
  lang: "eng",
  oem: 1,
  psm: 3 ,
};

const filePath = ["image2.png","image3.png"]

    tesseract.recognize(filePath, config)
      .then((text) => {
        console.log("Result:", text);
      })
      .catch((error) => {
        console.log(error.message);
      });
