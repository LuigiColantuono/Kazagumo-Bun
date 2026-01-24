
import { KazagumoTrack } from './Managers/Supports/KazagumoTrack';
import { KazagumoQueue } from './Managers/Supports/KazagumoQueue';
import { KazagumoPlayer } from './Managers/KazagumoPlayer';
import Plugins from './Modules/Plugins';
// import KazagumoPlayer from "./Managers/KazagumoPlayer";
// import { KazagumoOptions } from "./Modules/Interfaces";


export * from './Kazagumo';
export { KazagumoTrack, KazagumoQueue, KazagumoPlayer, Plugins };
export * from './Modules/Interfaces';

export const version = '3.4.0b';
