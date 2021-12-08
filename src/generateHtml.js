function generateHtml(data) {
    return `
        <h1>${data.name}</h1>
        <ul>
            <li>${data.name}</li>
            <li>${data.teamManager}</li>
            <li>${data.employeeID}</li>
            <li>${data.officeNumber}</li>
            <li>${data.email}</li>
            <li>${data.gitHubUser}</li>
        </ul>
    `;
    }
    
module.exports = generateHtml;