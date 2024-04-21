import React from 'react'
import  { useContext, useState } from "react";
import {
    collection,
    query,
    where,
    getDocs,
    setDoc,
    doc,
    updateDoc,
    serverTimestamp,
    getDoc,
  } from "firebase/firestore";
import { db } from "/Users/pc/Desktop/Front-end/src/patient/firebase.js";

const Search = () => {
    const [username, setUsername] = useState("");
    const [user, setUser] = useState(null);
    const [err, setErr] = useState(false);
    const handleSearch = async () => {
        const q = query(
          collection(db, "users"),
          where("displayName", "==", username)
        );
    
        try {
          const querySnapshot = await getDocs(q);
          querySnapshot.forEach((doc) => {
            setUser(doc.data());
          });
        } catch (err) {
          setErr(true);
        }
      };

    const handleKey = (e) => {
        e.code === "Enter" && handleSearch();
      };

  return (
    <div>
         {/* <div className="w-[66%] flex  py-[12px] px-6 rounded-2xl border border-solid border-complimetary1 border-opacity-10  ">
        <svg
          className="shrink-0 w-6 aspect-square"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
            stroke="#4C606E"
            strokeOpacity="0.5"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M21 21L16.7 16.7"
            stroke="#4C606E"
            strokeOpacity="0.5"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <input
                  onChange={(e) => setUsername(e.target.value)}
                  onKeyDown={handleKey}
          type="search"
          className="w-[100%]  bg-primary2  flex focus:outline-none   self-stretch px-[21px]  text-base font-medium rounded-2xl  "
          id="default-search"
          placeholder="Search user ..."
          required
        />
      </div> */}
        <div className="search">
      <div className="searchForm">
        <input
          type="text"
          placeholder="Find a user"
          onKeyDown={handleKey}
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
      </div>
      {err && <span>User not found!</span>}
      {user && (
        <div className="userChat" onClick={handleSelect}>
          <img src={user.photoURL} alt="" />
          <div className="userChatInfo">
            <span>{user.displayName}</span>
          </div>
        </div>
      )}
    </div>
    </div>
  )
}

export default Search
