/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
declare const TimelineModes: readonly ["left", "alternate", "right", "custom"];
export type NzTimelineMode = (typeof TimelineModes)[number];
declare const TimelinePositions: readonly ["left", "right"];
export type NzTimelinePosition = (typeof TimelinePositions)[number];
type NzCustomColor = string;
export declare const TimelineTimeDefaultColors: readonly ["red", "blue", "green", "grey", "gray"];
export type NzTimelineItemColor = (typeof TimelineTimeDefaultColors)[number] | NzCustomColor;
export {};
