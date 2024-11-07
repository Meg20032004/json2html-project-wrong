export default function json2html(data) {
    // Get unique column headers from the data
    const columns = Array.from(new Set(data.flatMap(item => Object.keys(item))));

    // Create HTML table structure with data-user attribute
    let html = `<table data-user="thakurmeghana2004@gmail.com">`;
    html += "<thead><tr>";
    
    // Add headers
    columns.forEach(column => html += `<th>${column}</th>`);
    html += "</tr></thead><tbody>";
    
    // Add rows of data
    data.forEach(row => {
        html += "<tr>";
        columns.forEach(column => html += `<td>${row[column] || ''}</td>`);
        html += "</tr>";
    });
    html += "</tbody></table>";

    return html;
}
