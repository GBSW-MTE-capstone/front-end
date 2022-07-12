import React from "react";
import { Layout } from "../components/layout";
import { Angye } from "../components/tourDetails/angye";
import { Bongyang } from "../components/tourDetails/bongyang";
import { Chunsan } from "../components/tourDetails/chunsan";
import { Dain } from "../components/tourDetails/dain";
import { Danbuk } from "../components/tourDetails/danbuk";
import { Danchon } from "../components/tourDetails/danchon";
import { Danmil } from "../components/tourDetails/danmil";
import { Geumseong } from "../components/tourDetails/geumseong";
import { Jeomgok } from "../components/tourDetails/jeomgok";
import { Oksan } from "../components/tourDetails/oksan";
import { Sagok } from "../components/tourDetails/sagok";
import { Uiseong } from "../components/tourDetails/uiseong";

export const Tour = () => {
  return (
    <Layout>
      <img src="https://cdn.discordapp.com/attachments/915127755480375306/991645076767899698/ef34836f4d896674.png" />
      <div className="tourCon">
        <Uiseong />
        <Dain/>
        <Danbuk/>
        <Danmil/>
        <Angye/>
        <Bongyang/>
        <Danchon/>
        <Jeomgok />
        <Geumseong/>
        <Oksan/>
        <Sagok/>
        <Chunsan/>
      </div>
    </Layout>
  );
};
