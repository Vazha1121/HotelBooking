"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import styles from './GetMessage.module.css'

type Hotel = {
  id: number;
  name: string;
  hotelId: number;
  pricePerNight: number;
  available: boolean;
  maximumGuest: number;
  roomTypeId: number;
  bookedDates: [];
  images: [
    id:number,
    source: string,
    roomId: number
  ]
};

export default function GetMessage() {
  const [rooms, setRooms] = useState<Hotel[]>([]);
  useEffect(() => {
    axios
      .get("https://hotelbooking.stepprojects.ge/api/Rooms/GetAll")
      .then((res) => {
        setRooms(res.data);
        console.log(res.data);
      })
      .catch((err) => console.error("Error fetching data", err));
  }, []);

  return (
    <section className={styles.section}>
      <div className={styles.cardDiv}>
      {rooms.map((room) => (
        <div key={room.id} className={styles.cards}>
          <div>
            <img src={room.images[2].source} alt={room.name} />
          </div>
          <div className={styles.infoDiv}>
            <h3>{room.name}</h3>
            <p>{room.pricePerNight}</p>
          </div>
          <button>
            VIEW ROOM
          </button>
        </div>
      )).slice(0,6)}
    </div>
    </section>
  );
}
