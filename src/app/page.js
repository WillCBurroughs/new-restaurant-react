"use client";
import React, { useState } from "react";
import axios from "axios";
import Image from "next/image";
import styles from "./page.module.css";
import Htag from "@/components/atoms/Htag";

export default function Home() {

  let getAxios = () => {
    axios.get("https://www.jsonkeeper.com/b/MDXW").then(response => {
      console.log(response)
    })
  }

  getAxios()

  return (
    <>
      <main className={styles.main}>
        <div className={styles["restaurant-container"]}>
         <Htag 
            classes={styles.title}
         />
        </div>

        <div className= "">
          

        </div>

        <div className="">

        </div>
      </main>
    </>
  );
}
