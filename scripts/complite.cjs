const fs = require('fs');

const versionLogPath = '/version.md';

/***
 * @returns { string|null } The latest version found in the version log.
 */
function getLatestVersion() {
    const latestVersionRegex = /latest_version: \[(\d+\.\d+\.\d+)\]/;
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
    
    const logEntry = `## [${newVersion}] - ${date}\n\n- Updated to version ${newVersion}.\n\n`;
    const updatedLog = content.replace(/(## \[\d+\.\d+\.\d+\] - \d{4}-\d{2}-\d{2}\n\n- .*\n\n)/, logEntry + '$1');
    
    fs.writeFileSync(versionLogPath, updatedLog, 'utf8');
    console.log(`Version log updated with version ${newVersion}`);
}

function main() {
    const content = fs.readFileSync(versionLogPath, 'utf8');
    const latestVersion = getLatestVersion(content);

    if (!latestVersion) {
        console.error('Could not find the latest version in the version log.');
        return;
    }

    // generate new version (for example, incrementing the patch number)
    const versionParts = latestVersion.split('.').map(Number);
    versionParts[2] += 1; // Increment patch number
    const newVersion = versionParts.join('.');

    updateVersionLog(content, latestVersion, newVersion);
}

main();