"use client";
import { useEffect, useState } from "react";
import styles from "./bookedRooms.module.css";
import axios from "axios";
import { width } from "@fortawesome/free-brands-svg-icons/fa42Group";

type Books = {
  id: number;
  roomID: number;
  checkInDate: string;
  checkOutDate: string;
  totalPrice: number;
  isConfirmed: boolean;
  customerName: string;
  customerId: string;
  customerPhone: string;
};
type Rooms = {
  id: number;
  name: string;
  hotelId: number;
  pricePerNight: number;
  available: boolean;
  maximumGuests: number;
  roomTypeId: number;
  bookedDates: {
    id: number;
    date: string;
    roomId: number;
  };
  images: [
    id: any, 
    roomId: number, 
    source: string
  ];
};
export default function BookedRooms() {
  const [books, setBooks] = useState<Books[]>([]);
  const [rooms, setRooms] = useState<Rooms[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [booksResponse, roomsResponse] = await Promise.all([
          axios.get("https://hotelbooking.stepprojects.ge/api/Booking"),
          axios.get("https://hotelbooking.stepprojects.ge/api/Rooms/GetAll"),
        ]);

        const booksData = booksResponse.data;
        const roomsData = roomsResponse.data;

        setBooks(booksData);
        setRooms(roomsData);

        roomsData.forEach((room: any) => {
          booksData.forEach((book: any) => {
            
          });
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <section className={styles.bookedSect}>
      <table>
        <thead>
          <tr>
            <th>Room</th>
            <th>Customer</th>
            <th>Status</th>
            <th>Check in</th>
            <th>Check out</th>
            <th>Total Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => {
            const room = rooms.find((r) => r.id === book.roomID);
            return (
              <tr key={book.id}>
                <td>
                  {room ? (
                    <div className={styles.imgTd}>
                      <img src={room.images[0].source} alt={room.name} className={styles.cardImg} style={{width:200}}/>
                      <div>
                        <p>{room.name}</p>
                        <p>{room.pricePerNight} €</p>
                      </div>
                    </div>
                  ) : (
                    <p>Room not found</p>
                  )}
                </td>
                <td>
                  <p>Name: {book.customerName}</p>
                  <p>Phone: {book.customerPhone}</p>
                </td>
                <td>
                  <p>{book.isConfirmed ? "Booked" : "Not Booked"}</p>
                </td>
                <td>{book.checkInDate}</td>
                <td>{book.checkOutDate}</td>
                <td>{book.totalPrice} €</td>
                <td>
                  <button>Cancel Booking</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
}
