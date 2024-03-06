"use client";
import { useEffect } from "react";
import { 
  getRetailData,
  selectRetailData
 } from "@/lib/reducers/retailSales/retailSalesSplice";
import { LineGraph } from "../LineGraph/LineGraph";
import { Table } from "../Table/Table"
import { useAppDispatch, useAppSelector } from "@/lib/hooks";

export const DataDisplay = () => {

  const dispatch = useAppDispatch();
  const retailData = useAppSelector(selectRetailData);

  //fetch data on component mount
  useEffect(()=>{
    dispatch(getRetailData())
  }, []);
  
  //render only if retail data is not empty
  return (
    <div> 
      {retailData.length
        ? <div>
            <LineGraph data={retailData}/>
            <Table data={retailData}/>
          </div>
        : null
      }
    </div>
  );
};
