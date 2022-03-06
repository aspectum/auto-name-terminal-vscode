import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  console.log(
    'Congratulations, your extension "autorenameterminal" is now active!'
  );

  let disposable = vscode.commands.registerCommand(
    "autorenameterminal.helloWorld",
    () => {
      vscode.window.showInformationMessage(
        "Hello World from AutoRenameTerminal!"
      );
    }
  );

  context.subscriptions.push(disposable);
}
export function deactivate() {}
