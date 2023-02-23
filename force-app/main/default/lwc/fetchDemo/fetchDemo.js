import { LightningElement } from 'lwc';

export default class FetchDemo extends LightningElement {
    imgURL;
    endpoint='https://some-random-api.ml/animal/bird';
    async getImageHandler(){
        const response=await fetch(this.endpoint, {method:'GET'});
        const resp= await response.json();
            if(response.ok){
            this.imgURL=resp.image;
            }
    }
}