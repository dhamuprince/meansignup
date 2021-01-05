import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url:string = 'http://localhost:8080/users';

  constructor(private http:HttpClient) { }


  //Get data 
  public getData():any{

    return this.http.get(this.url).pipe(map(res=>{
      return res;
    }, error=>{
      this.handleError(error);
    }));
  }

  public handleError(error){
    console.error(error);
    return Observable.throw("Error is" + error);
  }

  
  //create customer data coming from create.component.ts 
  public createcustom(customer):any{
    return this.http.post(this.url, customer);
  }
  
  // update customer data coming from update.component.ts
  public updatecustom(customer):any{
    return this.http.put(this.url, customer);
  }
 
  //id coming from the fetchsingle.component.ts
  public fetchsingle(id:number):any{
    return this.http.get(this.url+id);
  }

  public delete(id:number):any{
    return this.http.delete(this.url+id);
  }
}
