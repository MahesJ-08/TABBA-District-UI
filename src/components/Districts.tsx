import React, { useState } from "react";
import styles from "./Districts.module.css";
import tabba from "../assets/tabba.jpg";
import {
  MapPin,
  Calendar,
  User,
  Phone,
  Mail,
  Search,
} from "lucide-react";

interface District {
  id: number;
  name: string;
  associationName: string;
  year: number;
  president: string;
  phone: string;
  email: string;
  // color: string;
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
    // color: "#2563eb",
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
    // color: "#16a34a",
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
    // color: "#dc2626",
    image: tabba,
  },
  
];

const Districts: React.FC = () => {
  const [search, setSearch] = useState("");

  const filteredDistricts = districts.filter((d) =>
    d.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className={styles.container}>
      {/* HEADER */}
      <div className={styles.header}>
        <div className={styles.headerText}>
          <h1>District Registry</h1>
          <p>Explore verified district associations across Tamil Nadu</p>
        </div>

        <div className={styles.searchBox}>
          <Search size={16} color="#94a3b8" />
          <input
            type="text"
            placeholder="Search district..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* GRID */}
      <div className={styles.grid}>
        {filteredDistricts.map((d,index) => (
          <div className={styles.card} key={d.id}>
            {/* LOGO */}
            <div className={styles.logoWrap}>
              <div className={styles.logo} style={{ borderColor: `hsl(${index * 60}, 70%, 50%)` }}>
                <img src={d.image} alt={d.name} />
              </div>
            </div>

            {/* MAIN */}
            <div className={styles.main}>
              <h3>{d.associationName}</h3>

              <div className={styles.location}>
                <MapPin size={14} /> {d.name}
              </div>

              <div className={styles.meta}>
                <div>
                  <Calendar size={14} /> {d.year}
                </div>
                <div>
                  <User size={14} /> {d.president}
                </div>
              </div>
            </div>

            {/* CONTACT */}
            <div className={styles.contact}>
              <div>
                <Phone size={14} /> {d.phone}
              </div>
              <div>
                <Mail size={14} /> {d.email}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Districts;