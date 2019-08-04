import * as vscode from 'vscode';
import * as json5 from 'json5';
import * as path from 'path';
import * as fs from 'fs';
import * as jsonFormat from 'json-format';
export default () => {
    return vscode.commands.registerCommand('extension.toJson', ({ fsPath }) => {
        // The code you place here will be executed every time your command is executed

        try {
            const dir = path.dirname(fsPath);
            const fileExt = path.extname(fsPath);
            const fileName = path.basename(fsPath);
            const newfileName = fileName.replace(fileExt, '.json');
            //获取文件内容
            const fileContent = fs.readFileSync(fsPath, 'utf-8');
            //写入内容
            fs.writeFileSync(dir + '/' + newfileName, jsonFormat(json5.parse(fileContent)));
            // Display a message box to the user
            vscode.window.showInformationMessage(`生成${newfileName}文件成功`);
        } catch (e) {
            console.error(e)
            vscode.window.showErrorMessage('json5:' + e.message);
        }
    })
}