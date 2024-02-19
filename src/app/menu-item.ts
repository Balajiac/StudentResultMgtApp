import { Menu } from "./menu";

export class MenuItem extends Menu { 
    link?:String;  
    constructor(title:String, link:String, image:String, menuItems?:Menu[]) {
        super(title, image, menuItems);  
        this.link = link;
    }
}
