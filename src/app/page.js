"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import styles from "./page.module.css";
import Htag from "@/components/atoms/Htag";
import Logo from "@/components/atoms/Logo";
import NamePrice from "@/components/molecules/NamePrice";
import MenuItem from "@/components/organisms/MenuItem";
import BottomMenu from "@/components/molecules/bottomMenu";

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

        {/* <div className= {[styles["holdMeals"], styles["notalignCenter"]].join(" ")}> */}
        <div className={styles.holdMeals}>
        {data && data.length > 0 && data.slice(0, 20).map((item, index) => (


            // export default function MenuItem({mainDiv,divClass, secondDivClass, thirdDivClass, classesfirst, classessecond, textfirst, textSecond, descriptionRow, descriptionCol, descriptionClass, descriptionText}){
            <MenuItem
                key={index}
                mainDiv = "container marginTop"
                divClass= "row"
                secondDivClass= "col-9"
                thirdDivClass= "col-3"
                classesfirst= {styles.menuTitle}
                classessecond= {styles.price}
                textfirst={item.title}
                textSecond={item.price}
                descriptionRow = "row"
                descriptionCol= "col-12 flex-d text-wrap"
                descriptionClass= {`${styles.descriptionTextStyle} overflow-wrap-break-word`}
                descriptionText= {item.description}
            />
          ))}   
        </div>

       <BottomMenu 
            divClass = {styles.holdBottom}
            firstText = "348 E Main Street"
            textSecond = "The Codfather"
            ThirdText = " &nbsp; M-F 9:00AM - 8:00PM"
            textClass = {styles.holdBottomText}
       />

          {/* BottomMenu({divClass, firstText, secondText, ThirdText, textClass}) */}

      </main>
    </>
  );
}
