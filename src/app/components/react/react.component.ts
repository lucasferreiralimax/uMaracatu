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

import { createElement, ComponentProps } from 'react';
import { createRoot, Root } from 'react-dom/client';
import ReactTechsLogos from 'react-techs-logos';

@Component({
  selector: 'react-component',
  standalone: true,
  template: '',
})
export class ReactComponent implements AfterViewInit, OnDestroy, OnChanges {
  private root: Root | null = null;

  @Input() props!: ComponentProps<any>;
  @Input() name!: string;

  private elementRef = inject(ElementRef);

  ngAfterViewInit() {
    this.renderReactComponent();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['props'] && !changes['props'].isFirstChange() && this.root) {
      this.renderReactComponent();
    }
  }

  ngOnDestroy() {
    if (this.root) {
      this.root.unmount();
    }
  }

  private renderReactComponent() {
    if (!this.root) {
      this.root = createRoot(this.elementRef.nativeElement);
      if (this.name) {
        this.props = { ...this.props, name: this.name, hiddenLabel: true };
      }
    }
    this.root.render(createElement(ReactTechsLogos, this.props));
  }
}
