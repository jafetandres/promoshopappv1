import { Pipe, PipeTransform } from '@angular/core';


const URL= '';
@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(img: string, size: string ): string {

    if (!img){
      return;
    }
   

    const imgURL= `${URL}/${img}`;
    console.log('url',imgURL); 

    return imgURL;
  }

}
