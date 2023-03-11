import { FibonacciClockComponent } from '@components';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ColorPipe } from './pipes';

const COMPONENTS = [FibonacciClockComponent];

const PIPES = [ColorPipe];

@NgModule({
    imports: [CommonModule, FormsModule, RouterModule],
    declarations: [...COMPONENTS, ...PIPES],
    exports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule, ...COMPONENTS, ...PIPES],
    providers: [],
})
export class SharedModule {}
