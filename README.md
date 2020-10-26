# JUG_CHAR_CODE
・フォルダ内のファイルの文字コードを確認するbatプログラム。
　プロジェクトのソースプログラムの文字列がutf-8とsjisが混ざっていたため作成した。
 RUN_JUG_CHAR_CODE.batでフォルダ内のファイル絶対パスを再帰的に取得して、サクラエディタのマクロ(JUG_CHAR_CODE.js)で文字コードを判定して、結果ファイルに記載している。
 
### 1.RUN_JUG_CHAR_CODE.bat
・再帰的にフォルダ内ファイルを検索して、検索結果のファイル名でサクラエディタのマクロを実行する。
　  
 ※下記、3か所を設定しておく必要がある。
 
 (確認するフォルダ)⇐文字コードを確認するソースがあるルートフォルダ
 
 (サクラエディタのインストールフォルダ)⇐サクラエディタがインストールされているフォルダ：例：C:\Program Files (x86)\sakura
 
 (サクラエディタ作成マクロフォルダパス)⇐JUG_CHAR_CODE.jsを置いてあるパス
 
 ソース
>FOR /r "(確認するフォルダ)" %%a in (*) do (  
>echo %%a  
>"(サクラエディタのインストールフォルダ)\sakura.exe" "-M=(サクラエディタ作成マクロフォルダパス)\JUG_CHAR_CODE.js" %%a  
>)

### ２.JUG_CHAR_CODE.js
・サクラエディタのマクロ。文字コードを判定して、結果ファイルに記載している。
 
 ※下記、結果ファイルのパスを設定しておく必要がある。
>//情報を保存したいファイルを指定  
>Editor.FileOpen("C:\\result.txt");
  
・参照：https://sakura-editor.github.io/help/HLP000268.html