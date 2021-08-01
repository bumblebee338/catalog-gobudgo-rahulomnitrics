import { useState,useEffect } from 'react';
import {cars} from './Cars_dataset';
import HOC from './HOC';

const Cars = () =>{
    const [listofcars,setcars] = useState([]);
    const [allCars, setallCars] = useState([]);

    useEffect(() => {
        setallCars(cars);
        setcars(cars);
        
    },[] )

    const getNewData = (data) =>{
        setcars(data);
        console.log(allCars);
        
    }

    console.log(cars);
    return(
        <div>
            <h1>List of Cars</h1>
            <HOC content={allCars} reverse={getNewData} from="cars"/>
            <br/>
        <div className="container car">
        {listofcars.map(car =>
            <div>
                <div class="card" style={{'width': '20rem','marginBottom':'2rem'}}>
                <img src={car.Img} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h4 class="card-title">{car.Make}</h4>
                    <h6 class="card-title">{car.Model}</h6>
                    
                    <label for="detail">Check to view more 👉</label>
                    <input type="checkbox" id="detail" className="checkbox" />
                    
                    <div className="popup" id="popup">
                        <p><b>Company:</b> {car.Make}</p>
                        <p><b>Model:</b> {car.Model}</p>
                        <p><b>Category:</b> {car.Category}</p>
                        <p><b>Year:</b> {car.Year}</p>
                        <a href={car.Img} target="_blank" className="btn btn-primary">Click Here to View Image</a>
                    </div>
                   
                </div>
                </div>
            </div>
        )}
        </div>
           
        </div>
    )
}

export default Cars;