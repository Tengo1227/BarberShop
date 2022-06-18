import {barberList} from "./database"
import { Barber } from "./styled/components/Barber";
import { BarberListStyle } from "./styled/components/BarberListStyle";

function BarberList() {

    return(
    <BarberListStyle>
        {
            barberList.map(barber => 
              <Barber key={barber.id}>
                <h1>First Name: {barber.firstName}</h1>
                <h1>Last Name: {barber.lastName}</h1>
                <h1>email: {barber.email}</h1>
                <h1>Address: {barber.address}</h1>
                <h1>Price: {barber.price} GEL</h1>
              </Barber>
          )
        }
    </BarberListStyle>
     
      )
}

export default BarberList;