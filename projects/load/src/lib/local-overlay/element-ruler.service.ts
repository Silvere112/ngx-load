// Inspired from https://github.com/angular/components/issues/10393

import { Injectable, NgZone } from '@angular/core';

import { auditTime } from 'rxjs/operators';
import { BehaviorSubject, Observable } from "rxjs";

export interface ElementRulerRef {
  change: Observable<Size>;

  dispose(): void;
}

@Injectable()
export class ElementRuler {
  constructor(private zone: NgZone) {
  }

  create(node: any, throttleTime = 0): ElementRulerRef {
    let previousWidth = 0;
    let previousHeight = 0;
    let animationFrameId: number | undefined;

    const _change = new BehaviorSubject({width: previousWidth, height: previousHeight});

    const watchOnFrame = () => {
      const {width, height} = node.getBoundingClientRect();

      if (width !== previousWidth || height !== previousHeight) {
        previousWidth = width;
        previousHeight = height;
        _change.next({width: previousWidth, height: previousHeight});
      }

      animationFrameId = requestAnimationFrame(watchOnFrame);
    };

    this.zone.runOutsideAngular(watchOnFrame);

    const dispose = () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      _change.complete();
    };

    const obs = _change.asObservable();
    const change = throttleTime > 0 ? obs.pipe(auditTime(throttleTime)) : obs;

    return {dispose, change};
  }
}

export interface Size {
  width: number,
  height: number
}
