import React, { createContext, useState } from "react";
import "./Grandpa.css";
import Father from "../Father/Father";
import Uncle from "../Uncle/Uncle";
import Aunty from "../Aunty/Aunty";

export const RingContext = createContext("ring");
export const MonyContex = createContext(0);

const Grandpa = () => {
  const ring = "dimon ring";

  const [money, setMoney] = useState(0);

  return (
    <div className="grandpa">
      <h2>Grandpa</h2>
      <p>Has Money: {money}</p>
      <MonyContex.Provider value={[money, setMoney]}>
        <RingContext.Provider value="golden ring">
          <section className="flex">
            <Father ring={ring}></Father>
            <Uncle></Uncle>
            <Aunty ring={ring}></Aunty>
          </section>
        </RingContext.Provider>
      </MonyContex.Provider>
    </div>
  );
};

export default Grandpa;

/**
 * 1. create context and export it
 * 2. create a provider and pass a vlaue
 * 3. use context to riceve the value
 * */
