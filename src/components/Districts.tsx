import React from "react";
import { Calendar, User, Phone, Mail } from "lucide-react";
import styles from "./Districts.module.css";
import tabba from "../Assets/tabba.jpg";

interface District {
  id: number;
  name: string;
  associationName: string;
  year: number;
  president: string;
  phone: string;
  email: string;
  color: string;
  image: string; 
}

const districts: District[] = [
  {
    id: 1,
    name: "Chennai",
    associationName: "Chennai District Association",
    year: 1998,
    president: "Dr. Rajesh Kumar",
    phone: "+91 98765 43210",
    email: "chennai.assoc@tndistrict.in",
    color: "blue",
    image: tabba,
  },
  {
    id: 2,
    name: "Coimbatore",
    associationName: "Coimbatore District Association",
    year: 2000,
    president: "Mrs. Lakshmi Priya",
    phone: "+91 98765 43211",
    email: "coimbatore.assoc@tndistrict.in",
    color: "green",
    image: tabba,
  },
  {
    id: 3,
    name: "Madurai",
    associationName: "Madurai District Association",
    year: 1995,
    president: "Mr. Selvam Rajan",
    phone: "+91 98765 43212",
    email: "madurai.assoc@tndistrict.in",
    color: "red",
    image: tabba,
  },
];

const getInitials = (name: string) => {
  return name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase();
};

const Districts: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        {districts.map((district) => (
          <div key={district.id} className={styles.card}>

            {/* Header */}
            <div className={`${styles.cardHeader} ${styles[district.color]}`}>
              
              {/* ✅ Image added */}
              <img
                src={district.image}
                alt={district.name}
                className={styles.headerImage}
              />

              <span className={styles.initials}>
                {getInitials(district.name)}
              </span>
              <span className={styles.districtName}>{district.name}</span>
            </div>

            {/* Body */}
            <div className={styles.cardBody}>
              <h3 className={styles.association}>
                {district.associationName}
              </h3>

              <div className={styles.divider}></div>

              <div className={styles.row}>
                <span className={styles.icons}><Calendar size={18} /></span>
                <span>Year of Start:</span>
                <strong>{district.year}</strong>
              </div>

              <div className={styles.row}>
                <span className={styles.icons}> <User size={18} /> </span>
                <span>President:</span>
                <strong>{district.president}</strong>
              </div>

              <div className={styles.row}>
                <span className={styles.icons}><Phone size={18} /></span>
                <span>Contact:</span>
                <a href={`tel:${district.phone}`}>{district.phone}</a>
              </div>

              <div className={styles.row}>
                <span className={styles.icons}><Mail size={18} /></span>
                <span>Email:</span>
                <a href={`mailto:${district.email}`}>{district.email}</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Districts;