const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import React from "react";

const LOGO_URL = "https://media.db.com/images/public/6a470591140c597a3a4863f3/2587852f8_FITCOMPANYLOGO1.png";

export default function Logo({ className = "h-10" }) {
  return (
    <img
      src={LOGO_URL}
      alt="FitCompany — Academia premium de alta performance"
      className={`${className} object-contain`}
      draggable={false}
    />
  );
}