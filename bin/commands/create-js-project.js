"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sh = require("shelljs");
const path = require("path");
const fs = require("fs");
const data_types_1 = require("../data-types/data-types");
const commit_message = `
This Project was generated using Dev Mentor Tools (${data_types_1.VERSION}).
Initial Commit.
`;
function createJSProject(cmd, options) {
    if (fs.existsSync(options.project)) {
        console.log(`Folder ${options.project} already exists!`);
        return;
    }
    if (cmd.type === undefined || cmd.type === "ts") {
        console.log("DM-Tools is generating a new default TypeScript project...");
        sh.cp("-r", path.resolve(__dirname, "../../.templates/default/"), `${options.project}`);
    }
    else if (cmd.type === "node") {
        console.log("DM-Tools is generating a TypeScript Node.js project...");
        sh.cp("-r", path.resolve(__dirname, "../../.templates/node/"), `${options.project}`);
    }
    else if (cmd.type === "js") {
        console.log("DM-Tools is generating a JavaScript Node.js project...");
        sh.cp("-r", path.resolve(__dirname, "../../.templates/javascript/"), `${options.project}`);
    }
    sh.pushd(`${options.project}`);
    sh.mkdir("docs", "logs");
    sh.exec("git init");
    sh.exec("git add -A");
    sh.exec(`git commit -q -m "${commit_message}"`);
    sh.exec("git checkout -b dev");
    if (data_types_1.YARN) {
        sh.exec("yarn");
    }
    else {
        sh.exec("npm install");
    }
    if (cmd.e2e) {
        if (data_types_1.YARN) {
            sh.exec("yarn add cypress -D");
        }
        else {
            sh.exec("npm i -D cypress");
        }
    }
    sh.popd();
    console.log(`Project ${options.project} created successfully.`);
}
exports.createJSProject = createJSProject;
//# sourceMappingURL=create-js-project.js.map