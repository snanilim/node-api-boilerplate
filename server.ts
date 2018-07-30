class CommonProperty{
    header: string;

    constructor(header: string){
        this.header = header;
    }
    public crtColor(color:string) {
        console.log(this.header);
        console.log("color: "+ color);
    }
}

class DarkTheme extends CommonProperty{
    constructor(header: string){
        super(header);
    }
    public crtColor(color:string) {
        super.crtColor(color);
    }
}

class WhiteTheme extends CommonProperty{

}

var dark  = new DarkTheme("Dark Theme Css");
var white = new WhiteTheme("White Theme Css");

dark.crtColor("000");
white.crtColor("fff");