"use client";
import * as React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Image from "next/image";

interface SkillProp {
  title?: string;
  imgUrl?: string;
  text?: string;
  percentage?: number;
  length?: number;
}

export default function Skill(props: SkillProp): React.ReactElement {
  const { title, imgUrl, percentage, length } = props;

  return (
    <div className="dark:text-slate-500 rounded cursor-pointer overflow-hidden transition-transform ease-out">
      <ListItem
        sx={{
          marginBottom: 5,
          backgroundColor: "transparent",
        }}
      >
        {/* <ListItemAvatar sx={{color: 'blue'}}>
          <Avatar sx={{color: 'blue'}}>
            @ts-ignore
            <Image alt={`${title}`} width={25} height={25} src={imgUrl} />
          </Avatar>
        </ListItemAvatar> */}
        <div className="w-full flex flex-col gap-3 justify-center items-center">
          <div
            style={{ height: `${percentage}%`, width: 50 }}
            className="text-white h-5 bg-gradient-to-l from-violet-700 to-red-400 font-bold rounded-full text-center flex flex-col items-center justify-center"
          >
            {percentage}%
          </div>
          <p className="md:text-3xl text-2xl pb-5 font-bold">{title}</p>
        </div>
      </ListItem>
    </div>
  );
}
