import React, {useState} from 'react';

const ConverterForm = () => {

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
                document.getElementById("output").innerHTML = r
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
        <div className="max-w-md mx-auto bg-white p-8 rounded-md shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-center">Currency Converter</h2>
            <form id="converterForm" className="space-y-4" onSubmit={handleSubmit}>

                <div>
                    <label htmlFor="sourceCurrency" className="block text-sm font-medium text-gray-600">Select Box 1</label>
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
                    <label htmlFor="targetCurrency" className="block text-sm font-medium text-gray-600">Select Box 2</label>
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
                    <label htmlFor="amount" className="block text-sm font-medium text-gray-600">Amount</label>
                    <input type="number" id="amount" name="amount" value={formData.amount} onChange={handleChange}
                           className="mt-1 p-2 border border-gray-300 rounded-md w-full"/>
                </div>


                <div>
                    <button type="submit" className="bg-blue-500 text-white p-2 rounded-md w-full">Submit</button>
                </div>

                <div>
                    <label id="outputLabel" htmlFor="output" className="text-sm font-medium text-gray-600 hidden">Converted Amount</label>
                    <label id="output" className="mt-1 p-2 rounded-md w-full hidden"></label>
                </div>
            </form>

        </div>
    );
};

export default ConverterForm;