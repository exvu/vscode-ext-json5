
import * as vscode from 'vscode';
import toJson from './commands/toJson';
import toJson5 from './commands/toJson5';

export function activate(context: vscode.ExtensionContext) {

	console.log('exvujson5 插件已激活');

	context.subscriptions.push(
		toJson(),
		toJson5()
	);
}

export function deactivate() { }

