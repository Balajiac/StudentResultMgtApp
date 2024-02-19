export class Menu {
    title?:String; 
    image?:String;  
    menuItems?:Menu[];
    constructor(title:String, image:String, menuItems?:Menu[]) {
        this.title = title;
        this.image = image;
        this.menuItems = menuItems;
    }
}
