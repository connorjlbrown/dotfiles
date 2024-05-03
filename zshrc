export ZSH="$HOME/.oh-my-zsh"
source ~/.local/bin/antigen.zsh
antigen use oh-my-zsh # load the oh-my-zsh library into antigen

# Setting the theme
antigen theme zthxxx/jovial

#--Plugins--#
antigen bundle zthxxx/jovial
antigen bundle zsh-users/zsh-syntax-highlighting
antigen bundle zsh-users/zsh-autosuggestions

antigen apply
# Which plugins would you like to load?
# Standard plugins can be found in $ZSH/plugins/
# Custom plugins may be added to $ZSH_CUSTOM/plugins/
# Example format: plugins=(rails git textmate ruby lighthouse)
# Add wisely, as too many plugins slow down shell startup.
plugins=(git)

source $ZSH/oh-my-zsh.sh

# User configuration

## SHORTCUTS
# to different directories
alias www='cd ~/Documents/website'
alias dox='cd ~/Documents'
alias cf='cd ~/.config'
alias cfz='v ~/.zshrc'
alias cfb='v ~/.config/bspwm/bspwmrc'
alias cfv='nvim ~/.config/nvim/init/vim' # opens vim config file
# School shortcuts ranked in order of appearance on class schedule
alias s='cd ~/School/'
alias ss='cd ~/School/CS411/'
alias sss='cd ~/School/CS418/'
alias ssss='cd ~/School/CS310/'
# to execute specific commands
alias v='nvim'
alias vc='nvim ~/.config/nvim/init.vim'
alias py='python3'
alias update-site='scp -r /home/connor/Documents/website/* root@connorjlbrown.xyz:/var/www/c0nehead/'
alias update-all='sudo apt update && sudo apt upgrade && sudo flatpak upgrade && sudo snap refresh'
alias wallset="~/.config/polybar/colorblocks/scripts/pywal.sh"
alias boottidal="cd /home/connor/.cabal/store/ghc-9.0.2/tidal-1.9.4-b916a9c8a54f5d4f56b4d946c1f9537f6ea2f27f653c1bd0b830929e2bc2090c/share && nvim BootTidal.hs"
alias samples="cd ~/.local/share/SuperCollider/downloaded-quarks/Dirt-Samples/"
alias mcworlds="cd ~/.var/app/io.mrarm.mcpelauncher/data/mcpelauncher/games/com.mojang/minecraftWorlds/"
alias mcpacks="cd ~/.var/app/io.mrarm.mcpelauncher/data/mcpelauncher/games/com.mojang/resource_packs"

# PATH sheeit
export PATH="/home/connor/.local/bin:$PATH"
export PATH="/home/connor/.cabal/bin:$PATH"
export PATH="${PATH}:${HOME}/.local/bin/"






export QSYS_ROOTDIR="/home/connor/intelFPGA_pro/23.3/qsys/bin"
