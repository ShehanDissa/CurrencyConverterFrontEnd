import React, {useState} from 'react';
import {useTranslation} from "react-i18next";
import i18next from "i18next";

const ConverterForm = () => {
    const {t} = useTranslation(['common'])

    const [formData, setFormData] = useState({
        // initialize with form fields
        sourceCurrency: 'USD',
        targetCurrency: 'USD',
        amount: 0,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Call the function to send data to the API here
        sendDataToAPI(formData).then(r =>
                document.getElementById("output").innerHTML = Intl.NumberFormat(i18next.language, { style: 'currency', currency: formData.targetCurrency }).format(r)
        );
        document.getElementById("outputLabel").classList.remove("hidden");
        document.getElementById("output").classList.remove("hidden");
    };

    const sendDataToAPI = async (formData) => {
        try {
            const response = await fetch('http://localhost:8080/api/exchangerate/exchange', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    // Add any additional headers if needed
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Failed to fetch data from the server');
            }

            // Handle the result from the API as needed
            return await response.json();
        } catch (error) {
            console.error('Error:', error.message);
        }
    };


    return (
        <div className="max-w-md mx-auto bg-white border-2 border-black p-8 rounded-md shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-center">{t("title")}</h2>
            <form id="converterForm" className="space-y-4" onSubmit={handleSubmit}>

                <div>
                    <label htmlFor="sourceCurrency" className="block text-sm font-medium text-gray-600">{t("from_currency")}</label>
                    <select id="sourceCurrency" name="sourceCurrency" value={formData.sourceCurrency} onChange={handleChange}
                            className="mt-1 p-2 border border-gray-300 rounded-md w-full">
                        <option value="USD">USD</option>
                        <option value="EUR">EUR</option>
                        <option value="JPY">JPY</option>
                        <option value="LKR">LKR</option>
                        <option value="INR">INR</option>
                        <option value="GBP">GBP</option>
                    </select>
                </div>


                <div>
                    <label htmlFor="targetCurrency" className="block text-sm font-medium text-gray-600">{t("to_currency")}</label>
                    <select id="targetCurrency" name="targetCurrency" value={formData.targetCurrency} onChange={handleChange}
                            className="mt-1 p-2 border border-gray-300 rounded-md w-full">
                        <option value="USD">USD</option>
                        <option value="EUR">EUR</option>
                        <option value="JPY">JPY</option>
                        <option value="LKR">LKR</option>
                        <option value="INR">INR</option>
                        <option value="GBP">GBP</option>
                    </select>
                </div>


                <div>
                    <label htmlFor="amount" className="block text-sm font-medium text-gray-600">{t("amount")}</label>
                    <input type="number" id="amount" name="amount" min={"0"} value={formData.amount} onChange={handleChange}
                           className="mt-1 p-2 border border-gray-300 rounded-md w-full"/>
                </div>


                <div>
                    <button type="submit" className="bg-blue-500 text-white p-2 rounded-md w-full">{t("submit")}</button>
                </div>

                <div className={"flex text-center flex-col"}>
                    <label id="outputLabel" htmlFor="output" className="text-sm font-medium text-gray-600 hidden">Converted Amount</label>
                    <label id="output" className="mt-1 p-2 rounded-md w-full hidden"></label>
                </div>
            </form>
        </div>

    );
};

export default ConverterForm;