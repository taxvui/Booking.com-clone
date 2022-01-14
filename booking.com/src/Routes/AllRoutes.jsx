import { Route, Switch } from "react-router-dom";
import CarAvailable from "../CarRentalsPage/CarAvailable";
import CarRentals from "../CarRentalsPage/CarRentals";
import CarSearch from "../CarRentalsPage/CarSearch";

export default function AllRoutes(){

    return(
        <>
          <Switch>
          <Route exact path="/">
               
            </Route>
            <Route exact path="/carrentals">
                <CarRentals/>
            </Route>
            <Route exact path="/car-available">
                <CarAvailable/>
            </Route>
            <Route exact path="/carrentals/:id">
              <CarSearch/>
            </Route>
          </Switch>
        </>
    )
}