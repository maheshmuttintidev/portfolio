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
}

export default function Skill(props: SkillProp): React.ReactElement {
  const { title, imgUrl, percentage } = props;

  return (
    <div className="hover:scale-105 hover:translate-x-10 cursor-pointer hover:bg-violet-400 overflow-hidden transition-transform ease-out">
      <ListItem
        sx={{
          marginBottom: 5,
        }}
      >
        <ListItemAvatar>
          <Avatar>
            {/* @ts-ignore */}
            <Image alt={`${title}`} width={25} height={25} src={imgUrl} />
          </Avatar>
        </ListItemAvatar>
        <div className="w-full">
          <p className="text-3xl font-serif pb-5 font-bold">{title}</p>
          <div
            style={{ width: `${percentage}%` }}
            className="h-5 bg-gradient-to-l from-indigo-500 font-bold rounded-full"
          >
            {percentage}%
          </div>
        </div>
      </ListItem>
    </div>
  );
}
