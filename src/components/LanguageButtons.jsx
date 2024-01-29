import React from 'react';
import i18next from "i18next";

const LanguageButtons = () => {
    const changeLanguage = (e) => {
        i18next.changeLanguage(e.target.value);
    };

    return (
        <div>
            <div className={"flex flex-row gap-5 text-center content-center justify-center"}>
                <button type="button" className="bg-gray-400 p-2 rounded-md text-xs text-black" value={"en"}
                        onClick={changeLanguage}>English
                </button>
                <button type="button" className="bg-gray-400 p-2 rounded-md text-xs text-black" value={"si"}
                        onClick={changeLanguage}>සිංහල
                </button>
                <button type="button" className="bg-gray-400 p-2 rounded-md text-xs text-black" value={"jp"}
                        onClick={changeLanguage}>日本語
                </button>
                <button type="button" className="bg-gray-400 p-2 rounded-md text-xs text-black" value={"hi"}
                        onClick={changeLanguage}>हिंदी
                </button>
            </div>
        </div>
    );
};

export default LanguageButtons;