" _               _                                   __  _        
"  ___   ___   _ __   _ __    ___   _ __ ( ) ___  __   __(_) _ __ ___     ___   ___   _ __   / _|(_)  __ _ 
" / __| / _ \ | '_ \ | '_ \  / _ \ | '__||/ / __| \ \ / /| || '_ ` _ \   / __| / _ \ | '_ \ | |_ | | / _` |
"| (__ | (_) || | | || | | || (_) || |      \__ \  \ V / | || | | | | | | (__ | (_) || | | ||  _|| || (_| |
" \___| \___/ |_| |_||_| |_| \___/ |_|      |___/   \_/  |_||_| |_| |_|  \___| \___/ |_| |_||_|  |_| \__, |
"                                                                                                    |___/ 

"--Plugins--"
call plug#begin()
Plug 'preservim/NERDtree'
" Plug 'vim-scripts/AutoComplPop'
Plug 'ervandew/supertab'
Plug 'morhetz/gruvbox'
Plug 'Shougo/deoplete.nvim', { 'do': ':UpdateRemotePlugins' }
Plug 'SirVer/ultisnips'
Plug 'honza/vim-snippets'
Plug 'tpope/vim-surround'
Plug 'vim-airline/vim-airline'
Plug 'vim-airline/vim-airline-themes'
Plug 'yuttie/comfortable-motion.vim'
Plug 'kien/rainbow_parentheses.vim'
Plug 'farmergreg/vim-lastplace'
Plug 'jiangmiao/auto-pairs'
Plug 'lervag/vimtex' , { 'tag': 'v2.15' }
Plug 'dylanaraps/wal.vim'
Plug 'tidalcycles/vim-tidal'
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
colorscheme wal
set background=dark

"-VimTeX-"
let g:vimtex_view_method = 'zathura'
let g:vimtex_compiler_method = 'latexmk'

"-Vim airline-"
let g:airline_powerline_fonts = 1
let g:airline_theme='gruvbox'
if !exists('g:airline_symbols')
  let g:airline_symbols = {}
endif

" powerline symbols
let g:airline_left_sep = ''
let g:airline_left_alt_sep = ''
let g:airline_right_sep = ''
let g:airline_right_alt_sep = ''
let g:airline_symbols.branch = ''
let g:airline_symbols.colnr = ' ㏇:'
let g:airline_symbols.readonly = ''
let g:airline_symbols.linenr = ' :'
let g:airline_symbols.maxlinenr = 'Ξ '
let g:airline_symbols.dirty='⚡'
let g:airline_symbols.whitespace = 'Ξ'

"-rainbow_parentheses-"
"always-on
au VimEnter * RainbowParenthesesToggle
au Syntax * RainbowParenthesesLoadRound
au Syntax * RainbowParenthesesLoadSquare
au Syntax * RainbowParenthesesLoadBraces
"-MISC-"
filetype plugin indent on
syntax enable
set number relativenumber "To enable hybrid linecount on the left hand side

"--MACROS/KEYBINDINGS--"
map <C-n> :NERDTreeToggle<CR>
