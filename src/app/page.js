"use client";
import React, { useState } from "react";
import axios from "axios";
import Image from "next/image";
import styles from "./page.module.css";
import Htag from "@/components/atoms/Htag";
import Logo from "@/components/atoms/Logo";

export default function Home() {

  let getAxios = () => {
    axios.get("https://www.jsonkeeper.com/b/MDXW").then(response => {
      console.log(response);
    });
  }

  getAxios()

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

        </div>


      </main>
    </>
  );
}
