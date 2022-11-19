import Header from "./components/Header";
import Location from "./components/Location";
import data from "./data";
console.log(data);

export default function App() {

    const travel = data.map(item => {
        return (
            <Location
                key = {item.id}
                image = {item.image}
                country = {item.country}
                location = {item.location}
                visit = {item.visit}
                description = {item.description}
            />
        )
    })

    return (
        <div className="container">
            <Header />
            <div className="location-container">
                {travel}
            </div>
        </div>
    )
}