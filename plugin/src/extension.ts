import * as vscode from 'vscode';
import { insertDateTime } from './components/insertDateTime';
import { printFirstTenChars } from './components/printFirstTenChars';
import { simulateApiCall } from './components/simulateApiCall';
import { onFileChange, clearFileChangeTimeout } from './components/fileChange';

export function activate(context: vscode.ExtensionContext) {
    console.log('Congratulations, your extension "sample-date-inserter" is now active!');

    let insertDateTimeDisposable = vscode.commands.registerCommand('sample-date-inserter.insertDateTime', insertDateTime);
    let printFirstTenCharsDisposable = vscode.commands.registerCommand('sample-date-inserter.printFirstTenChars', printFirstTenChars);
    let simulateApiCallDisposable = vscode.commands.registerCommand('sample-date-inserter.simulateApiCall', simulateApiCall);
    let fileChangeDisposable = vscode.workspace.onDidChangeTextDocument(onFileChange);

    context.subscriptions.push(
        insertDateTimeDisposable,
        printFirstTenCharsDisposable,
        simulateApiCallDisposable,
        fileChangeDisposable
    );
}

export function deactivate() {
    clearFileChangeTimeout();
}