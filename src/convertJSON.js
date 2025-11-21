import Papa from "papaparse";

export async function loadCsvAsJson() {
    const response = await fetch("./Taxonomy Observations - Obvservations.csv");
    const csvText = await response.text();

    const parsed = Papa.parse(csvText, {
        header: true,
        skipEmptyLines: true
    });

    const jsonObject = parsed.data;
    return jsonObject;
}

// Example usage
loadCsvAsJson().then(data => {
    console.log("JSON Object:", data);
});