import * as vscode from "vscode";
import path from "path";
import fs from "fs";

export function activate(context: vscode.ExtensionContext) {
  console.log("Auto Name Terminal extension active");

  let disposable = vscode.commands.registerCommand(
    "autonameterminal.createTerminal",
    (target) => {
      if (target.scheme && target.scheme === "file") {
        let p = path.resolve(target._fsPath);

        if (fs.lstatSync(target._fsPath).isFile()) {
          p = path.resolve(p, "../");
        }

        const name = p.split("\\").pop();

        vscode.window.createTerminal({ name: name, cwd: p });
        vscode.window.terminals[vscode.window.terminals.length - 1].show(false);
      }
    }
  );

  context.subscriptions.push(disposable);
}
export function deactivate() {}
