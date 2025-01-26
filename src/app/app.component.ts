import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { ReactComponent } from './components/react/react.component';
import { VueComponent } from './components/vue/vue.component';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, ReactComponent, VueComponent, MatButtonModule],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
  myPropsReact = { list: ['react', 'TypeScript'] };
  myPropsVue = { list: ['vue', 'JavaScript'] };

  MaracatuAtomico() {
    this.myPropsReact =
      this.myPropsReact.list[0] != 'react'
        ? { list: ['react', 'TypeScript'] }
        : { list: ['ember', 'svelte'] };

    this.myPropsVue =
      this.myPropsVue.list[0] != 'vue'
        ? { list: ['vue', 'JavaScript'] }
        : { list: ['Astro', 'qwik'] };
  }
}
