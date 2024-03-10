"use client"
import { Voting } from "@/contracts/voting";

import artifact from '../../../artifacts/voting.json';
import { appConfig } from '@/config/index';
import { Scrypt, bsv } from "scrypt-ts";


const LocaleLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    Voting.loadArtifact(artifact);


    Scrypt.init({
      // https://docs.scrypt.io/advanced/how-to-integrate-scrypt-service#get-your-api-key
      apiKey: appConfig.scryptApiKey,
      network: bsv.Networks.testnet
    })
    return (
        <>
            {children}
        </>
    );
};

export default LocaleLayout;
