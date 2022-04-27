!function(e){var t={};function n(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(o,i,function(t){return e[t]}.bind(null,i));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){"use strict";var o;Object.defineProperty(t,"__esModule",{value:!0}),t.ContentScriptType=t.SettingItemType=t.ToolbarButtonLocation=t.isContextMenuItemLocation=t.MenuItemLocation=t.ImportModuleOutputFormat=t.FileSystemItem=void 0,function(e){e.File="file",e.Directory="directory"}(t.FileSystemItem||(t.FileSystemItem={})),function(e){e.Markdown="md",e.Html="html"}(t.ImportModuleOutputFormat||(t.ImportModuleOutputFormat={})),function(e){e.File="file",e.Edit="edit",e.View="view",e.Note="note",e.Tools="tools",e.Help="help",e.Context="context",e.NoteListContextMenu="noteListContextMenu",e.EditorContextMenu="editorContextMenu",e.FolderContextMenu="folderContextMenu",e.TagContextMenu="tagContextMenu"}(o=t.MenuItemLocation||(t.MenuItemLocation={})),t.isContextMenuItemLocation=function(e){return[o.Context,o.NoteListContextMenu,o.EditorContextMenu,o.FolderContextMenu,o.TagContextMenu].includes(e)},function(e){e.NoteToolbar="noteToolbar",e.EditorToolbar="editorToolbar"}(t.ToolbarButtonLocation||(t.ToolbarButtonLocation={})),function(e){e[e.Int=1]="Int",e[e.String=2]="String",e[e.Bool=3]="Bool",e[e.Array=4]="Array",e[e.Object=5]="Object",e[e.Button=6]="Button"}(t.SettingItemType||(t.SettingItemType={})),function(e){e.MarkdownItPlugin="markdownItPlugin",e.CodeMirrorPlugin="codeMirrorPlugin"}(t.ContentScriptType||(t.ContentScriptType={}))},function(e,t,n){"use strict";var o=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))((function(i,l){function a(e){try{r(o.next(e))}catch(e){l(e)}}function u(e){try{r(o.throw(e))}catch(e){l(e)}}function r(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,u)}r((o=o.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0});const i=n(2),l=n(0),a=n(0),u=!1,r=!1,s=!1,c=!0,d=!1,p=!1,m=!0,y=!0,g="auto",b=-3,f=9,h=8,v="left",x=!0,S=!0;i.default.plugins.register({onStart:function(){return o(this,void 0,void 0,(function*(){yield i.default.settings.registerSection("settings.calebjohn.mathmode",{label:"Math Mode",iconName:"fas fa-calculator"}),yield i.default.settings.registerSettings({bignumber:{value:s,type:a.SettingItemType.Bool,section:"settings.calebjohn.mathmode",public:!0,advanced:!0,label:"Use 128 bit BigNumbers for calculations ",description:"**warning some mathjs features won't work**"},copyButton:{value:c,type:a.SettingItemType.Bool,section:"settings.calebjohn.mathmode",public:!0,advanced:!0,label:"Show copy to clipboard button on hover."},verbose:{value:m,type:a.SettingItemType.Bool,section:"settings.calebjohn.mathmode",public:!0,label:"When assigning a variable, show the name next to the result"},inline:{value:y,type:a.SettingItemType.Bool,section:"settings.calebjohn.mathmode",public:!0,label:"Show result next to input (inline)"},notation:{value:g,type:a.SettingItemType.String,isEnum:!0,options:{engineering:"Engineering",exponential:"Exponential",auto:"Auto",fixed:"Fixed"},section:"settings.calebjohn.mathmode",public:!0,label:"Which notation should be used for results?"},lowerExp:{value:b,type:a.SettingItemType.Int,section:"settings.calebjohn.mathmode",step:1,public:!0,advanced:!0,label:"Lower boundary to format a number as an exponent (auto notation only)"},upperExp:{value:f,type:a.SettingItemType.Int,section:"settings.calebjohn.mathmode",step:1,public:!0,advanced:!0,label:"Upper boundary to format a number as an exponent (auto notation only)"},precision:{value:h,type:a.SettingItemType.Int,section:"settings.calebjohn.mathmode",minimum:0,maximum:16,step:1,public:!0,label:"How many digits of display precision should math results have?"},align:{value:v,type:a.SettingItemType.String,isEnum:!0,options:{left:"Left",right:"Right"},section:"settings.calebjohn.mathmode",public:!0,label:"Which side should math be aligned to?"},inlinesyntax:{value:x,type:a.SettingItemType.Bool,section:"settings.calebjohn.mathmode",public:!0,label:"Treat lines that start with `=` as math lines."},currency:{value:S,type:a.SettingItemType.Bool,section:"settings.calebjohn.mathmode",public:!0,label:"Enable currency conversions (e.g. 100 CAD in EUR)."}}),yield i.default.contentScripts.onMessage("literate-math-mode",e=>o(this,void 0,void 0,(function*(){return"getConfig"===e.name?{global:u?"yes":"no",simplify:r?"yes":"no",bignumber:(yield i.default.settings.value("bignumber"))?"yes":"no",displaytotal:d?"yes":"no",hide:p?"yes":"no",verbose:(yield i.default.settings.value("verbose"))?"yes":"no",inline:(yield i.default.settings.value("inline"))?"yes":"no",notation:yield i.default.settings.value("notation"),lowerExp:yield i.default.settings.value("lowerExp"),upperExp:yield i.default.settings.value("upperExp"),precision:yield i.default.settings.value("precision"),align:yield i.default.settings.value("align"),inlinesyntax:yield i.default.settings.value("inlinesyntax"),copyButton:yield i.default.settings.value("copyButton"),currency:yield i.default.settings.value("currency")}:"Error: "+e+" is not a valid message"}))),yield i.default.contentScripts.register(l.ContentScriptType.CodeMirrorPlugin,"literate-math-mode","./mathMode.js")}))}})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=joplin}]);