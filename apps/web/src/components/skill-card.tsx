"use client";
import * as React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Image from "next/image";
import styles from "./skills.module.css";

interface SkillProp {
  title?: string;
  imgUrl?: any;
  text?: string;
  percentage?: any;
  length?: number;
}

export default function Skill(props: SkillProp): React.ReactElement {
  return (
    <div title={props?.text} className="dark:text-slate-500 rounded cursor-pointer overflow-hidden transition-transform ease-out">
      <ListItem
        sx={{
          marginBottom: 5,
          backgroundColor: "transparent",
        }}
      >
        <div className="flex flex-col gap-2">
          <div
            className={
              "text-white relative bg-transparent font-bold rounded-full text-center flex flex-col items-center justify-center h-[400px] bg-slate-400 w-10 px-1"
            }
          >
            <div
              className={`z-10 absolute bottom-0 rounded-t-full text-black bg-yellow-100 shadow-yellow-500 shadow-md pt-3 px-1`}
              style={{ height: `${props?.percentage}%` }}
            >
              {props?.percentage}%
            </div>
          </div>
          <div>
            <ListItemAvatar sx={{ color: "blue" }}>
              <Image
                alt={`${props?.title}`}
                width={40}
                height={40}
                className="text-white bg-white shadow-sm shadow-slate-100"
                src={props?.imgUrl}
              />
            </ListItemAvatar>
            <p className="pb-5 font-bold text-slate-200">{props?.title}</p>
          </div>
        </div>
      </ListItem>
    </div>
  );
}
