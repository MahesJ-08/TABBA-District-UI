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
  Building2,
  Map,
} from "lucide-react";

interface District {
  id: number;
  name: string;
  associationName: string;
  year: number;
  president: string;
  phone: string;
  email: string;
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
    image: tabba,
  },
  {
    id: 4,
    name: "Coimbatore",
    associationName: "Coimbatore District Association",
    year: 2000,
    president: "Mrs. Lakshmi Priya",
    phone: "+91 90000 00004",
    email: "coimbatore.assoc@tndistrict.in",
    // color: "purple",
    image: tabba,
  },
  {
    id: 5,
    name: "Cuddalore",
    associationName: "Cuddalore District Association",
    year: 1997,
    president: "Mr. Prakash",
    phone: "+91 90000 00005",
    email: "cuddalore.assoc@tndistrict.in",
    // color: "orange",
    image: tabba,
  },
  {
    id: 6,
    name: "Dharmapuri",
    associationName: "Dharmapuri District Association",
    year: 1996,
    president: "Mr. Arun Kumar",
    phone: "+91 90000 00006",
    email: "dharmapuri.assoc@tndistrict.in",
    // color: "teal",
    image: tabba,
  },
  {
    id: 7,
    name: "Dindigul",
    associationName: "Dindigul District Association",
    year: 1999,
    president: "Mrs. Meena",
    phone: "+91 90000 00007",
    email: "dindigul.assoc@tndistrict.in",
    // color: "pink",
    image: tabba,
  },
  {
    id: 8,
    name: "Erode",
    associationName: "Erode District Association",
    year: 1998,
    president: "Mr. Ramesh",
    phone: "+91 90000 00008",
    email: "erode.assoc@tndistrict.in",
    // color: "indigo",
    image: tabba,
  },
  {
    id: 9,
    name: "Kallakurichi",
    associationName: "Kallakurichi District Association",
    year: 2019,
    president: "Mr. Vignesh",
    phone: "+91 90000 00009",
    email: "kallakurichi.assoc@tndistrict.in",
    // color: "yellow",
    image: tabba,
  },
  {
    id: 10,
    name: "Kancheepuram",
    associationName: "Kancheepuram District Association",
    year: 1995,
    president: "Mr. Mohan",
    phone: "+91 90000 00010",
    email: "kancheepuram.assoc@tndistrict.in",
    // color: "blue",
    image: tabba,
  },
  {
    id: 11,
    name: "Karur",
    associationName: "Karur District Association",
    year: 1997,
    president: "Mrs. Revathi",
    phone: "+91 90000 00011",
    email: "karur.assoc@tndistrict.in",
    // color: "green",
    image: tabba,
  },
  {
    id: 12,
    name: "Krishnagiri",
    associationName: "Krishnagiri District Association",
    year: 2004,
    president: "Mr. Siva",
    phone: "+91 90000 00012",
    email: "krishnagiri.assoc@tndistrict.in",
    // color: "red",
    image: tabba,
  },
  {
    id: 13,
    name: "Madurai",
    associationName: "Madurai District Association",
    year: 1995,
    president: "Mr. Selvam Rajan",
    phone: "+91 90000 00013",
    email: "madurai.assoc@tndistrict.in",
    // color: "purple",
    image: tabba,
  },
  {
    id: 14,
    name: "Mayiladuthurai",
    associationName: "Mayiladuthurai District Association",
    year: 2020,
    president: "Mr. Kannan",
    phone: "+91 90000 00014",
    email: "mayiladuthurai.assoc@tndistrict.in",
    // color: "orange",
    image: tabba,
  },
  {
    id: 15,
    name: "Nagapattinam",
    associationName: "Nagapattinam District Association",
    year: 1991,
    president: "Mrs. Jayanthi",
    phone: "+91 90000 00015",
    email: "nagapattinam.assoc@tndistrict.in",
    // color: "teal",
    image: tabba,
  },
  {
    id: 16,
    name: "Namakkal",
    associationName: "Namakkal District Association",
    year: 1997,
    president: "Mr. Saravanan",
    phone: "+91 90000 00016",
    email: "namakkal.assoc@tndistrict.in",
    // color: "pink",
    image: tabba,
  },
  {
    id: 17,
    name: "Nilgiris",
    associationName: "Nilgiris District Association",
    year: 1996,
    president: "Mr. Joseph",
    phone: "+91 90000 00017",
    email: "nilgiris.assoc@tndistrict.in",
    // color: "indigo",
    image: tabba,
  },
  {
    id: 18,
    name: "Perambalur",
    associationName: "Perambalur District Association",
    year: 2001,
    president: "Mr. Dinesh",
    phone: "+91 90000 00018",
    email: "perambalur.assoc@tndistrict.in",
    // color: "yellow",
    image: tabba,
  },
  {
    id: 19,
    name: "Pudukkottai",
    associationName: "Pudukkottai District Association",
    year: 1994,
    president: "Mr. Manikandan",
    phone: "+91 90000 00019",
    email: "pudukkottai.assoc@tndistrict.in",
    // color: "blue",
    image: tabba,
  },
  {
    id: 20,
    name: "Ramanathapuram",
    associationName: "Ramanathapuram District Association",
    year: 1996,
    president: "Mr. Ibrahim",
    phone: "+91 90000 00020",
    email: "ramanathapuram.assoc@tndistrict.in",
    // color: "green",
    image: tabba,
  },
  {
    id: 21,
    name: "Ranipet",
    associationName: "Ranipet District Association",
    year: 2019,
    president: "Mr. Karthi",
    phone: "+91 90000 00021",
    email: "ranipet.assoc@tndistrict.in",
    // color: "red",
    image: tabba,
  },
  {
    id: 22,
    name: "Salem",
    associationName: "Salem District Association",
    year: 1993,
    president: "Mr. Prabhu",
    phone: "+91 90000 00022",
    email: "salem.assoc@tndistrict.in",
    // color: "purple",
    image: tabba,
  },
  {
    id: 23,
    name: "Sivagangai",
    associationName: "Sivagangai District Association",
    year: 1997,
    president: "Mrs. Latha",
    phone: "+91 90000 00023",
    email: "sivagangai.assoc@tndistrict.in",
    // color: "orange",
    image: tabba,
  },
  {
    id: 24,
    name: "Tenkasi",
    associationName: "Tenkasi District Association",
    year: 2019,
    president: "Mr. Rajan",
    phone: "+91 90000 00024",
    email: "tenkasi.assoc@tndistrict.in",
    // color: "teal",
    image: tabba,
  },
  {
    id: 25,
    name: "Thanjavur",
    associationName: "Thanjavur District Association",
    year: 1992,
    president: "Mr. Balaji",
    phone: "+91 90000 00025",
    email: "thanjavur.assoc@tndistrict.in",
    // color: "pink",
    image: tabba,
  },
  {
    id: 26,
    name: "Theni",
    associationName: "Theni District Association",
    year: 1997,
    president: "Mr. Kumaravel",
    phone: "+91 90000 00026",
    email: "theni.assoc@tndistrict.in",
    // color: "indigo",
    image: tabba,
  },
  {
    id: 27,
    name: "Thoothukudi",
    associationName: "Thoothukudi District Association",
    year: 1986,
    president: "Mr. Antony",
    phone: "+91 90000 00027",
    email: "thoothukudi.assoc@tndistrict.in",
    // color: "yellow",
    image: tabba,
  },
  {
    id: 28,
    name: "Tiruchirappalli",
    associationName: "Tiruchirappalli District Association",
    year: 1990,
    president: "Mr. Sriram",
    phone: "+91 90000 00028",
    email: "trichy.assoc@tndistrict.in",
    // color: "blue",
    image: tabba,
  },
  {
    id: 29,
    name: "Tirunelveli",
    associationName: "Tirunelveli District Association",
    year: 1991,
    president: "Mr. Mohideen",
    phone: "+91 90000 00029",
    email: "tirunelveli.assoc@tndistrict.in",
    // color: "green",
    image: tabba,
  },
  {
    id: 30,
    name: "Tirupathur",
    associationName: "Tirupathur District Association",
    year: 2019,
    president: "Mr. Hari",
    phone: "+91 90000 00030",
    email: "tirupathur.assoc@tndistrict.in",
    // color: "red",
    image: tabba,
  },
  {
    id: 31,
    name: "Tiruppur",
    associationName: "Tiruppur District Association",
    year: 2009,
    president: "Mr. Elango",
    phone: "+91 90000 00031",
    email: "tiruppur.assoc@tndistrict.in",
    // color: "purple",
    image: tabba,
  },
  {
    id: 32,
    name: "Tiruvallur",
    associationName: "Tiruvallur District Association",
    year: 1997,
    president: "Mr. Chandran",
    phone: "+91 90000 00032",
    email: "tiruvallur.assoc@tndistrict.in",
    // color: "orange",
    image: tabba,
  },
  {
    id: 33,
    name: "Tiruvannamalai",
    associationName: "Tiruvannamalai District Association",
    year: 1989,
    president: "Mr. Gopinath",
    phone: "+91 90000 00033",
    email: "tiruvannamalai.assoc@tndistrict.in",
    // color: "teal",
    image: tabba,
  },
  {
    id: 34,
    name: "Tiruvarur",
    associationName: "Tiruvarur District Association",
    year: 1997,
    president: "Mrs. Revathy",
    phone: "+91 90000 00034",
    email: "tiruvarur.assoc@tndistrict.in",
    // color: "pink",
    image: tabba,
  },
  {
    id: 35,
    name: "Vellore",
    associationName: "Vellore District Association",
    year: 1985,
    president: "Mr. Dhanraj",
    phone: "+91 90000 00035",
    email: "vellore.assoc@tndistrict.in",
    // color: "indigo",
    image: tabba,
  },
  {
    id: 36,
    name: "Viluppuram",
    associationName: "Viluppuram District Association",
    year: 1993,
    president: "Mr. Murugan",
    phone: "+91 90000 00036",
    email: "viluppuram.assoc@tndistrict.in",
    // color: "yellow",
    image: tabba,
  },
  {
    id: 37,
    name: "Virudhunagar",
    associationName: "Virudhunagar District Association",
    year: 1990,
    president: "Mr. Pandian",
    phone: "+91 90000 00037",
    email: "virudhunagar.assoc@tndistrict.in",
    // color: "blue",
    image: tabba,
  },
  {
    id: 38,
    name: "Kanyakumari",
    associationName: "Kanyakumari District Association",
    year: 1987,
    president: "Mr. Joseph Raj",
    phone: "+91 90000 00038",
    email: "kanyakumari.assoc@tndistrict.in",
    // color: "green",
    image: tabba,
  }
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
        {/* LEFT SIDE */}
        <div className={styles.headerLeft}>
          <div className={styles.headerText}>
            <h1>District Registry</h1>
            <p>
              Explore verified district associations across Tamil Nadu in a
              simple and structured way.
            </p>
          </div>

          {/* SEARCH */}
          <div className={styles.searchBox}>
            <Search size={16} />
            <input
              type="text"
              placeholder="Search district..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        {/* RIGHT SIDE - STATS */}
        <div className={styles.stats}>
          <div className={styles.statCard}>
            <Map size={20} />
            <div>
              <h3>{districts.length}</h3>
              <p>Districts</p>
            </div>
          </div>

          <div className={styles.statCard}>
            <Building2 size={20} />
            <div>
              <h3>{districts.length}</h3>
              <p>Associations</p>
            </div>
          </div>
        </div>
      </div>

      {/* GRID (UNCHANGED) */}
      <div className={styles.grid}>
        {filteredDistricts.map((d, index) => (
          <div className={styles.card} key={d.id}>
            <div className={styles.logoWrap}>
              <div
                className={styles.logo}
                style={{ borderColor: `hsl(${index * 60}, 70%, 50%)` }}
              >
                <img src={d.image} alt={d.name} />
              </div>
            </div>

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