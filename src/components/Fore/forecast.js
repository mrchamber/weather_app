import "./forecast.css"
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel, } from "react-accessible-accordion";
const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const dayInAWeek = new Date().getDay();
const forecastDays = weekDays.slice(dayInAWeek, weekDays.length).concat(weekDays.slice(0, dayInAWeek));

const Forecast = ({ data }) => {

    return (
        <>
            <h2 className="title">Weekly Forecast</h2>
            <Accordion allowZeroExpanded>
                <div className="week_container">
                    {data.list.splice(0, 7).map((item, index) => (
                        <AccordionItem key={index}>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    <div className="foreDays">
                                        <div className="day">
                                            <div className="foreCard">
                                                <div className="img-container">
                                                    <img id="poke" src={`icons/${item.weather[0].icon}.png`} className="icon-small" alt="weather" />
                                                </div>
                                                <div className="info">
                                                    <h3 className="day_name">{forecastDays[index]}</h3>
                                                    <span className="number">{item.weather[0].description.toUpperCase(1)}</span>
                                                    <br />
                                                    <span className="number">{Math.round(item.main.temp)}°F</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <div className="detail-grid">
                                    <div className="detail-grid-item">
                                        <label>Min Temp: </label>
                                        <label>{Math.round(item.main.temp_min)}°F</label>
                                    </div>
                                    <div className="detail-grid-item">
                                        <label>Max Temp: </label>
                                        <label>{Math.round(item.main.temp_max)}°F</label>
                                    </div>
                                    <div className="detail-grid-item">
                                        <label>Humidity: </label>
                                        <label>{item.main.humidity}%</label>
                                    </div>
                                    <div className="detail-grid-item">
                                        <label>Wind: </label>
                                        <label>{Math.round(item.wind.speed)} mph</label>
                                    </div>
                                </div>
                            </AccordionItemPanel>
                        </AccordionItem>
                    ))}
                </div>
            </Accordion>
        </>
    )
}

export default Forecast;