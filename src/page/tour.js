import React from "react";
import { Layout } from "../components/layout";
import { Angye } from "../components/tourDetails/angye";
import { Anpyeong } from "../components/tourDetails/anpyeong";
import { Ansa } from "../components/tourDetails/ansa";
import { Bian } from "../components/tourDetails/bian";
import { Bongyang } from "../components/tourDetails/bongyang";
import { Chunsan } from "../components/tourDetails/chunsan";
import { Dain } from "../components/tourDetails/dain";
import { Danbuk } from "../components/tourDetails/danbuk";
import { Danchon } from "../components/tourDetails/danchon";
import { Danmil } from "../components/tourDetails/danmil";
import { Gaeum } from "../components/tourDetails/gaeum";
import { Geumseong } from "../components/tourDetails/geumseong";
import { Gucheon } from "../components/tourDetails/gucheon";
import { Jeomgok } from "../components/tourDetails/jeomgok";
import { Oksan } from "../components/tourDetails/oksan";
import { Sagok } from "../components/tourDetails/sagok";
import { Uiseong } from "../components/tourDetails/uiseong";

export const Tour = () => {
  return (
    <Layout>
      <div className="tourCon">
        <Uiseong />
        <Dain/>
        <Ansa/>
        <Danbuk/>
        <Danmil/>
        <Angye/>
        <Gucheon/>
        <Bian/>
        <Anpyeong/>
        <Bongyang/>
        <Danchon/>
        <Jeomgok />
        <Geumseong/>
        <Oksan/>
        <Sagok/>
        <Gaeum/>
        <Chunsan/>
      </div>
    </Layout>
  );
};
