<h1 align="center">ngx-load</h1>
<p align="center">A simple angular directive for adding a loading overlay</p>
<p align="center">
  <img width="30%" height="30%" src="./assets/demo.gif?raw=true"><br />
</p>
<br />

> Add easily an overlay loader over any kind of component. Fully customizable with your own components.
<h6>Checkout the demo at: https://stackblitz.com/github/Silvere112/ngx-load-examples/tree/main/mat-table. </h6 >

## Compatibility with Angular Versions

<table>
  <thead>
    <tr>
      <th>ngx-load</th>
      <th>Angular</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        0.x.x
      </td>
      <td>
        >= 13
      </td>
    </tr>
  </tbody>
</table>


## Features
- 🔥 **Works with Angular & HTML elements**
- ⏳ **Easy to install**
- 🛠 **Customizable**
- ☕ **Easy to use**

## Prerequisite
If not already done you should setup Angular CDK as mention [here](https://material.angular.io/cdk/overlay/overview).

Install the dependency with
```bash
npm i @angular/cdk
```

Then add the following snippet in your global **style.scss**


```scss
@import '@angular/cdk/overlay-prebuilt.css';
```
## Installation

Install it through **npm** with :

```bash
npm i ngx-load
```

## Configuration

### Using default loader
```typescript
import { NgxLoadModule } from "ngx-load";

@NgModule({
  imports: [NgxLoadModule]
})
class AppModule {}
```

### Using custom loader
```typescript
import { NgxLoadModule } from "ngx-load";

@NgModule({
  imports: [
    NgxLoadModule.with({
      loaderComponent: YourLoaderComponent
    })
  ]
})
class AppModule {}
```

## Usage

### Usage with async pipe - Recommended

```typescript

@Component({
  selector: 'example',
  template: `
        <div [loadIsLoaded]="content | async" class="element"> {{ content | async }} </div>
    `,
  styles: [
    `
            .element {
                width: 100px;
                height: 100px;
            }
        `
  ]
})
export class ExampleComponent {
  content = timer(1000).pipe(map(() => "Hello World"), shareReplay())
}
```

### Classic usage
```typescript
@Component({
  selector: 'example',
  template: `
        <div [loadIsLoaded]="isLoaded()" class="element"></div>
    `,
  styles: [
    `
            .element {
                width: 100px;
                height: 100px;
            }
        `
  ]
})
export class ExampleComponent {
  isLoaded() {
    return false
  }
}
```



## Credits

- Readme inspired from <a href="https://github.com/ngneat/hot-toast/blob/master/README.md">@ngneat/hot-toast</a>
- @etiennecrb for the ElementRuler taken from this <a href="https://github.com/angular/components/issues/10393#issuecomment-381084401">thread</a> 


