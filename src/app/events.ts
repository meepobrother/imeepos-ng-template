import { Injectable } from '@angular/core';

@Injectable()
export class EventService {
    private _channels: any = [];
    constructor() { }

    subscribe(topic: string, ...handlers: Function[]) {
        if (!this._channels[topic]) {
            this._channels[topic] = [];
        }
        handlers.forEach((handler) => {
            this._channels[topic].push(handler);
        });
    }

    unsubscribe(topic: string, handler: Function = null) {
        let t = this._channels[topic];
        if (!t) {
            return false;
        }
        if (!handler) {
            delete this._channels[topic];
            return true;
        }
        let i = t.indexOf(handler);
        if (i < 0) {
            return false;
        }
        t.splice(i, 1);
        if (!t.length) {
            delete this._channels[topic];
        }
        return true;
    }

    publish(topic: string, ...args: any[]) {
        var t = this._channels[topic];
        if (!t) {
            return null;
        }
        let responses: any[] = [];
        t.forEach((handler: any) => {
            responses.push(handler(...args));
        });
        return responses;
    }
}