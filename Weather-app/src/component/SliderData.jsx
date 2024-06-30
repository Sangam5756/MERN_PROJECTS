import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
const SliderData = ({data}) => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed :3000,
    arrows:false,
  };
  return (
    <div>
      {/* Slider  */}

      <div className=" text-center">

        {data.length > 0 ? (
          <Slider {...settings}>
            {data.map((entry, index) => (
              <Card key={index} sx={{ m: 1 }}>
                <CardContent>
                  <Typography
                    sx={{ fontSize: 12 }}
                    color="text.secondary"
                    gutterBottom
                    className="flex"
                  >
                    {`Date: ${entry.dt_txt.split(" ")[0]}`}
                  </Typography>
                  <Typography variant="h5" component="div">
                    Temp: {(entry.main.temp - 273.15).toFixed(2)}°C
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {entry.weather[0].description}
                  </Typography>
                  <Typography variant="body2">
                    <ul>
                      <li>
                        Min Temp: {(entry.main.temp_min - 273.15).toFixed(2)}°C
                      </li>
                      <li>
                        Max Temp: {(entry.main.temp_max - 273.15).toFixed(2)}°C
                      </li>
                      <li>Humidity: {entry.main.humidity}%</li>
                      <li>Wind Speed: {entry.wind.speed} m/s</li>
                    </ul>
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Slider>
        ) : (
          <Typography>Loading...</Typography>
        )}
      </div>


    </div>
  )
}

export default SliderData