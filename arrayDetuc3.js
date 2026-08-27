/*
const data = [
    "JavaScript",
    ["React", "Node", "MongoDB"],
    "Git"
];

findout :

"JavaScript" → language
"React" → firstTool
"MongoDB" → database
"Git" → versionControl
*/

let data=["js",["React", "Node", "MongoDB"],"git"];

let[language,[ftool,,db],version]=data;

console.log(language,ftool,db,version);