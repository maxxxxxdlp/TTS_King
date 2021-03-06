import Link from 'next/link';
import React from 'react';

import { useAuth } from '../components/FirebaseApp';
import Layout from '../components/Layout';
import { PublicMenu } from '../components/PublicMenu';
import { Centered } from '../components/UI';
import siteInfo from '../const/siteInfo';
import type { Language, LocalizationStrings } from '../lib/languages';
import { extractUser } from '../lib/userUtils';

const localizationStrings: LocalizationStrings<{
  readonly header: string;
  readonly paragraph1: string;
  readonly paragraph2: string;
  readonly goToDashboard: string;
  readonly signUp: string;
  readonly actionStatement: (actionLink: Readonly<JSX.Element>) => JSX.Element;
}> = {
  'en-US': {
    header: 'Because your time is important!',
    paragraph1: `Convert your daily news digests into a simple podcast you
      can listen to while in transit, walking or even exercising.`,
    paragraph2: `TTS King helps you stay productive no matter where you
      are!`,
    goToDashboard: 'Go to your dashboard',
    signUp: 'Sign up',
    actionStatement: function ActionStatement(
      actionLink: Readonly<JSX.Element>
    ): JSX.Element {
      return <>{actionLink} now and see for yourself.</>;
    },
  },
};

export default function index(): JSX.Element {
  const { user } = useAuth();

  return (
    <Layout title="" pageUrl="" localizationStrings={localizationStrings}>
      {(
        languageStrings: Readonly<typeof localizationStrings[Language]>,
        language: Language
      ): JSX.Element => (
        <>
          <PublicMenu />
          <Centered>
            <h1
              className="sm:text-right text-8xl font-bold bg-clip-text
          bg-gradient-to-l sm:bg-gradient-to-tr from-yellow-400
          to-purple-400 text-transparent pb-3 flex-shrink-0"
            >
              <span className="sm:block">{siteInfo[language].tts} </span>
              <span>{siteInfo[language].king}</span>
            </h1>
            <div>
              <h2 className="text-3xl pt-2 pb-3">{languageStrings.header}</h2>
              <p>{languageStrings.paragraph1}</p>
              <p className="pt-4">{languageStrings.paragraph2}</p>
              <p className="pt-3">
                {languageStrings.actionStatement(
                  typeof extractUser(user) === 'undefined' ? (
                    <Link href="/sign_in">
                      <a
                        className="hover:bg-red-500
                    hover:text-white bg-transparent
                    text-red-500"
                      >
                        {languageStrings.signUp}
                      </a>
                    </Link>
                  ) : (
                    <Link href="/dashboard">
                      <a
                        className="hover:bg-red-500
                    hover:text-white bg-transparent
                    text-red-500"
                      >
                        {languageStrings.goToDashboard}
                      </a>
                    </Link>
                  )
                )}
              </p>
            </div>
          </Centered>
        </>
      )}
    </Layout>
  );
}
