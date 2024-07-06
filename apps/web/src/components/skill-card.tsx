"use client";
import * as React from "react";

interface SkillProp {
  title?: string;
  imgUrl?: any;
  text?: string;
  percentage?: any;
  length?: number;
}

export default function Skill(props: SkillProp): React.ReactElement {
  return (
    <div title={props?.text} className="cursor-default">
      <p className="font-bold text-white p-2 font-['Inter'] bg-gradient-to-tr from-slate-900 to-black hover:to-yellow-400 transition-colors translate-x-4 rounded-md w-max">
        {props?.title}
      </p>
    </div>
  );
}
