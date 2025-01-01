let browser = 'Chrome';

function checkBrowserVersion(callback) {
    setTimeout(() => {
        callback(browser);
    }, 2000);
}

function printVersion(browserVersion) {
    console.log(browserVersion)
}

checkBrowserVersion(printVersion);