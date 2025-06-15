"use client"
import { useEffect, useState } from "react";
import styles from "./Hotels.module.css";
type Cities = {
  city: string;
};
type Hotels = {
    id: number,
    name: string,
    address: string,
    city: string,
    featuredImage: any,
    rooms: []
}

export default function Hotels() {
  const [cities, setCities] = useState<Cities[]>([]);
  const [hotels, setHotels] = useState<Hotels[]>([]);

  useEffect(() => {
    const fetchCities = async () => {
      try {
        const citiesResponse = await fetch(
          "https://hotelbooking.stepprojects.ge/api/Hotels/GetCities"
        );
        const citiesData = await citiesResponse.json();
        setCities(citiesData);

        const hotelsResponse = await fetch("https://hotelbooking.stepprojects.ge/api/Hotels/GetHotels?city=Tbilisi");
        const hotelsData = await hotelsResponse.json();
        setHotels(hotelsData);
        console.log(hotelsData);
        

      } catch {
        console.log("errrr");
        
      }
    };
    fetchCities();
  });
  return (
    <section className={styles.hotelsSect}>
      <div className={styles.cityDiv}></div>
      <div className={styles.cardDiv}>
        {hotels.map((hotel) => (
            <div className={styles.card} key={hotel.id}>
                <div  className={styles.c1}>
                    <img src={hotel.featuredImage} alt="" />
                    <p>{hotel.name}</p>
                    
                </div>
                <button>
                    VIEW ROOMS
                </button>
            </div>
        ))}
      </div>
    </section>
  );
}
