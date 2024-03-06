"use client";

import styles from "../styles/sidebar.module.css";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { 
  getProductData,
  selectProductData
 } from "@/lib/reducers/retailSales/retailSalesSplice";
import { useEffect, useState } from "react";

export const SideBar = () => {
  const dispatch = useAppDispatch();
  const productData = useAppSelector(selectProductData);

  //fetch data on component mount
  useEffect(()=>{
    dispatch(getProductData())
  }, []);

  //set title/subtitle/tags on data change
  useEffect(()=>{
    setTitle(productData.title)
    setSubtitle(productData.subtitle)
    setTags(productData.tags)
  }, [productData])

  const [title, setTitle] = useState('');
  const [tags, setTags] = useState([]);
  const [subtitle, setSubtitle] = useState('');

  const tagsHtml = [];

  //generate hashtag html
  if (Array.isArray(tags)){
    for (const tag of tags) {
      tagsHtml.push(tagTemplate(tag))
    }
  }

  function tagTemplate(tag){
    return (
      <div key={tag} className={styles.tag}>
        <p className={styles.tagName}>{tag}</p>
      </div>
    );
  }
  return (
    <div className={styles.sideBarContainer}>
      <h2 className={styles.title}>
        {title}
      </h2>
      <p className={styles.multiline}>
        {subtitle}
      </p>
      <div className={styles.tags}>
        {tagsHtml}
      </div>
    </div>
  );
};
