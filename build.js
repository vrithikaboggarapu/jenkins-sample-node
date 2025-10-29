const fs = require("fs"); fs.mkdirSync("dist",{recursive:true}); fs.writeFileSync("dist/index.html","<h1>Hello from Jenkins build!</h1>"); console.log("Build complete.");
