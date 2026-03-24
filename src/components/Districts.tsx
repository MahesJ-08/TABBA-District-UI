import React, { useState } from "react";
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
  const [search, setSearch] = useState("");
  const [year, setYear] = useState("all");

  const filteredDistricts = districts.filter((d) => {
    const matchesSearch =
      d.name.toLowerCase().includes(search.toLowerCase()) ||
      d.associationName.toLowerCase().includes(search.toLowerCase());

    const matchesYear = year === "all" || d.year.toString() === year;

    return matchesSearch && matchesYear;
  });
  return (
    <div className={styles.container}>
      {/* 🔹 Header */}
      <div className={styles.header}>
        <div>
          <h1 className={styles.title}>District Registry</h1>
          <p className={styles.subtitle}>
            Overview of official district associations, leadership, and contact
            networks across Tamil Nadu's 38 administrative divisions.
          </p>
        </div>

        <div className={styles.stats}>
          <div className={styles.statCard}>
            <h2 style={{ color: "#004D64" }}>38</h2>
            <span>TOTAL DISTRICTS</span>
          </div>

          <div className={styles.statCard}>
            <h2 style={{ color: "#6B3A00" }}>142</h2>
            <span>ASSOCIATIONS</span>
          </div>
        </div>
      </div>

      {/* 🔹 Search & Filter */}
      <div className={styles.filterBar}>
        <input
          type="text"
          placeholder="Search district or association..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className={styles.searchInput}
        />

        <select
          value={year}
          onChange={(e) => setYear(e.target.value)}
          className={styles.select}
        >
          <option value="all">All Years</option>
          {Array.from({ length: 2026 - 1990 + 1 }, (_, i) => {
            const y = 1990 + i;
            return (
              <option key={y} value={y}>
                {y}
              </option>
            );
          })}
        </select>
      </div>

      {/* 🔹 Cards */}
      <div className={styles.grid}>
        {filteredDistricts.map((district) => (
          <div key={district.id} className={styles.card}>
            {/* Top Badge */}
            <div className={styles.cardTop}>
              <img
                src={tabba}
                alt={district.name}
                className={styles.districtImage}
              />
            </div>

            {/* Body */}
            <div className={styles.cardBody}>
              <span className={styles.label}>ASSOCIATION</span>
              <h4 className={styles.association}>{district.associationName}</h4>

              <div className={styles.info}>
                <div>
                  <span>STARTED</span>
                  <p>{district.year}</p>
                </div>

                <div>
                  <span>PRESIDENT</span>
                  <p>{district.president}</p>
                </div>

                <div>
                  <span>CONTACT</span>
                  <p>{district.phone}</p>
                </div>

                <div>
                  <span>EMAIL</span>
                  <p>{district.email}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Districts;
