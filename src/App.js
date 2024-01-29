import React, {Suspense, useEffect} from 'react';
import ConverterForm from "./components/ConverterForm";
import i18next from "i18next";
import LanguageButtons from "./components/LanguageButtons";

function App() {

    useEffect(() => {
        if (localStorage.getItem("i18nextLng")?.length > 2) {
            i18next.changeLanguage("en");
        }
    }, []);

  return (
      <Suspense fallback={null}>
          <div>
              <main className={"text-gray-900 h-screen grid place-items-center bg-gradient-to-b from-cyan-100 to-green-400"}>
                  <ConverterForm/>
                  <LanguageButtons/>
              </main>
          </div>
      </Suspense>
  );
}

export default App;
