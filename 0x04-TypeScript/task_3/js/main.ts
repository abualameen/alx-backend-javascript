/// <reference path="./crud.d.ts" />
import { RowElement, RowID } from "./interface";
import * as CRUD from "crud";

// Create an object called row with the type RowElement
const row: RowElement = {
    firstName: "Guillaume",
    lastName: "Salva"
};

// Create a const variable named newRowID with the type RowID and assign the value the insertRow command.
const newRowID: RowID = CRUD.insertRow(row);

// Create a const variable named updatedRow with the type RowElement and update row with an age field set to 23
const updatedRow: RowElement = {
    ...row,
    age: 23
};

// Finally, call the updateRow and deleteRow commands.
CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(newRowID);

console.log(`Insert row ${newRowID}`);
console.log(`Update row ${newRowID} ${JSON.stringify(updatedRow)}`);
console.log(`Delete row id ${newRowID}`);
