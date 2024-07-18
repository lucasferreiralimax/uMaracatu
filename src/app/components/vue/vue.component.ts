import {
  Component,
  ElementRef,
  AfterViewInit,
  OnDestroy,
  OnChanges,
  SimpleChanges,
  inject,
  Input,
} from '@angular/core';

import { createApp, h, App } from 'vue';
import VueTechsLogos from 'vue-techs-logos';

@Component({
  selector: 'vue-component',
  standalone: true,
  template: '',
})
export class VueComponent implements AfterViewInit, OnDestroy, OnChanges {
  private app: App | null = null;

  @Input() props!: Record<string, any>;
  @Input() name!: string;

  private elementRef = inject(ElementRef);

  ngAfterViewInit() {
    this.renderVueComponent();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['props'] && !changes['props'].isFirstChange() && this.app) {
      this.renderVueComponent();
    }
  }

  ngOnDestroy() {
    if (this.app) {
      this.app.unmount();
    }
  }

  private renderVueComponent() {
    if (this.app) {
      this.app.unmount();
    }
    if (this.name) {
      this.props = { ...this.props, name: this.name, hiddenLabel: true };
    }
    this.app = createApp({
      render: () => h(VueTechsLogos, this.props),
    });
    this.app.mount(this.elementRef.nativeElement);
  }
}
