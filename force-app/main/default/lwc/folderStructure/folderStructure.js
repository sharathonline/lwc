import { LightningElement } from 'lwc';

export default class FolderStructure extends LightningElement {
    greeting = 'world';
    handleChange(event){
        this.greeting = event.target.value;
        console.log(this.greeting);
    }
}