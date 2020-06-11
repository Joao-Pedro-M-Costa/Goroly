import {FormGroup} from '@angular/forms'
export class DataTreatment {

    controlNames(form:FormGroup){
        var x=[];
        x.pop;
        for( var i in form.controls){
          x.push(i as String);
        };
        return x;
      }

}


