import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { React, useState, useEffect } from "react";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { cardClasses } from "@mui/material";
import Cards from "./components/Cards";
// import { setDatasets } from "react-chartjs-2/dist/utils";
// import axios from "../api/axios";

const axios = require('axios');

const categoryArray = ["Fashion",
"Beauty",
"Parenting",
"Food&Drink",
"Fitness",
"Education",
"Finance",
"Marketing",
"Technology",
"Travel",
"Health",
"Sports",];
  const countryArray = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Anguilla",
    "Antigua & Barbuda",
    "Argentina",
    "Armenia",
    "Aruba",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bermuda",
    "Bhutan",
    "Bolivia",
    "Bosnia & Herzegovina",
    "Botswana",
    "Brazil",
    "British Virgin Islands",
    "Brunei",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cambodia",
    "Cameroon",
    "Cape Verde",
    "Cayman Islands",
    "Chad",
    "Chile",
    "China",
    "Colombia",
    "Congo",
    "Cook Islands",
    "Costa Rica",
    "Cote D Ivoire",
    "Croatia",
    "Cruise Ship",
    "Cuba",
    "Cyprus",
    "Czech Republic",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Estonia",
    "Ethiopia",
    "Falkland Islands",
    "Faroe Islands",
    "Fiji",
    "Finland",
    "France",
    "French Polynesia",
    "French West Indies",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Gibraltar",
    "Greece",
    "Greenland",
    "Grenada",
    "Guam",
    "Guatemala",
    "Guernsey",
    "Guinea",
    "Guinea Bissau",
    "Guyana",
    "Haiti",
    "Honduras",
    "Hong Kong",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Isle of Man",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jersey",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kuwait",
    "Kyrgyz Republic",
    "Laos",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Macau",
    "Macedonia",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Mauritania",
    "Mauritius",
    "Mexico",
    "Moldova",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Montserrat",
    "Morocco",
    "Mozambique",
    "Namibia",
    "Nepal",
    "Netherlands",
    "Netherlands Antilles",
    "New Caledonia",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "Norway",
    "Oman",
    "Pakistan",
    "Palestine",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
    "Puerto Rico",
    "Qatar",
    "Reunion",
    "Romania",
    "Russia",
    "Rwanda",
    "Saint Pierre & Miquelon",
    "Samoa",
    "San Marino",
    "Satellite",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "South Africa",
    "South Korea",
    "Spain",
    "Sri Lanka",
    "St Kitts & Nevis",
    "St Lucia",
    "St Vincent",
    "St. Lucia",
    "Sudan",
    "Suriname",
    "Swaziland",
    "Sweden",
    "Switzerland",
    "Syria",
    "Taiwan",
    "Tajikistan",
    "Tanzania",
    "Thailand",
    "Timor L'Este",
    "Togo",
    "Tonga",
    "Trinidad & Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Turks & Caicos",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "Uruguay",
    "Uzbekistan",
    "Venezuela",
    "Vietnam",
    "Virgin Islands (US)",
    "Yemen",
    "Zambia",
    "Zimbabwe",
  ];
  

export default function Home() {
  const [categoryFilter, setCategoryFilter] = useState("");
  const [countryFilter, setCountryFilter] = useState("");
  const [masterData, setMasterData]=useState([]);
  const handleCategoryChange = (e) => {
    setCategoryFilter(e.target.value);
  };
  const handleCountryChange = (e) => {
    setCountryFilter(e.target.value);
  };

  const fetchData = async () => {
    axios.get('https://vedasis-server-bsng2qeg2a-uc.a.run.app/vedasis/instagram/profiles/filter/country_interest', {
      headers: {
        country: countryFilter,
        category: categoryFilter
      },
    }).then(resp => {
      if(resp.data)
      {
        setMasterData(Object.entries(resp.data));
        console.log(masterData);
      }
    })
    .catch((err) => {
      
        });
      };
    
  return (
    <>
      <div className="main-container">
        <div className="filter-container">
          <div className="select-category-container">
            <label className="">Select Category</label>
            <Select
              value={categoryFilter}
              onChange={handleCategoryChange}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
              renderValue={(selected) => {
                if (selected == "") {
                  return <em>SELECT</em>;
                }
                return selected;
              }}
              MenuProps={{
                  PaperProps: {
                    sx: {
                      marginTop: "0.5em",
                      borderRadius: "24px",
                    },
                  },
                  MenuListProps: {
                    sx: {
                      display: "flex",
                      flexDirection: "column",
                    },
                  },
                }}
            >
              {categoryArray.map((value, ind) => {
                return (
                  <MenuItem key={ind} value={value}>
                    {value}
                  </MenuItem>
                );
              })}
            </Select>
          </div>
          <div className="select-country-container">
            <label className="">Select Country</label>
            <Select
              value={countryFilter}
              onChange={handleCountryChange}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
              renderValue={(selected) => {
                if (selected == "") {
                  return <em>SELECT</em>;
                }
                return selected;
              }}
              MenuProps={{
                  PaperProps: {
                    sx: {
                      marginTop: "0.5em",
                      borderRadius: "24px",
                    },
                  },
                  MenuListProps: {
                    sx: {
                      display: "flex",
                      flexDirection: "column",
                    },
                  },
                }}
            >
              {countryArray.map((value, ind) => {
                return (
                  <MenuItem key={ind} value={value}>
                    {value}
                  </MenuItem>
                );
              })}
            </Select>
          </div>
          <div className="apply-btn-container">
            <button className="apply-btn" onClick={fetchData}>Search</button>
          </div>
        </div>
        <div className="cards-container">
          <Cards data={masterData}/>
        </div>
      </div>
    </>
  );
}
