import { LightningElement } from 'lwc';

export default class DataBinding_4 extends LightningElement {
    message = 'Hello Sarath !!';
    handleChange(event){
        this.message = event.target.value;
        console.log(this.message);
    }
}