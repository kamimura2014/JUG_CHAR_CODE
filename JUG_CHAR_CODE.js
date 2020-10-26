var fileName = Editor.GetFilename();
var charCode = "";
Editor.Sleep(20);
switch (Editor.GetCharCode()) {
    case 0:
        charCode = "SJIS";
        break;
    case 1:
        charCode = "JIS";
        break;
    case 2:
        charCode = "EUC";
        break;
    case 3:
        charCode = "UTF-16";
        break;
    case 4:
        charCode = "UTF-8";
        break;
    case 5:
        charCode = "UTF-7";
        break;
    case 6:
        charCode = "UTF-16BE";
        break;
    case 7:
        charCode = "CESU-8";
        break;
    case 8:
        charCode = "Latin1";
        break;
    case 90:
        charCode = "CP_ACP";
        break;
    case 91:
        charCode = "CP_OEM";
        break;
    default:
        charCode = "Unknown";
        break;
}
Editor.FileClose();
//情報を保存したいファイルを指定
Editor.FileOpen("C:\\result.txt");
if(Editor.IsTextSelected() == 0)
{
    Editor.SelectAll();
}
var text = Editor.GetSelectedString(0);
var text = fileName + ":" + charCode + "\r\n" + text;
Editor.InsText(text);
Editor.ReDraw(0);
Editor.FileSave();
Editor.WinClose();
