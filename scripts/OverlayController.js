class OverLayController {
    constructor(){
        this.activeOverlay = null;
        this.previousOverlay = null;

        this.handleKeydown = this.handleKeydown.bind(this);
        this.handleClick = this.handleClick.bind(this);

        document.addEventListener('click', this.handleClick
;    }
}