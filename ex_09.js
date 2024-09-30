let type;
if (typeof input_var === "string") {
    type = "String";
} else if (typeof input_var === "boolean") {
    type = "Boolean";
} else if (Number.isInteger(input_var)) {
    type = "Integer";
} else if (typeof input_var === "number") {
    type = "Float";
}

displayThisText(`La valeur de la variable est '${input_var}'.`);
displayThisText(`Son type est '${type}'.`);

if (input_var === 42 || input_var === "42") {
    displayThisText("C'est le sens de la vie.");
}
