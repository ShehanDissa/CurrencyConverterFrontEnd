import React, {Suspense, useEffect} from 'react';
import ConverterForm from "./components/ConverterForm";
import i18next from "i18next";

function App() {

    useEffect(() => {
        if (localStorage.getItem("i18nextLng")?.length > 2) {
            i18next.changeLanguage("en");
        }
    }, []);

  return (
      <Suspense fallback={null}>
          <div>
              <main className={"bg-white text-gray-900"}>
                  <ConverterForm/>
              </main>
          </div>
      </Suspense>
  );
}

export default App;
