"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import styles from "./page.module.css";
import Htag from "@/components/atoms/Htag";
import Logo from "@/components/atoms/Logo";
import NamePrice from "@/components/molecules/NamePrice";

export default function Home() {

  let [data, setData] = useState(null);

  useEffect(() => {
    let fetchData = async () => {
      try {
        const response = await axios.get("https://www.jsonkeeper.com/b/MDXW");
        setData(response.data); // Assuming the data is in response.data
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);


  console.log("Data:", data);

  return (
    <>
      <main className={styles.main}>

        <div className={styles["alignCenter"]}>

          <div className={styles["restaurant-container"]}>
          <Htag 
              classes={styles.title}
              text="•The Codfather•"
          />
          </div>

            
          <div className={styles["holdLogo"]}>
            <Logo classes={styles["imageLogo"]} source="/img/Codfather.png" />
          </div>

        </div>

        

        <div className= {[styles["holdCourse"], styles["makeBlack"]].join(' ')}>
        <Htag 
            classes={styles.courseText}
            text = "Main Course"
         />
        </div>

        <div className= {[styles["holdMeals"], styles["alignCenter"]].join(" ")}>

        {data && data.length > 0 && data.slice(0, 16).map((item, index) => (
            <NamePrice
              divClass="row"
              secondDivClass="column"
              thirdDivClass="column"
              classesfirst=""
              classessecond=""
              textfirst={item.title}
              textSecond={item.price}
            />
          ))}   
        </div>


      </main>
    </>
  );
}
