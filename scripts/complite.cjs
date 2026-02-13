const fs = require('fs');

const versionLogPath = 'version.md';

/***
 * @param { string } content - The content of the version log to search.
 * @returns { string|null } The latest version found in the version log.
 */
function getLatestVersion(content) {
    const latestVersionRegex = /latest_version:\s*\[(\d+\.\d+\.\d+)\]/;
    const match = content.match(latestVersionRegex);

    return match ? match[1] : null;
}

/***
 * Updates the version log with a new version entry.
 * @param { string } content    - The current content of the version log.
 * @param { string } oldVersion - The previous version.
 * @param { string } newVersion - The new version to log.
 * @returns { void }
 */
function updateVersionLog(content, oldVersion, newVersion) {
    const date = new Date().toISOString().split('T')[0];
    content = content.replace(`latest_version: [${oldVersion}]`, `latest_version: [${newVersion}]`);
    
    const logEntry = `## [${newVersion}] - ${date}\n\n- Updated to version ${newVersion}.`;
    const updatedLog = content + "\n\n" + logEntry;

    fs.writeFileSync(versionLogPath, finalLog, 'utf8');
    console.log(`Version log updated with version ${newVersion}`);
}

function main() {
    // Ensure version log exists
    if (!fs.existsSync(versionLogPath)) {
        const initDate = new Date().toISOString().split('T')[0];
        const initContent = `latest_version: [0.0.0]\n\n## [0.0.0] - ${initDate}\n\n- Initial version.\n\n`;
        fs.writeFileSync(versionLogPath, initContent, 'utf8');
        console.log('Created initial version log.');
    }

    const content = fs.readFileSync(versionLogPath, 'utf8');
    console.log('Successfully read version log.');
    const latestVersion = getLatestVersion(content);
    console.log(`Latest version found: ${latestVersion}`);

    if (!latestVersion) {
        console.error('Could not find the latest version in the version log.');
        return;
    }

    // generate new version (for example, incrementing the patch number)
    const versionParts = latestVersion.split('.').map(p => Number(p) || 0);
    while (versionParts.length < 3) versionParts.push(0);
    versionParts[2] = (versionParts[2] || 0) + 1; // Increment patch number
    const newVersion = versionParts.join('.');
    console.log(`New version to be added: ${newVersion}`);

    updateVersionLog(content, latestVersion, newVersion);

    console.log('Version log update complete.');
}

main();