import { NgModule } from '@angular/core';
import { CreateComponent } from './components/create/create.component';
import { Routes, RouterModule } from '@angular/router';
import { FileuploadComponent } from './components/fileupload/fileupload.component';


const routes: Routes = [
  {
    path:'create',
    component:CreateComponent
  },
  {
    path:'fileupload',
    component:FileuploadComponent
  },
  
  {
 path:' ', redirectTo:'',
 pathMatch:'full'
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
