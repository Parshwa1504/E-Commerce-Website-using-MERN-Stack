import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions } from "@mui/material";
import shirt from "../../asset/img/shirt1.jpg";
import pant from "../../asset/img/pant1.jpg";
import "./index.css";
export default function MultiActionAreaCard() {
  const [hmPrice1, sethmPrice1] = React.useState(0);
  const [amazonPrice1, setamazonPrice1] = React.useState(0);
  const [hmPrice2, sethmPrice2] = React.useState(0);
  const [amazonPrice2, setamazonPrice2] = React.useState(0);
  React.useEffect(() => {
    var axios = require("axios");
    //HM price
    var config = {
      method: "get",
      url: "https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/list?country=us&lang=en&currentpage=0&pagesize=30&categories=men_all&concepts=H%26M MAN",
      headers: {
        "X-RapidAPI-Key": "11df41a0f9mshb3cb81b0f6353eep1179dejsn5e368ba8b8c7",
        "X-RapidAPI-Host": "apidojo-hm-hennes-mauritz-v1.p.rapidapi.com",
      },
    };

    axios(config)
      .then(function (response) {
        const data = response.data;
        sethmPrice1(data.results[0].price.value);
        sethmPrice2(data.results[1].price.value);
      })
      .catch(function (error) {
        console.log(error);
      });

    //Amazon Shirt price
    config = {
      method: "get",
      url: "https://amazon24.p.rapidapi.com/api/product/B07JHQ8TJX?country=US",
      headers: {
        "X-RapidAPI-Key": "11df41a0f9mshb3cb81b0f6353eep1179dejsn5e368ba8b8c7",
        "X-RapidAPI-Host": "amazon24.p.rapidapi.com",
      },
    };

    axios(config)
      .then(function (response) {
        // console.log(JSON.stringify(response.data));
        const data = response.data;
        setamazonPrice1(data.app_sale_price);
      })
      .catch(function (error) {
        console.log(error);
      });

    //Amazon Pant price

    var options = {
      method: "GET",
      url: "https://amazon24.p.rapidapi.com/api/product/B07PR25L4H",
      params: { country: "US" },
      headers: {
        "X-RapidAPI-Key": "11df41a0f9mshb3cb81b0f6353eep1179dejsn5e368ba8b8c7",
        "X-RapidAPI-Host": "amazon24.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        const data = response.data;
        setamazonPrice2(data.app_sale_price);
      })
      .catch(function (error) {
        console.error(error);
      });
    //HM pant price
  }, []);
  return (
    <div className="container">
      <Card className="card" sx={{ maxWidth: 345, padding: 2 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="400"
            image={shirt}
            alt="HM shirt"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Casual Shirt
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className="priceContainer">
          <Card
            style={{
              backgroundColor: "red",
            }}
          >
            <Typography>HM price:{hmPrice1}</Typography>
          </Card>
          <Card
            style={{
              backgroundColor: "green",
            }}
          >
            <Typography>Amazon Price:{amazonPrice1}</Typography>
          </Card>
        </CardActions>
      </Card>
      <Card className="card" sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia component="img" height="400" image={pant} alt="HM pant" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Casual Pant
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className="priceContainer">
          <Card
            style={{
              backgroundColor: "green",
            }}
          >
            <Typography>HM price:{hmPrice2}</Typography>
          </Card>
          <Card
            style={{
              backgroundColor: "red",
            }}
          >
            <Typography>Amazon Price:{amazonPrice2}</Typography>
          </Card>
        </CardActions>
      </Card>
    </div>
  );
}
