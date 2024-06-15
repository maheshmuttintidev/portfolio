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
    <div title={props?.text}>
      <p className="font-bold p-2 font-['Inter'] bg-gradient-to-tr from-white to-emerald-300 rounded-sm w-max text-black">
        {props?.title}
      </p>
    </div>
  );
}
