@echo off
FOR /r "(確認するフォルダ)" %%a in (*) do (
echo %%a
"(サクラエディタのインストールフォルダ)\sakura.exe" "-M=(サクラエディタ作成マクロフォルダパス)\JUG_CHAR_CODE.js" %%a
)
pause