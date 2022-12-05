# JAVASCRIPT
## PreRequisites 
 - Visual studio code
 - Browser
 - knowledge on HTML
 - Basic Mother programming language
  
### Visual Studio Code Extensions
- [x] eslint
- [x] liveserver
- [x] quarkus
- [x] html Snippets
- [x] beautify

## Basic Sysntax
### Statements
```javascript
let variableName = value ;
let age =34; 
x=90;
y= 7;
z= x+y;
```
### Comments
```javascript
// single comment

/*
first line
second line
third line
multi-line comments
*/


```


### Variables
```javascript
1. var
2. let
3. const
4. nothing

// var || let changing variable values

var name=  "Andrew";
var age = 23;
var regNo = "REG001";

let name=  "Andrew";
let age = 23;
let regNo = "REG001";

//cosntants
const PI = 3.14;
PI=90;// not allowed the constant is already defined


```

### Defined Keywords
### Functions
```javascript
function functionName (args..) {
    //code block
}
//void function => do not return values
// void and takes arguments => take parameters and do not return values

// return values => one do not take arguments
// return values => do take arguments

function log(){
    console.log("message");

}
//call
log();

function log(message){
    console.log(message);

}
//call
 log("hello there");


 function sum(a,b){
     let result = a+b;
     return result;
 }
//call
sum(12,67)// =>  79

function getName(){
    return "Casey";

}
//call
getName() // Casey

```




## Operators

## Conditional flows

## Data types
```javascript
    // Number
    let count= 10;
    let rate = 12.53;
    //String
    let studentName = "KipNg'etich"
     let studentName = 'KipNg\'etich';
    //Objects
    let student = {};//empty object
    let studentOne = {
        //key:value pair
        age:12,
        name: "Winfred",
        address:{
           city:"Nairobi"
           postaCode: "047" 
        },
        getFullName:function(){
           return "Winfred"; 
        },
        anothorFun: ()=>{
            console.log("something");
        },
        isMoving:function(){
            return true;
        }


    };
    let studentThree = new Object();


    //referencing the properties
console.log(studentOne.name);
console.log(studentOne['name']);
console.log(studentOne.address.city);

studentOne.getFullName();
studentOne.anothorFun();


```

### Booleans
```javascript
//move
let isMoving =true;
let isNotMoving = false;

let a=10;
let b=20;

let isTenGreaterThanTwenty = a > b;

```

### Arrays
```javascript
// collection of data 
let studentOne={
    age:10,
    name:"John"
};
let studentTwo={
    age:12,
    name:"student two"
};
let studentThree={
    age:15,
    name:"student three"
};
let studentFour={
    age:20,
    name:"Four"
};
//indexing starts from 0,1....
let students = [studentOne,studentTwo,studentThree,studentFour];

students[2] // studentThree


```
### Knowing the type of variable

```javascript

typeof //
let studentFour={
    age:20,
    name:"Four"
};

typeof studentFour;//object

typeof studentFour.age //Number

```

### Empty variables and Undefined and null

```javascript
    let studentName =""; //empty values
    let age=null;//null'
    let fullName; //undefined

```

## Naming Conventions
```javascript

camelCase


//class  Country
//variable country

//studentName 
//student_name // not encouraged

// getDicountGivenTheRate()
//getDiscount()

//processPayroll()




```


### References
- [x] [Visual Studio Code](https://code.visualstudio.com/download)
- [x] [Sencha trial](https://www.sencha.com/products/extjs/evaluate/)
- [x] [Sencha CMD ](https://www.sencha.com/products/extjs/cmd-download/)
- [x] [Json Place holder](https://jsonplaceholder.typicode.com/)


## EXTJS GGUIDE

### Prerequisites
- [x] Sencha cmd
- [x] EXTJS Zip

### Creation of a project
```console
# sencha -sdk /path/to/sdk generate app MyApp /path/to/myapp
#  sencha generate app --ext MyApp ./MyApp

# sencha generate app --ext PlaceHolder C:\Users\gavan\OneDrive\Desktop\workspace\forks\Javascript-TutorialS\PlaceHolder --classic

##universal -classic and modern together
sencha -sdk C:\Users\gavan\bin\Sencha\Cmd\repo\extract\ext\7.6.0.41  generate app PlaceHolder ./PlaceHolder

##classic
sencha -sdk C:\Users\gavan\bin\Sencha\Cmd\repo\extract\ext\7.6.0.41  generate app PlaceHolder C:\Users\gavan\OneDrive\Desktop\workspace\forks\Javascript-TutorialS\PlaceHolder --classic

##Modern
sencha -sdk C:\Users\gavan\bin\Sencha\Cmd\repo\extract\ext\7.6.0.41  generate app PlaceHolder C:\Users\gavan\OneDrive\Desktop\workspace\forks\Javascript-TutorialS\PlaceHolder --modern

```

### Starting the development Server
```console 
# locahost:1841
sencha app watch
````


### Defining Store
- To define a store 

```javascript
// alias property
alias: 'store.storename'

```

### Defining views
- To define a view 

```javascript
// xtype property
alias: 'widget.viewname',
xtype: 'viewname',


```

### Containers
| Class Name   | xtype  | 	Description |
|---|---|--|
| `Ext.container.Viewport`  | `viewport`  | ViewPort is a specialized container representing the viewable application area (the browser viewport). Generally there is a single ViewPort in an Ext JS application which will define the application's main areas like north, west, south, east and center. |
| `container`  | `container`  |Container is lightweight container which provides basic functionality of containing items, namely adding, inserting and removing items. So use this container when you just want to add other components and arrange them.  |
| `Ext.panel.Panel`  |`panel`   |Panel is a special type of container that has specific functionality and components. Each panel has header, tool, body, toolbar components. So use Panel when you want specific user interface with header, toolbar and body part. Do not use it if you do not want these features in panel, use container instead  |
|`Ext.form.Panel`   | `form`  |Ext.form.Panel provides standard containers for form. Use it when you want standard application form kind of user interface. |
| `Ext.form.FieldContainer`  | `fieldcontainer`  | FieldContainer implements labelable mixins so that it can be rendered with label and error message around every sub-item component. You can use fieldcontainer in the form to arrange inner fields. |
| `Ext.form.FieldSet`  | `fieldset`  | Fieldset is a container for group of fields in an Ext.form.Panel. |
| `Ext.grid.Panel`  | 	`grid`  | Grid displays large amount of tabular data with sorting, filtering and other functionality |
| `Ext.container.ButtonGroup`  | `buttongroup`  | ButtonGroup provides a container for arranging a group of related Buttons in a tabular manner |
| `Ext.tab.Panel`  | 	`tabpanel`  | Ext.tab.Panel is a basic tab container. Use it when you want tab or wizard in your user interface. |
|`Ext.tree.Panel`   | `treepanel`  | TreePanel provides tree-structured UI representation of tree-structured data. |
|`Ext.menu.Menu`   |  `menu` |Menu is a container to which you can add Menu Items.  |
|`Ext.toolbar.Toolbar`   | 	`toolbar`  | 	Toolbar is a container for toolbar buttons, text, fill, item etc. |


### Layouts
| Layout  |  Description |
|---|---|
|Absolute   |This layout inherits anchor layout and adds the ability of positioning the component at particular co-ordinates using standard x, y config options.   |
| Accordion  |  This layout manages multiple panels in an expandable accordion style. By default one panel can be expanded at any given time, but you can also expand multiple panels using multi config. |
| Anchor  |  This layout enables anchoring of contained elements relative to the container's dimensions |
| Auto  |  This layout is applicable when no layout is configured into a container. AutoLayout provides only a passthrough of any layout calls to any child containers. |
| Border  | This is a multi-pane, application-oriented UI layout style that supports multiple nested panels, automatic bars between regions and built-in expanding and collapsing of regions.  |
|  Card | This layout manages multiple child Components, each fitted to the Container, where only a single child Component can be visible at any given time. This layout style is most commonly used for wizards and tab implementations  |
| Fit  |  This layout is used in a container that contains a single item that automatically expands to fill the container. |
| Form  |This is a layout that will render form Fields, one under the other all stretched to the Container width. |
| HBox  | 	A layout that arranges items horizontally across a Container. align, flex and pack are important config options for this layout. |
| Table  | This layout allows you to easily render content into an HTML table. |
| VBox  | A layout that arranges items vertically down a Container. align, flex and pack are important config options for this layout. |

