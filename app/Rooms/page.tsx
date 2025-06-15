"use client";
import React, { useEffect, useState } from "react";
import styles from "./Rooms.module.css";
import axios from "axios";

type Rooms = {
  id: number;
  name: string;
  hotelId: number;
  pricePerNight: number;
  available: boolean;
  maximumGuests: number;
  roomTypeId: number;
  bookedDates: [];
  images: [id: number, roomId: number, source: any];
};
type RoomsType = { id: number; name: string };
export default function Rooms() {
  /* Room Types */

  const [roomsType, setRoomsType] = useState<RoomsType[]>([]);
  const [rooms, setRooms] = useState<Rooms[]>([]);
  const [selectedRoomType, setSelectedRoomType] = useState(0);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const roomsResponse = await fetch(
          "https://hotelbooking.stepprojects.ge/api/Rooms/GetAll"
        );
        if (!roomsResponse.ok) {
          throw new Error("error");
        }
        const roomsData = await roomsResponse.json();
        setRooms(roomsData);

        const roomTypeRespons = await fetch(
          "https://hotelbooking.stepprojects.ge/api/Rooms/GetRoomTypes"
        );
        if (!roomTypeRespons.ok) {
          throw new Error("error");
        }
        const roomTypeData = await roomTypeRespons.json();
        setRoomsType(roomTypeData);
      } catch {
        console.log("errr");
      }
    };
    fetchRooms();
  });
  const handleRoomTypeClick = (roomType: any) => {
    setSelectedRoomType(roomType);
  };
  const filteredRooms =
    selectedRoomType === 0
      ? rooms
      : rooms.filter((room) => room.roomTypeId === selectedRoomType);

  return (
    <main>
      <section className={styles.roomSec1}>
        <div className={styles.roomType}>
          <ul>
            <li onClick={() => handleRoomTypeClick(0)}>All</li>
            {roomsType.map((type) => (
              <li key={type.id} onClick={() => handleRoomTypeClick(type.id)}>
                {type.name}
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.roomFilter}>
          <form action="">
            <div className={styles.rangeDiv}></div>
            <div className={styles.inputDiv}>
              <div>
                <label htmlFor="option">Room Type</label>
                <select name="" id="">
                  <option value="">Select a room</option>
                  <option value="Single Room">Single Room</option>
                  <option value="Double Room">Double Room</option>
                  <option value="Deluxe Room">Deluxe Room</option>
                </select>
              </div>
              <div className={styles.checkInOut}>
                <div>
                  <label htmlFor="">Check-in</label>
                  <input type="date" name="" id="" />
                </div>
                <div>
                  <label htmlFor="">Check-out</label>
                  <input type="date" name="" id="" />
                </div>
              </div>
              <div>
                <label htmlFor="">Guests</label>
                <select name="" id="">
                  <option value="1">1 adult</option>
                  <option value="2">2 adult</option>
                  <option value="3">3 adults</option>
                  <option value="4">4 adults</option>
                  <option value="5">5 adults</option>
                </select>
              </div>
            </div>
            <div className={styles.buttonDiv}>
              <button>APPLY FILTER</button>
              <button>RESET</button>
            </div>
          </form>
        </div>
        <div className={styles.roomsCard}>
          <div className={styles.cardDiv}>
            {filteredRooms.map((room) => (
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
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
