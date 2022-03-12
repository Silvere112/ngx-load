<p align="center">
  <img width="30%" height="30%" src="./assets/demo.gif?raw=true"><br />
</p>
<br />

> Add easily an overlay loader over any kind of component. Fully customizable with our own components.
<h6>Checkout the demo at: https://stackblitz.com/github/Silvere112/ng-lod-examples/tree/main/mat-table. </h6 >

## Compatibility with Angular Versions

<table>
  <thead>
    <tr>
      <th>ng-lod</th>
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

## Installation

You can install it through **npm**:

```bash
npm i @angular/cdk ng-lod
```

When you install using **npm**, you will also need to import `LoaderModule` in your `app.module`.

## Configuration

### Using default loader
```typescript
import { LoaderModule } from "ng-lod";

@NgModule({
  imports: [LoaderModule]
})
class AppModule {}
```

### Using custom loader
```typescript
import { LoaderModule } from "ng-lod";

@NgModule({
  imports: [
    LoaderModule.with({
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
        <div [lodIsLoaded]="content | async" class="element"> {{ content | async }} </div>
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
        <div [lodIsLoaded]="isLoaded()" class="element"></div>
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


<h6>Inspired from <a href="https://github.com/ngneat/hot-toast/blob/master/README.md">@ngneat/hot-toast</a></h6 >
