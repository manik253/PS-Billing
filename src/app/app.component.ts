import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
lists = ["soap","shamp","powder"];


list = [

{
	
	"Name" : "Product1",
	"Price" : "10000",
	"Quantity" : "2",
	}
	,
	{

	"Name" : "Product2",
	"Price" : "177",
	"Quantity" : "3",
	
	}


];



name="";
price="";
quantity="";
pushitem = function()
{
	if(this.name != ""  && this.price != "" && this.quantity!="")
	{
	this.list.push({'Name':this.name , 'Price':this.price , 'Quantity':this.quantity});
	
this.name="";
this.price="";
this.quantity="";
	}
}

removeitem = function(index)
{
	
	this.lists.splice(index,1);
}

removeitemarray = function(index)
{
	
	this.list.splice(index,1);
}



}
