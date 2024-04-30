export default function Card(props) {
    return (
        <div className="card">
            <div className="card--img-container">
                <img src={props.imageUrl} className="card--img" />
            </div>

            <div className="card--stats">
                <img src="/public/images/card-pin.svg" className="card--pin" />
                <h2 className="card--location">{props.location}</h2>
                <a href="https://goo.gl/maps/1DGM5WrWnATgkSNB8" className="card--location-url">
                    View on Google Maps
                </a>
                <h3 className="card--title">{props.title}</h3>
                <p className="card--date">
                    {props.startDate} - {props.endDate}
                </p>
                <p className="card--desc">{props.description}</p>
            </div>
        </div>
    );
}
 /*
title: "Mount Fuji",
location: "Japan",
googleMapsUrl: "https://goo.gl/maps/1DGM5WrWnATgkSNB8",
startDate: "12 Jan, 2021",
endDate: "24 Jan, 2021",
description:
  "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.",
imageUrl: "https://source.unsplash.com/WLxQvbMyfas",
},

/* props. 

export default function Card(props) {
    return (
        <div className="card">
            <div className="card--img-container">
                <img src={props.imageURL} className="card--img" />
            </div>

            <div>
                <img src="/public/images/pin.png" />
                <h2>{props.location}</h2>
                <a href={props.googleMapsUrl}>
                    View on Google Maps
                </a>
                <h3>{props.title}</h3>
                <p>
                    {props.startDate} - {props.endDate}
                </p>
                <p>{props.description}</p>
            </div>

        </div>
    );
} */