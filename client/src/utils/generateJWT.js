const generateJWT = () => {
  var axios = require("axios");

  var config = {
    method: "get",
    url: `${process.env.REACT_APP_MAIN_URI}/generateToken`,
    headers: {},
  };

  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      localStorage.setItem("jwt", response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
};

module.exports = generateJWT;
