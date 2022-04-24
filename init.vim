"--Plugins--"
call plug#begin()
Plug 'preservim/NERDtree'
" Plug 'vim-scripts/AutoComplPop'
Plug 'ervandew/supertab'
Plug 'morhetz/gruvbox'
Plug 'Shougo/deoplete.nvim', { 'do': ':UpdateRemotePlugins' }
Plug 'SirVer/ultisnips'
Plug 'honza/vim-snippets'
call plug#end()

"--Tweaks to plugin settings--"

"-NERDTree-"
" Start NERDTree automatically, putting the cursor in the editor window
"autocmd VimEnter * NERDTree | wincmd p

" Exit Vim if NERDTree is the only window remaining in the only tab.
autocmd BufEnter * if tabpagenr('$') == 1 && winnr('$') == 1 && exists('b:NERDTree') && b:NERDTree.isTabTree() | quit | endif

"-deoplete-"
let g:deoplete#enable_at_startup = 1
if has("gui_running")
    inoremap <silent><expr><C-Space> deoplete#mappings#manual_complete()
else
    inoremap <silent><expr><C-@> deoplete#mappings#manual_complete()
endif

"-UltiSnips-"
inoremap <silent><expr><TAB> pumvisible() ? "\<C-n>" : "\<TAB>"
let g:UltiSnipsExpandTrigger="<tab>"
let g:UltiSnipsJumpForwardTrigger="<tab>"
let g:UltiSnipsJumpBackwardTrigger="<s-tab>"

"-SuperTab-"
let g:SuperTabDefaultCompletionType = "<c-n>"

"-gruvbox colorscheme-"
let g:gruvbox_italic=1
colorscheme gruvbox
set background=dark

"-MISC-"
filetype plugin on

"--MACROS/KEYBINDINGS--"
map <C-n> :NERDTreeToggle<CR>
