import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { ReactTestComponent } from './components/react-test/react-test.component';
import { VueTestComponent } from './components/vue-test/vue-test.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ReactTestComponent,
    VueTestComponent,
    MatButtonModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  myPropsReact = { list: ['react', 'JavaScript'] };
  myPropsVue = { list: ['vue', 'TypeScript'] };

  MaracatuAtomico() {
    this.myPropsReact =
      this.myPropsReact.list[0] != 'react'
        ? { list: ['react', 'JavaScript'] }
        : { list: ['ember', 'svelte'] };

    this.myPropsVue =
      this.myPropsVue.list[0] != 'vue'
        ? { list: ['vue', 'TypeScript'] }
        : { list: ['Astro', 'qwik'] };
  }
}
