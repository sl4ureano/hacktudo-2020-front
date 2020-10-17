import { Component, ElementRef, OnInit, ViewChildren } from '@angular/core';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';
import { Location, PopStateEvent } from '@angular/common';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
    @ViewChildren("entrega") entrega: ElementRef;
    @ViewChildren("checkbox") checkbox: ElementRef;

    public isCollapsed = false;
    private lastPoppedUrl: string;
    private yScrollStack: number[] = [];

    constructor(public location: Location, private router: Router) {
    }

    ngOnInit() {
    }
}
