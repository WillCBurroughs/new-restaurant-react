"use client";
import React, { useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import Htag from "@/components/atoms/Htag";

export default function Home() {
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
